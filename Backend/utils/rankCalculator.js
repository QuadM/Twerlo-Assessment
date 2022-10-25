/***************************************************************************************
 * @method calculateRank
 * @inputs
 *    @scoreList    :number[ ] - list of repeating scores.
 *    @score        :number    - client's earned score.
 * @output :String - the rank rounded to the nearest 100th.
 ***************************************************************************************/

function calculateRank(scoreList, score) {
  let candidateNo = 0;
  scoreList.map((element) => element < score && candidateNo++);
  const rank = ((candidateNo / scoreList.length) * 100).toFixed(2);
  return rank;
}

export { calculateRank };
