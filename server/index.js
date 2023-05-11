const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes/apiRoutes');
const connectDB = require('./config/database');

connectDB();
// app.use(cors());

app.use(cors({
	origin: "*",
	resources: "/*"
}));

app.use(express.json());
app.use('/api', router)
const PORT = 8000;
app.get('/', (req, res) => {
	res.status(200);
	res.send("Welcome to root URL of Server");
});

app.listen(PORT, (error) => {
	if (!error)
		console.log("Server is Successfully Running,and App is listening on port " + PORT)
	else
		console.log("Error occurred, server can't start", error);
}
);
