export default function cards(state = [], action) {
    switch (action.type) {
        case "FETCH_BOARD_SUCCESS": {
            const { lists } = action.board;
            let allCards = [];
            lists.forEach(list => {
                const { cards } = list;
                allCards = allCards.concat(cards);
            })
            console.log("allCards in reducer: ", allCards)
            return allCards;
        }
        default:
            return state;

    }
}
