'use client'

import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'

import Pagination from '@/components/pagination/pagination'
import Card from '@/components/card/card'
import axios from 'axios'

import { useSearchParams } from 'next/navigation'

async function fetchFilms(pagen = 1) {
  const response = await axios.get(
    `https://yts.mx/api/v2/list_movies.json?page=${pagen}`
  )

  return response.data.data
}

function getLastSessionPage() {
  const searchParams = useSearchParams()
  const page = searchParams.get('page')

  return page ?? 1
}

export default function Grid(props) {
  const [page, setPage] = useState(getLastSessionPage())
  const { data, isLoading, isError } = useQuery(
    [page, 'movies'],
    () => fetchFilms(page),
    {
      keepPreviousData: true,
    }
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

  const movies = data.movies
  const maxPages = Math.ceil(data.movie_count / data.limit)
  
  return (
    <div className='container main pb-5 pt-5'>
      <div className='container overflow-hidden w-md-50'>
        <div className='row row-cols-2 row-cols-md-5 g-4 gy-5'>
          {movies.map((card) => (
            <div className='col'>
              <Card
                id={card.id}
                title={card.title}
                image={card.medium_cover_image}
              ></Card>
            </div>
          ))}
        </div>
        <Pagination
          currentPage={page}
          maxPages={maxPages}
          setPage={setPage}
        ></Pagination>
      </div>
    </div>
  )
}
