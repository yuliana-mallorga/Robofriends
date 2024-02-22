import CardList from '../component/CardList'
import { robots } from '../robots'

function App() {
  
  return (
    <>
        <h1 className='f1 pa4 tc bb bg-near-black'>Welcome to Robofriend</h1>
        <CardList robots= { robots }/>     
    </>
  )
}

export default App
