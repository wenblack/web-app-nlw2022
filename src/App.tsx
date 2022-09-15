import { MagnifyingGlassPlus } from 'phosphor-react'
import './styles/main.css'
import logoImg from './assets/logo.svg'


function App() {
  return (
    //Main div
    <main className='max-w[1344px] mx-auto flex flex-col items-center  my-20'>
      <figure>
        <img src={logoImg} />
      </figure>
      <h1 className='text-6xl text-white font-black mt-20'>
        Your<span className='text-transparent bg-nlw-gradient  bg-clip-text'> duo</span> is here.
      </h1>

      <section className='grid grid-cols-6 gap-6 mt-16'>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="game1.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-zinc-300 text-sm block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block '>4 Ads</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="game2.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-zinc-300 text-sm block'>DOTA 2</strong>
            <span className='text-zinc-300 text-sm block '>5 Ads</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="game3.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-zinc-300 text-sm block'>CS GO</strong>
            <span className='text-zinc-300 text-sm block '>3 Ads</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="game4.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-zinc-300 text-sm block'>World of Warcraft</strong>
            <span className='text-zinc-300 text-sm block '>1 Ads</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="game5.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-zinc-300 text-sm block'>Apex Legends</strong>
            <span className='text-zinc-300 text-sm block '>6 Ads</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="game6.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-zinc-300 text-sm block'>Fortnite</strong>
            <span className='text-zinc-300 text-sm block '>4 Ads</span>
          </div>
        </a>
      </section>

      <footer className='pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden mx-4'>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black block'>Don't find your duo?</strong>
            <span className='text-zinc-400 block'>Make a AD to find players!</span>
          </div>

          <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3'>
            <MagnifyingGlassPlus size={24}/>
            Create a AD
          </button>
        </div>
      </footer>
    </main>
  )
}

export default App
