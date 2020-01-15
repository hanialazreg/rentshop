const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const cookieParser = require("cookie-parser");
const withAuth = require("./routes/middleware/middleware");
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || `mongodb://localhost:27017/rentshop`
);

app.use(bodyParser.json());
app.use(cookieParser());
// import all routes here
require("./routes/productRoute")(app);
require("./routes/userRoutes")(app);

//redirect all the requests to our frontend application, unless we specify any route before this code.

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
