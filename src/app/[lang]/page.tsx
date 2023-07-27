import Footer from '@/src/components/home/Footer'
import About from '@/src/components/home/About'
import Main from '@/src/components/home/Main'
import Portfolio from '@/src/components/home/Portfolio'
import ShapeDivider from '@/src/components/home/ShapeDivider'

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
                <Portfolio />
              </div>
          </div>
      </section>
      <footer className='h-[534px] w-full max-w-screen-xl m-auto'>
        <Footer />
      </footer>
    </div>
  )
}
