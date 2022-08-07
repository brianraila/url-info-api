const router = require("express").Router();
const { getLinkPreview } = require("../controllers/linkPreviewController");

router.route("/").get(getLinkPreview);

module.exports = router;
