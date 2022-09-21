import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import { GameBanner } from './components/GameBanner'
import { CreateAddBanner } from './components/CreateAddBanner'
import './styles/main.css'
import logoImg from './assets/logo.svg'
import { GameController } from 'phosphor-react';

//interface with games props
interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  //Using Hooks, useState to change values and Effect to prevent default reload of API
  //Setting useState variables
  const [games, setGames] = useState<Game[]>([])
  //Consuming
  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data => {
        setGames(data)
        console.log(data)
      })
  }, [])

  return (
    //Main div
    <main className='max-w[1344px] mx-auto flex flex-col items-center  my-20'>
      <figure>
        <img src={logoImg} />
      </figure>
      <h1 className='text-6xl text-white font-black mt-20'>
        Your<span className='text-transparent bg-nlw-gradient  bg-clip-text'> duo</span> is here.
      </h1>

      <section className='grid grid-cols-6 gap-6 mt-16 mx-2'>
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              ads={game._count.ads}
            />
          )
        })}
      </section>

      <footer className='pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden mx-4'>
        <Dialog.Root>
          <CreateAddBanner />

          <Dialog.Portal>
            <Dialog.Overlay
              className='bg-black/60 inset-0 fixed'
            />

            <Dialog.Content
              className='fixed 
              bg-[#2A2634] 
              py-8 px-10 
              text-white 
              top-1/2 
              left-1/2 
              -translate-x-1/2 
              -translate-y-1/2 
              rounded-lg 
              w-[480px]
              shadow-black/25'
            >
              <Dialog.Title className='text-3xl font-black'>Create a AD</Dialog.Title>

              <Dialog.Content >
                <form >
                  <div>
                    <label htmlFor="game">What game do you wanna play ?</label>
                    <input id="game" placeholder='Select the game that you gonna play' />
                  </div>

                  <div>
                    <label htmlFor="name">Your name (or Nickname)</label>
                    <input id="name" placeholder='What are you called in this game?' />
                  </div>

                  <div>
                    <div>
                      <label htmlFor="yearsPlaying">How many years do you play ?</label>
                      <input id="yearsPlaying" type="number" placeholder="It's okay if you're starting now" />
                    </div>
                    <div>
                      <label htmlFor="discord">What's your discord ?</label>
                      <input id="discord" placeholder='User#00000' />
                    </div>
                  </div>

                  <div>
                    <div>
                      <label htmlFor="weekDays">When do you usually play ?</label>
                    </div>
                    <div>
                      <label htmlFor="hourStart">What time do you play ?</label>
                      <div>
                        <input id="hourStart" type="time" placeholder="Start" />
                        <input id="hourEnd" type="time" placeholder="End" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <input type="checkbox" name="" id="" />
                    i usually open my voice chat
                  </div>

                  <footer>
                    <button>Cancel</button>
                    <button type="submit">
                      <GameController />
                      Find your Duo
                    </button>
                  </footer>

                </form>
              </Dialog.Content>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </footer>
    </main>
  )
}

export default App
