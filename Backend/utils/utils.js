/******************************************************************************************
 * @function shuffle
 * @inputs
 *    @list :any[ ]    a list to be shuffled
 *
 * @output  :any[ ]    the same list after being shuffled
 ******************************************************************************************/
function shuffle(list) {
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = list[i];
    list[i] = list[j];
    list[j] = temp;
  }

  return list;
}
/*****************************************************************************************/

/******************************************************************************************
 * @function pickRandomIndex
 * @inputs
 *    @length :number     length of a list to get a random index from
 *
 * @output    :number     random index || 0 if length == 1 | -1 if else
 ******************************************************************************************/
function pickRandomIndex(length) {
  if (!length) return -1;
  const index = Math.round(Math.random() * (length - 1));
  return length === 1 ? 0 : index;
}
/*****************************************************************************************/

exports.shuffle = shuffle;
exports.pickRandomIndex = pickRandomIndex;
