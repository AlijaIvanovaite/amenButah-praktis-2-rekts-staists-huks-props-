import './App.css'
import { useState } from 'react';//!!!
import ChaCard from './componetns/Charakter/Charakter'
import Heder from './componetns/Heder/Heder'

function App() {
  // { name:"", 
  //     age: "", 
  //     job: "",
  //     rank: "",
  //     img: ""
  //   },
  
  return (
    <>
      <Heder tema='"Call of Duty"'/>
      <div className='catalog'>
        <h2 className='hCenter'>Call of Duty: Ghosts</h2>
        <div className='folder'>
          {Gousts.map(ghost => (<ChaCard key={ghost.id} name={ghost.name} age={ghost.age} job={ghost.job} rank={ghost.rank} img={ghost.img}/>))}
        </div>
      </div>
      <div className='catalog mwii'>
        <h2 className='hCenter'>Call of Duty: Modern Warfare II (MWII, reboot)</h2>
        <div className='folder'>
          {MW2.map(character => (<ChaCard key={character.id} name={character.name} age={character.age} job={character.job} rank={character.rank} img={character.img}/>))}
        </div>
      </div>
      
      
    </>
  )
}

export default App
