const express = require("express");
const router = express.Router();
const rankController = require("../controllers/rank");

/**
 * @api {post} /rank
 * @apiName getRank
 * @apiGroup rank Router
 * @apiVersion 1.0.0
 * @apiSuccess :object - {rank:[calculatedRank :String]}
 * @apiError (Error 500) internalServerError Error occured during the process from the server
 */
router.post("/rank", rankController.getRank);
module.exports = router;
