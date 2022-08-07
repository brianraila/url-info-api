const router = require("express").Router();
const linkpreviewRoutes = require("./linkpreview");

router.use("/linkpreview", linkpreviewRoutes);

module.exports = router;
