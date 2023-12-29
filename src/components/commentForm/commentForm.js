export default function CommentForm(props) {
  return (
    <form
      onSubmit={props.handleSubmit}
      class='d-flex row flex-row add-comment-section mt-4 mb-4'
    >
      <textarea
        name='comment'
        type='text'
        class='col-5 form-control mr-3'
        placeholder='Введите комментарий'
      />

      <button class='col-comment-button mt-2 btn btn-primary' type='submit'>
        Комментировать
      </button>
    </form>
  )
}
