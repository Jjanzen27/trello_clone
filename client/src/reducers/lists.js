export default function lists(state = [], action) {
    switch (action.type) {
        case "FETCH_BOARD_SUCCESS": {
            const { lists } = action.board;
            return lists.map(list => {
                let { cards, ...listWithoutCards } = list
                return listWithoutCards
            })
        }
        default:
            return state;
    }
}
