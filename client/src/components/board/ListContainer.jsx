import List from "./List"
import { useSelector } from 'react-redux'

const ListContainer = () => {
  const lists = useSelector(state => state.lists)
  const cards = useSelector(state => state.cards)
  console.log("Lists: ", lists)
  return (
    <main>
      <div id="list-container" className="list-container">
        <div id="existing-lists" className="existing-lists">
          {lists.map(list => {
            return (
              <List list={list}
              cards={cards.filter(card => {
                console.log("card: ", card)
                console.log("card.list_id: ", card.list_id)
                console.log("list._id: ", list._id)
                return card === list._id
              })} />
            )
          })}
        </div>
        <div id="new-list" className="new-list">
          <span>Add a list...</span>
          <input type="text" placeholder="Add a list..." />
          <div>
            <input type="submit" className="button" value="Save" />
            <i className="x-icon icon"></i>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ListContainer
