import About from '@/src/components/home/About'
import Main from '@/src/components/home/Main'
import ShapeDivider from '@/src/components/home/ShapeDivider'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-full w-full '>
      <section className='h-screen w-full max-w-screen-xl m-auto'>
        <Main />
      </section>
      
      <section className='h-screen w-full bg-bg flex flex-col'>
          <ShapeDivider />

          <div className='flex-1 w-full bg-bg_secondary'>
              <div className='max-w-screen-xl m-auto h-full w-full grid grid-rows-2'>
                <About />
                <div className="grid grid-cols-2 grid-rows-6 h-full w-full">
                  <div className="col-span-2 row-span-1">
                    <h1>About</h1>
                  </div>
                  <div className="row-span-5 w-full h-full"></div>
                  <div className="row-span-5 w-full h-full"></div>
                </div> 
              </div>
          </div>
      </section>
      <footer className='h-[534px] w-full max-w-screen-xl m-auto'>
        footer
      </footer>
    </div>
  )
}
