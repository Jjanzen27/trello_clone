import React, {useEffect } from "react";
import { useParams } from "react-router-dom"

const Board =() => {
    const id = useParams().id
    return (
        <h1>{id}</h1>
    )
}

export default Board;