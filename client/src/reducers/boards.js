export default function boards(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARDS_SUCCESS": {
      return action.boards;
    }
    case "CREATE_BOARD_SUCCESS": {
      const newBoard = action.board;
      return state.concat(newBoard);
    }
    case "FETCH_BOARD_SUCCESS": {
      const { lists, ...boardWithoutLists } = action.board;
      console.log("boards", boardWithoutLists)
      return [boardWithoutLists];
    }
    default:
      return state;
  }
}