import React, { useCallback } from "react";
import { useParams } from "react-router-dom"
import List from "./List"
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import * as actions from "../../actions/BoardActions";

const ListContainer = () => {
  const id = useParams().id;
  const lists = useSelector(state => state.lists)
  const [addFormVisible, setAddFormVisible] = useState(false)
  const [newListTitle, setNewListTitle] = useState("")
  const dispatch = useDispatch()

  const toggleAddFormVisible = () => { setAddFormVisible(!addFormVisible) }
  const updateNewListTitle = (e) => { setNewListTitle(e.target.value) }
  
  const createNewList = useCallback((newList, callback) => {
      dispatch(actions.createList(newList, callback));
    },
    [dispatch]
  );
  
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();

    const newList = { boardId: id, list: { title: newListTitle} };
    console.log("submit:", newList )
    createNewList(newList, toggleAddFormVisible)
    },
    [createNewList, newListTitle]
  );

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
            <input type="submit" className="button" value="Save" onClick={handleSubmit} />
            <i className="x-icon icon" onClick={toggleAddFormVisible}></i>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ListContainer
