export default function lists(state = [], action) {
    switch (action.type) {
        case "FETCH_BOARD_SUCCESS": {
            const { lists } = action.board;
            const returnValue = lists.map(list => {
                let { cards, ...listWithoutCards } = list
                return listWithoutCards
            })
            return returnValue
        }
        default:
            return state;
    }
}
