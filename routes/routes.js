var express = require("express");
var path = require("path");

var apiRoutes = require("./apiRoutes");

var router = express.Router();

router.use("/api", apiRoutes);

router.get('/test', (req, res)=>{
  res.send("in the test route now");
})

router.get("*", function(req, res) {
    console.log("in * route");
    res.send("hello world inside route");
  // res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
