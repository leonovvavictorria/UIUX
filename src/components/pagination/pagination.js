export default function Pagination(props) {
  let pages = []
  const currentPage = props.currentPage
  const maxPages = props.maxPages
  const setPage = props.setPage

  if (currentPage <= 3) {
    pages = [...Array(Math.min(maxPages, 5)).keys()].map((i) => i + 1)
  } else {
    let i = currentPage - 2
    while (i <= parseInt(currentPage) + 2 && i <= maxPages) {
      pages.push(i)
      i++
    }
  }
  return (
    <nav aria-label='Page navigation example'>
      <ul className='pagination'>
        <li className='page-item'>
          <a className={'no-decoration page-link' + (currentPage != 1 ? '' : ' disabled')}
            onClick={() => setPage(currentPage - 1)}
          >
            <b>{'<'}</b>
          </a>
        </li>
        {pages.map((page) => (
          <li className='page-item'>
            <a className={ 'no-decoration page-link' + (currentPage != page ? '' : ' active')}
              onClick={() => setPage(page)}
            >
              <b>{page}</b>
            </a>
          </li>
        ))}
        <li className='page-item'>
          <a className={'no-decoration page-link' +(currentPage != maxPages ? '' : ' disabled')}
            onClick={() => setPage(currentPage + 1)}
          >
            <b>{'>'}</b>
          </a>
        </li>
      </ul>
    </nav>
  )
}
