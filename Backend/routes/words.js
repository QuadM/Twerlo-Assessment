const express = require("express");
const router = express.Router();
const wordsController = require("../controllers/words");

/**
 * @api {get} /words
 * @apiName getRandomStrictRandomWords
 * @apiGroup words Router
 * @apiVersion 1.0.0
 * @apiSuccess :object[] - [{id:number, word:String, pos:String},...]
 * @apiError (Error 500) internalServerError Error occured during the process from the server
 */
router.get("/words", wordsController.getRandomStrictRandomWords);
module.exports = router;
