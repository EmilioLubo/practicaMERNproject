import './index.css'
import data from './data/events1'
import { useState } from 'react'
import Info from './components/Info'
import Slider from './components/Slider'

function App() {

  let [count, setCount] = useState(0)

  let countLess = () => {
    count > 0 ? setCount(--count) : setCount(data.length - 1)
  }
  let countPlus = () => {
    count < data.length - 1 ? setCount(++count): setCount(0)
  }

  return (
    <div className='card black'>
      <h2 className='titulo white flex j-center a-center'>CINEMA</h2>
      <img src={data[count].image} alt={data[count].name} className='photo' />
      <Info text={data[count].name} />
      <Info text={data[count].category}/>
      <Info text={data[count].description}/>
      <div className='flex j-center a-center'>
        <Slider position='r25' name='PREVIEW' action={countLess}/>
        <p className='gray flex j-center a-center'>HIDE DETAILS</p>
        <p className='gray flex j-center a-center'>VIEW DETAILS</p>
        <Slider position='l25' name='NEXT' action={countPlus}/>
      </div>
    </div>
  )
}

export default App