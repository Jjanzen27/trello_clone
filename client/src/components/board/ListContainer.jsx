import List from "./List"
import { useSelector } from 'react-redux'
import { useState } from 'react'

const ListContainer = () => {
  const lists = useSelector(state => state.lists)
  const [addFormVisible, setAddFormVisible] = useState(false)
  const [newListTitle, setNewListTitle] = useState("")

  const toggleAddFormVisible = () => { setAddFormVisible(!addFormVisible) }
  const updateNewListTitle = (e) => { setNewListTitle(e.target.value) }

  return (
    <main>
      <div id="list-container" className="list-container">
        <div id="existing-lists" className="existing-lists">
          {lists.map(list => {
            return (
              <List list={list} key={list._id}/>
            )
          })}
        </div>
        <div id="new-list" className={addFormVisible ? "new-list selected" : "new-list"}>
          <span onClick={toggleAddFormVisible}>Add a list...</span>
          <input type="text" placeholder="Add a list..." value={newListTitle} onChange={updateNewListTitle} />
          <div>
            <input type="submit" className="button" value="Save" />
            <i className="x-icon icon" onClick={toggleAddFormVisible}></i>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ListContainer
