import Featured from '@/components/Featured'
import Offer from '@/components/Offer'
import Silder from '@/components/Silder'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <Silder />
      <Featured />
      <Offer />
       </main>
  )
}
