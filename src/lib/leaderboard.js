export const leaderboardDataToArray = (board) => {
  let leaderboard = [];
  for (let key in board) {
    leaderboard.push(board[key]);
  }
  return leaderboard;
};

export const sortLeaderboardArray = (board) =>
  board.sort((a, b) => {
    return a[1] < b[1] ? -1 : 1;
  });

export const leaderbordBinarySearchInsert = (boardArray, score) => {
  let left = 0;
  let right = boardArray.length - 1;

  while (left < right) {
    const mid = Math.trunc(left + (right - left) / 2);

    if (boardArray[mid][1] <= score[1]) {
      left = mid + 1;
      continue;
    }
    if (boardArray[mid][1] > score[1]) {
      right = mid - 1;
      continue;
    }
  }

  boardArray.splice(left, 0, score); //insert score
  boardArray.pop(); // remove 11th place
};
