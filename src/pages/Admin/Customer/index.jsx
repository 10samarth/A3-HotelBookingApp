import React from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  ,
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
];

const data = [
  {
    id: 1,
    name: "John Doe",
    roomType: "Single Deluxe",
    checkInDate: "2023-05-15",
    checkOutDate: "2023-05-20",
  },
  {
    id: 2,
    name: "Jane Smith",
    roomType: "Double Standard",
    checkInDate: "2023-05-10",
    checkOutDate: "2023-05-16",
  },
  {
    id: 3,
    name: "Bob Johnson",
    roomType: "Family Economy",
    checkInDate: "2023-05-12",
    checkOutDate: "2023-05-14",
  },
  {
    id: 4,
    name: "Lisa Chen",
    roomType: "Single Basic",
    checkInDate: "2023-05-18",
    checkOutDate: "2023-05-22",
  },
  {
    id: 5,
    name: "Mike Brown",
    roomType: "Presidential",
    checkInDate: "2023-05-05",
    checkOutDate: "2023-05-10",
  },
  {
    id: 6,
    name: "Karen Lee",
    roomType: "Double Basic",
    checkInDate: "2023-05-08",
    checkOutDate: "2023-05-13",
  },
  {
    id: 7,
    name: "David Kim",
    roomType: "Single Standard",
    checkInDate: "2023-05-09",
    checkOutDate: "2023-05-12",
  },
  {
    id: 8,
    name: "Emily Wong",
    roomType: "Family Deluxe",
    checkInDate: "2023-05-16",
    checkOutDate: "2023-05-19",
  },
  {
    id: 9,
    name: "Chris Wilson",
    roomType: "Double Economy",
    checkInDate: "2023-05-11",
    checkOutDate: "2023-05-14",
  },
  {
    id: 10,
    name: "Julia Martinez",
    roomType: "Family Standard",
    checkInDate: "2023-05-14",
    checkOutDate: "2023-05-20",
  },
  {
    id: 11,
    name: "Alex Kim",
    roomType: "Single Basic",
    checkInDate: "2023-05-22",
    checkOutDate: "2023-05-24",
    },
    {
    id: 12,
    name: "Emily Lee",
    roomType: "Double Deluxe",
    checkInDate: "2023-05-25",
    checkOutDate: "2023-05-30",
    },
    {
    id: 13,
    name: "Ryan Park",
    roomType: "Presidential Suite",
    checkInDate: "2023-05-29",
    checkOutDate: "2023-06-03",
    },
    {
    id: 14,
    name: "Michelle Chen",
    roomType: "Single Economy",
    checkInDate: "2023-06-01",
    checkOutDate: "2023-06-05",
    },
    {
    id: 15,
    name: "David Wong",
    roomType: "Family Standard",
    checkInDate: "2023-06-06",
    checkOutDate: "2023-06-12",
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


function CustomersComponent() {
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);

  const filteredItems = data.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
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
        {/* <DataTable columns={columns} data={data} /> */}
        <DataTable
         actions={actionsMemo}
          title="Customer List"
          columns={columns}
          data={filteredItems}
          pagination
          paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
          selectableRows
          persistTableHead
          style={{width:'100%'}}
        />
      </div>
    </>
  );
}

export default CustomersComponent;
