const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

//enable cors
app.use(cors());
app.use(express.json());

// Morgen middleware for logging the requests
app.use(morgan(":method :url :status "));

app.use("/api", require("./routes/rank"));
app.use("/api", require("./routes/words"));

// listen to specific port
const port = process.env.PORT || 4000;

const Server = app.listen(port, (err) => {
  if (err) return console.error(err);
  console.log(`Listening to port ${port}`);
});
