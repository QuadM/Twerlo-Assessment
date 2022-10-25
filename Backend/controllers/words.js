const { Words } = require("../models/words");
// getting the words list from JSON file / DB

module.exports = {
  getRandomStrictRandomWords: async (req, res) => {
    try {
      let wordsList = new Words(
        require("../TestData (2)[2839].json")["wordList"]
      );
      wordsList = wordsList.pickRandomSample(10, true);
      res.status(200).json(wordsList);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Error occured while getting the data",
      });
    }
  },
};
