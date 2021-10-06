import React, {useEffect } from "react";
import { useParams } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { fetchBoard } from "../../actions/BoardActions";

const Board =() => {
    const id = useParams().id;
    const boards = useSelector(state => state.boards)
    const board = boards.find(b => b._id === id)

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchBoard(id))
    }, [dispatch, id, fetchBoard]);
    
    if (board) {
        console.log(board);
    }

    return (
        <h1>{id}</h1>
    )
}

export default Board;