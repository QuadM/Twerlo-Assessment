const calculateRank = require("../utils/rankCalculator").calculateRank;

module.exports = {
  getRank: async (req, res) => {
    try {
      if (req.body && req.body !== {}) {
        const clientScore = req.body.clientScore;
        const scoresList = require("../TestData (2)[2839].json")["scoresList"];
        const clientRank = calculateRank(scoresList, clientScore);
        res.status(200).json(clientRank);
      } else res.sendStatus(500);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Error occured while getting the data",
      });
    }
  },
};
