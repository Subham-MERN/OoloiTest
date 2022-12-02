import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    commentList: '',
    name: '',
    comment: '',
    isLiked: false,
  }

  onChangeUpdateName = event => {
    this.setState({name: event.target.value})
  }

  onChangeUpdateComment = event => {
    this.setState({comment: event.target.value})
  }

  likeStatusChange = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onDeleteComment = id => {
    const {commentList} = this.state
    const updatedList = commentList.filter(eachComment => id !== eachComment.id)
    this.setState({commentList: updatedList})
  }

  onClickAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const initialBackgroundColorClassName = `initial ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      initialClassname: initialBackgroundColorClassName,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
    }))
  }

  render() {
    const {name, comment, commentList, initialClassname} = this.state
    const condition =
      commentList.length !== 0 ? (
        <div className="bottomcard">
          <ul className="ulmod">
            {commentList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                eachComment={eachComment}
                onDeleteComment={this.onDeleteComment}
                likeStatusChange={this.likeStatusChange}
              />
            ))}
          </ul>
        </div>
      ) : null

    return (
      <div className="mainbg">
        <div className="maincard">
          <h1>Comments</h1>
          <div className="minicard">
            <img
              className="pic"
              alt="comments"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            />
            <div className="comments-container">
              <p>Say something about 4.0 Technologies</p>
              <form
                onSubmit={this.onClickAddComment}
                className="comments-container"
              >
                <input
                  className="inpt"
                  value={name}
                  placeholder="Your Name"
                  onChange={this.onChangeUpdateName}
                />
                <textarea
                  placeholder="Your Comment"
                  rows="8"
                  className="txtbox"
                  value={comment}
                  onChange={this.onChangeUpdateComment}
                />
                <button className="btn" type="submit">
                  Add Comment
                </button>
              </form>
            </div>
          </div>
          <hr className="ruler" />
          <div className="comment-text-container">
            <p className="countrmod">{commentList.length}</p>
            <p>Comments</p>
          </div>
          {condition}
        </div>
      </div>
    )
  }
}
export default Comments
