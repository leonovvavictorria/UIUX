import { useEffect, useState, useReducer } from 'react'
import CommentForm from '../commentForm/commentForm'
import CommentItem from '../commentItem/commentItem'

function getComments(movieId) {
  const comments = localStorage.getItem(movieId)
  return comments ? JSON.parse(comments) : []
}

export default function CommentSection(props) {
  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const comment = new FormData(form).get('comment')
    form.reset()

    if (comment == '') return
    setComments([comment, ...comments])
  }
  function commentDelete(id) {
    setComments(comments.filter((com, ind) => ind != id))
  }

  let [comments, setComments] = useState(getComments(props.movieId))

  useEffect(() => {
    localStorage.setItem(props.movieId, JSON.stringify(comments))
  })

  return (
    <div className='col-lg-12 col-md-12 col-sm-12'>
      <div className='coment-bottom p-2 px-4'>
        <CommentForm handleSubmit={handleSubmit}></CommentForm>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <CommentItem id={index} comment={comment} deleteFunct={commentDelete}
            />
          ))
        ) : ( <p>Комментарии отсутствуют.</p> )}
      </div>
    </div>
  )
}
