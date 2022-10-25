const { shuffle, pickRandomIndex } = require("../utils/utils");
class Words {
  _word_list;

  /***************************************************************************************
   * @constructor
   * @inputs
   *    @list :wordObject[ ] - wordObject's structure: { id: number,
   *                                                   word: string,
   *                                                   pos: string }
   ***************************************************************************************/
  constructor(list) {
    this._word_list = [...list];
  }

  // enunmerating/hashing pos to prevent cheating for thos who knows how to scrap over "inspect" code.
  posHashMapping = {
    verb: "65tfg876ghji87rfgo98ytg6tgh87ytgh",
    adverb: "65tfg87tghuytgyh9o98ytg6tgh87ytgh",
    noun: "65tfg6tgh87ytgh76tfvbijgfdxc7ytgh",
    adjective: "65tfgh9ihghji87rfgo98ytg6t7t7ytgh",
  };

  // Returns hashed _word_list
  get word_list() {
    return this.listHashAdaptor(this._word_list, this.posHashMapping, "pos");
  }
  set word_list(list) {
    this._word_list = [...list];
  }

  /***************************************************************************************
   * @method listHashAdaptor
   * @inputs
   *    @list         :wordObject[ ] - the list that has a field that shall be hashed,
   *    @listHashMap  :posHashMapObject[ ] - posHashMapObject's structure:
   *                    { [target] : [hashString: String]}
   *                   -  the list htat contains the field mappeed to its hash string,
   *    @target        :String - the field that shall be hashed.
   *
   * @output :wordObject[ ] - contains the list after hashing the target field.
   ***************************************************************************************/
  listHashAdaptor(list, listHashMap, target) {
    let pos,
      result = list.map((element) => ({ ...element }));
    result.map((element) => {
      pos = element[target];
      element[target] = listHashMap[pos];
    });
    return result;
  }
  /*****************************************************************************************/

  /*******************************************************************************************
   * @method pickRandomSample
   * @inputs
   *    @sampleLength :number - number of samples to be picked.
   *    @isStrict     :boolean - [Optional] stricted to pick from all categories if true.
   *
   * @output :wordObject[ ] - randomly picked wordObjects.
   ******************************************************************************************/
  pickRandomSample(sampleLength, isStrict) {
    let result = [];
    let listClone = this.word_list.map((e) => ({ ...e })); //Clone list original not to be changed accidentally

    if (isStrict) {
      const poses = [
        "65tfg876ghji87rfgo98ytg6tgh87ytgh",
        "65tfg87tghuytgyh9o98ytg6tgh87ytgh",
        "65tfg6tgh87ytgh76tfvbijgfdxc7ytgh",
        "65tfgh9ihghji87rfgo98ytg6t7t7ytgh",
      ];

      //categorizing the words [[verb...],[nous...],...] depending on poses
      const categorized = poses.map((pos) =>
        listClone.filter((e) => e["pos"] === pos)
      );

      let categorizedIterator = 0; // used to iterate once over each category

      for (let i = 0; i < sampleLength; i++) {
        for (let j = 0; j <= poses.length; j++) {
          //used poses length to confirm checking each category
          if (categorized[categorizedIterator % poses.length].length === 0) {
            //if a category is empty skip to the next else break [continue normally]
            ++categorizedIterator;
          } else {
            break;
          }
        }
        // break if all categories are empty and log an error of a an unsuitable sample length
        if (categorized[categorizedIterator % poses.length].length === 0) {
          console.error(
            " No enough words exist -- unsuitable sample length -- returning less or no words :\n",
            result
          );
          break;
        }
        result.push(
          categorized[categorizedIterator % poses.length].splice(
            pickRandomIndex(
              categorized[categorizedIterator % poses.length].length
            ),
            1
          )[0]
        );
        categorizedIterator++;
      }
    }
    // if strict input is false or undefined[not inputted]
    else {
      for (let i = 0; i < sampleLength; i++) {
        if (listClone.length === 0) {
          console.error(
            " No enough words exist -- returning less or no words :\n",
            result
          );
          break;
        }
        result.push(listClone.splice(pickRandomIndex(listClone.length), 1)[0]);
      }
    }
    return shuffle(result);
  }
  /*****************************************************************************************/
}

exports.Words = Words;
