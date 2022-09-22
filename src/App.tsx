import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import { GameBanner } from './components/GameBanner'
import { CreateAddBanner } from './components/CreateAddBanner'
import './styles/main.css'
import logoImg from './assets/logo.svg'
import { GameController } from 'phosphor-react';
import { Input } from './components/Input';

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
        Seu<span className='text-transparent bg-nlw-gradient  bg-clip-text'> duo</span> está aqui.
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
              <Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>

              <form className='mt-8 flex flex-col gap-4'>
                <div>
                  <label htmlFor="game" className='font-semibold block'>Qual o game? </label>
                  <Input id='game' placeholder='Selecione o game que deseja jogar' />
                </div>

                <div>
                  <label htmlFor="name">Seu nome (ou nickname)</label>
                  <Input id="name" placeholder='Como te chamam dentro do game?' />
                </div>

                <div className='grid grid-cols-2 gap-6'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="yearsPlaying" >Joga há quantos anos?</label>
                    <Input id="yearsPlaying" type="number" placeholder="Tudo bem ser ZERO" />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="discord">Qual seu Discord?</label>
                    <Input id="discord" placeholder='User#00000' />
                  </div>
                </div>

                <div className='flex gap-6'>
                  <div className='flex flex-col gap-2' >
                    <label htmlFor="weekDays">Quando costuma jogar?</label>

                    <div className='grid grid-cols-4 gap-2'>
                      <button className='w-8 h-8 rounded bg-zinc-900' title='Domingo'>D</button>
                      <button className='w-8 h-8 rounded bg-zinc-900' title='Segunda'>S</button>
                      <button className='w-8 h-8 rounded bg-zinc-900' title='Terça'>T</button>
                      <button className='w-8 h-8 rounded bg-zinc-900' title='Quarta'>Q</button>
                      <button className='w-8 h-8 rounded bg-zinc-900' title='Quinta'>Q</button>
                      <button className='w-8 h-8 rounded bg-zinc-900' title='Sexta'>S</button>
                      <button className='w-8 h-8 rounded bg-zinc-900' title='Sábado'>S</button>
                    </div>
                  </div>
                  <div className='flex flex-col gap-2 flex-1'>
                    <label htmlFor="hourStart">Qual horário do dia ?</label>
                    <div className='flex gap-2'>
                      <Input id="hourStart" type="time" placeholder="De" />
                      <Input id="hourEnd" type="time" placeholder="Até" />
                    </div>
                  </div>
                </div>


                <div className='mt-2 flex gap-2 text-sm' >
                  <input type="checkbox" />
                  Costumo me conectar ao chat de voz
                </div>

                <footer className='mt-4 flex justify-end gap-4'>
                  <Dialog.Close className='bg-zinc-500 hover:bg-zinc-600 px-5 h-12 rounded-md font-semibold'>Cancelar</Dialog.Close>
                  <Dialog.Close className='flex bg-violet-500 hover:bg-violet-600 px-5 h-12 items-center rounded-md gap-2 font-semibold' type="submit" >
                    <GameController size={24} />
                    Encontrar duo
                  </Dialog.Close>
                </footer>

              </form>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </footer>
    </main>
  )
}

export default App
