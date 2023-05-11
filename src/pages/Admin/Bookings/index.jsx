import React from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";


const columns = [
  {
    name: "guestName",
    selector: (row) => row.guestName,
    sortable: true,
  },
  {
    name: "roomType",
    selector: (row) => row.roomType,
    sortable: true,
  },
  {
    name: "checkInDate",
    selector: (row) => row.checkInDate,
    sortable: true,
  },
  {
    name: "checkOutDate",
    selector: (row) => row.checkOutDate,
    sortable: true,
  },
  {
    name: "amount",
    selector: (row) => row.amount,
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    guestName: "John Doe",
    checkInDate: "2023-05-15",
    checkOutDate: "2023-05-20",
    roomType: "Deluxe",
    roomNumber: "101",
    amount: "$1000",
  },
  {
    id: 2,
    guestName: "Jane Smith",
    checkInDate: "2023-05-10",
    checkOutDate: "2023-05-16",
    roomType: "Standard",
    roomNumber: "102",
    amount: "$800",
  },
  {
    id: 3,
    guestName: "Bob Johnson",
    checkInDate: "2023-05-12",
    checkOutDate: "2023-05-14",
    roomType: "Basic",
    roomNumber: "201",
    amount: "$500",
  },
  {
    id: 4,
    guestName: "Lisa Chen",
    checkInDate: "2023-05-18",
    checkOutDate: "2023-05-22",
    roomType: "Economy",
    roomNumber: "202",
    amount: "$400",
  },
  {
    id: 5,
    guestName: "Mike Brown",
    checkInDate: "2023-05-05",
    checkOutDate: "2023-05-10",
    roomType: "Standard",
    roomNumber: "301",
    amount: "$800",
  },
  {
    id: 6,
    guestName: "Karen Lee",
    checkInDate: "2023-05-08",
    checkOutDate: "2023-05-13",
    roomType: "Basic",
    roomNumber: "302",
    amount: "$500",
  },
  {
    id: 7,
    guestName: "David Kim",
    checkInDate: "2023-05-09",
    checkOutDate: "2023-05-12",
    roomType: "Deluxe",
    roomNumber: "401",
    amount: "$1000",
  },
  {
    id: 8,
    guestName: "Emily Wong",
    checkInDate: "2023-05-16",
    checkOutDate: "2023-05-19",
    roomType: "Economy",
    roomNumber: "402",
    amount: "$400",
  },
  {
    id: 9,
    guestName: "Chris Wilson",
    checkInDate: "2023-05-11",
    checkOutDate: "2023-05-14",
    roomType: "Standard",
    roomNumber: "501",
    amount: "$800",
  },
  {
    id: 10,
    guestName: "Julia Martinez",
    checkInDate: "2023-05-14",
    checkOutDate: "2023-05-20",
    roomType: "Deluxe",
    roomNumber: "502",
    amount: "$1000",
  },
  {
    id: 11,
    guestName: "Samuel Johnson",
    checkInDate: "2023-05-22",
    checkOutDate: "2023-05-25",
    roomType: "Double Standard",
    roomNumber: "207",
    amount: "$650",
    },
    {
    id: 12,
    guestName: "Jennifer Lee",
    checkInDate: "2023-06-02",
    checkOutDate: "2023-06-05",
    roomType: "Presidential Suite",
    roomNumber: "1001",
    amount: "$2500",
    },
    {
    id: 13,
    guestName: "William Smith",
    checkInDate: "2023-06-10",
    checkOutDate: "2023-06-14",
    roomType: "Single Basic",
    roomNumber: "305",
    amount: "$400",
    },
    {
    id: 14,
    guestName: "Olivia Kim",
    checkInDate: "2023-06-16",
    checkOutDate: "2023-06-20",
    roomType: "Family Deluxe",
    roomNumber: "707",
    amount: "$1200",
    },
    {
    id: 15,
    guestName: "James Chen",
    checkInDate: "2023-06-22",
    checkOutDate: "2023-06-26",
    roomType: "Double Economy",
    roomNumber: "212",
    amount: "$500",
    }
];

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <input
      id="search"
      type="text"
      placeholder="Filter By Name"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    <button  className="btn btn-dark" onClick={onClear}>X</button>
  </>
);

function convertArrayOfObjectsToCSV(array) {
	let result;

	const columnDelimiter = ',';
	const lineDelimiter = '\n';
	const keys = Object.keys(data[0]);

	result = '';
	result += keys.join(columnDelimiter);
	result += lineDelimiter;

	array.forEach(item => {
		let ctr = 0;
		keys.forEach(key => {
			if (ctr > 0) result += columnDelimiter;

			result += item[key];
			
			ctr++;
		});
		result += lineDelimiter;
	});

	return result;
}

function downloadCSV(array) {
	const link = document.createElement('a');
	let csv = convertArrayOfObjectsToCSV(array);
	if (csv == null) return;

	const filename = 'export.csv';

	if (!csv.match(/^data:text\/csv/i)) {
		csv = `data:text/csv;charset=utf-8,${csv}`;
	}

	link.setAttribute('href', encodeURI(csv));
	link.setAttribute('download', filename);
	link.click();
}


const Export = ({ onExport }) => <button  className="btn btn-dark" onClick={e => onExport(e.target.value)}>Export</button>;


function BookingsComponent() {

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);

  const filteredItems = data.filter(
    (item) =>
      item.guestName && item.guestName.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  const actionsMemo = React.useMemo(() => <Export onExport={() => downloadCSV(data)} />, []);
  
  return (
    <>
       <div className="container " style={{ marginTop: "150px",    width: '970px' }}>
        <DataTable
        actions={actionsMemo}
          title="Booking List"
          columns={columns}
          data={filteredItems}
          pagination
          paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
          selectableRows
          persistTableHead
        />
      </div>
    </>
  );
}

export default BookingsComponent;
