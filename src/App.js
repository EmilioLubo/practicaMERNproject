import './App.css'
import data from './data/events1'
import { useState, useEffect } from 'react'
import Info from './components/Info'
import Slider from './components/Slider'
import Displayer from './components/Displayer'

function App() {

  let [count, setCount] = useState(0)
  let [display, setDisplay] = useState(false)

  useEffect(() => {
    let interval =  setInterval(() => {
      countPlus()
    }, 5000);
    return () => {
      clearInterval(interval)
    }
  },)
  

  let countLess = () => {
    count > 0 ? setCount(--count) : setCount(data.length - 1)
  }
  let countPlus = () => {
    count < data.length - 1 ? setCount(++count): setCount(0)
  }
  let showDetails = () => {
    setDisplay(true)
  }
  let hideDetails = () => {
    setDisplay(false)
  }

  return (
    <main>
      <article className='card'>
        <h2 className='card__title'>{data[count].category}</h2>
        <div className='card__img--container'>
          <img className='card__img' src={data[count].image} alt={data[count].name} />
        </div>
        {display ? (<div className='card__details'>
                      <Info textType='card__name' text={data[count].name} />
                      <Info textType='card__desc' text={data[count].description}/>
                    </div>) : 
                    <></>
        }
        <div className='card__buttons'>
          <Slider name='PREVIEW' action={countLess}/>
          {display ? <Displayer action={hideDetails} name='HIDE DETAILS' /> :
          <Displayer action={showDetails} name='VIEW DETAILS' />
          }
          <Slider name='NEXT' action={countPlus}/>
        </div>
      </article>
    </main>
  )
}

export default App