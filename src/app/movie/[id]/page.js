'use client'

import { useParams } from 'next/navigation'
import DetailCard from '@/components/detailCard/detailCard';

export default function Movie() {
  const id = useParams().id;

  return (
    <DetailCard id={id}></DetailCard>
  )
}
