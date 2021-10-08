import Card from "./Card"
import { useSelector } from 'react-redux'

const List = ({ list }) => {
  const allCards = useSelector(state => state.cards)
  const listCards = allCards.filter(c => c.listId === list._id)
  console.log(allCards, list)
  return (
    <div className="list-wrapper add-dropdown-active">
      <div className="list-background">
        <div className="list">
          <a className="more-icon sm-icon" href=""></a>
          <div>
            <input
              type="text"
              className="list-title"
              value={list.title}
              autoFocus="true"
            />
          </div>
          <div className="add-dropdown add-top">
            <div className="card"></div>
            <a className="button">Add</a>
            <i className="x-icon icon"></i>
            <div className="add-options">
              <span>...</span>
            </div>
          </div>
          <div id="cards-container" data-id="list-2-cards">
            {listCards.map(c => <Card card={c} />)}
          </div>
          <div className="add-dropdown add-bottom active-card">
            { // toggle active-card class when adding new card functionality
            }
            <div className="card">
              <div className="card-info"></div>
              <textarea name="add-card"></textarea>
              <div className="members"></div>
            </div>
            <a className="button">Add</a>
            <i className="x-icon icon"></i>
            <div className="add-options">
              <span>...</span>
            </div>
          </div>
          <div className="add-card-toggle" data-position="bottom">
            Add a card...
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
