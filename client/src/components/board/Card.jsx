const Card = ({ card }) => {
  return (
    <div className="card-background">
      <div className="card ">
        <i className="edit-toggle edit-icon sm-icon"></i>
        <div className="cover-image"></div>
        <div className="card-info">
          <p>
            { card.title }
          </p>
        </div>
        <div className="card-icons">
          <i className="clock-icon sm-icon due-soon ">Sep 5</i>
        </div>
      </div>
    </div>
  )
}

export default Card