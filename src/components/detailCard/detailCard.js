import { useQuery } from 'react-query'
import axios from 'axios'
import CommentSection from '@/components/commentSection/commentSection'

async function fetchFilm(id = 1) {
  const response = await axios.get(
    `https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true`
  )
  return response.data.data
}

export default function DetailCard(props) {
  const id = props.id
  const { data, isLoading, isError } = useQuery([id, 'film'], () =>
    fetchFilm(id)
  )

  if (isError) {
    return <h1>Error</h1>
  }

  if (isLoading) {
    return (
      <div className='d-flex justify-content-center'>
        <div
          class='spinner-border'
          style={{ color: '#f7bc46', width: '5rem', height: '5rem' }}
          role='status'
        >
          <span class='visually-hidden'>Loading...</span>
        </div>
      </div>
    )
  }

  if (!data) {
    return <h1>No data</h1>
  }
  const movie = data.movie

  return (
    <div className='container-detail ml-4 p-5 mb-5'>
      <div className='row row-cols-1 row-cols-md-2'>
        <div class='col'>
          <div class='project-info-box mt-0'>
            <h5 className='card-title'>
              <b>{movie.title_long}</b>
            </h5>
            {movie.description_full && (
              <p
                class='card-body-text-detail mb-0'
                style={{ textAlign: 'justify' }}
              >
                {movie.description_full}
              </p>
            )}
          </div>
          <div class='mt-3 project-info-box'>
            <p class='mb-0 card-title'><b>Дата загрузки:</b> {movie.date_uploaded}</p>
            <p class='mb-0 card-title'> <b>Рейтинг:</b> {movie.rating}  </p>
            <p class='mb-0 card-title'> <b>Год выпуска:</b> {movie.year} </p>
            <p class='mb-0 card-title'><b>Продолжительность:</b> {movie.runtime} минут</p>
            <p class='mb-0 card-title'>  <b>Жанры:</b> {movie.genres.join(', ')} </p>
            <p class='mb-0 card-title'> <b>Понравилось:</b> {movie.like_count ? movie.like_count : 0} </p>
            <p class='mb-0 card-title'>
              <a
                target='_blank'
                href={'https://www.imdb.com/title/' + movie.imdb_code}
                className='no-decoration'
              >
                <b>Ссылка imdb</b>
              </a>
            </p>
          </div>
        </div>
        <div class='col col-img'>
          <img src={movie.large_cover_image} class='img-fluid' />
        </div>
        <div className='col w-100'>
          <CommentSection movieId={movie.id}></CommentSection>
        </div>
      </div>
    </div>
  )
}
