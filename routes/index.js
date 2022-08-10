const router = require("express").Router();
const { getLinkPreview } = require("../controllers/linkpreviewController");
const linkpreviewRoutes = require("./linkpreview");

router.use("/linkpreview", linkpreviewRoutes);
router.use("/", getLinkPreview);

module.exports = router;
