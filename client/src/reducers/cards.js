export default function cards(state = [], action) {
    switch (action.type) {
        case "FETCH_BOARD_SUCCESS": {
            const { lists } = action.board;
            let allCards = [];
            console.log("all cards before forEach", allCards)
            lists.forEach(list => {
                console.log("list and list's cards", list, list.cards)
                const { cards } = list;
                allCards = allCards.concat(cards);
            })
            console.log("allCards after forEach: ", allCards)
            return allCards;
        }
        default:
            return state;

    }
}
