// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {eachComment, likeStatusChange, onDeleteComment} = props
  const {id, name, comment, isLiked, initialClassname} = eachComment
  const initial = name.slice(0, 1)

  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const changeLikeStatus = () => {
    likeStatusChange(id)
  }
  const deleteComment = () => {
    onDeleteComment(id)
  }

  return (
    <li className="listmod">
      <div className="maincard2">
        <p className={initialClassname}>{initial}</p>
        <p className="namemod">{name}</p>
        <p className="datemod">{formatDistanceToNow(new Date())} ago</p>
      </div>
      <p className="comntmod">{comment}</p>
      <div className="icon-container">
        <button className="btnmod" type="button" onClick={changeLikeStatus}>
          <img alt="like" src={likeImgUrl} />
        </button>
        <button className="btnmod" type="button" onClick={deleteComment}>
          <img
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
          />
        </button>
      </div>
      <hr className="ruler" />
    </li>
  )
}

export default CommentItem
