  import Link from 'next/link'

export default function Card(props) {
  const onError = (e) => {
    e.target.onerror = null
    e.target.src = '/fon.jpg'
  }

  return (
    <Link className='no-decoration' href={'/movie/' + props.id}>
      <div className='card-item text-start h-100'>
        <img
          className='card-item-img-top'
          src={props.image}
          onError={(e) => onError(e)}
        />
        <div className='card-item-body'>
          <h4 className='card-item-title'>{props.title}</h4>
        </div>
      </div>
    </Link>
  )
}
