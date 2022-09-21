import './styles/main.css'
import logoImg from './assets/logo.svg'
import { GameBanner } from './components/GameBanner'
import { CreateAddBanner } from './components/CreateAddBanner'


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
        <GameBanner
          bannerUrl='/game1.png'
          title='League of Legends'
          ads={4}
        />
        <GameBanner
          bannerUrl='/game2.png'
          title='DOTA 2'
          ads={4}
        />
        <GameBanner
          bannerUrl='/game3.png'
          title='CS GO'
          ads={4}
        />
        <GameBanner
          bannerUrl='/game4.png'
          title='WOW'
          ads={4}
        />
        <GameBanner
          bannerUrl='/game5.png'
          title='Apex Legend'
          ads={4}
        />
        <GameBanner
          bannerUrl='/game6.png'
          title='Fortnite'
          ads={4}
        />
      </section>

      <footer className='pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden mx-4'>
        <CreateAddBanner />
      </footer>
    </main>
  )
}

export default App
