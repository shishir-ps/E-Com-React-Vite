import { useState } from 'react'
import './App.css'
import ListItems from './components/ListItems'
import items from './components/Todoitems'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>ToDo List using React</h1>
      <ol>
       {items.map((value)=>{
        return <ListItems item = {value} />

       })}
      </ol>
      
    </>
  )
}

export default App
