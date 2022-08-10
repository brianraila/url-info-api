const router = require("express").Router();
const { getLinkPreview } = require("../controllers/linkpreviewController");

router.route("/").get(getLinkPreview);

module.exports = router;
