import Main from '@/src/components/home/Main'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-full w-full '>
      <section className='h-screen w-full max-w-screen-xl m-auto'>
        <Main />
      </section>
      <section className='h-screen w-full bg-slate-400'>Hello 2</section>
      <footer className='h-[534px] w-full max-w-screen-xl m-auto'>
        footer
      </footer>
    </div>
  )
}
