import { useState } from "react"
import './App.css'
import Nav from './assets/components/nav/nav'
import Search from './assets/components/search/Search'
import Cocktails from './assets/components/cocktail/Cocktails'

function App() {

  const cocktails = Array(9).fill(null);
  console.log(cocktails)

  // ----- darkmode -----
  // const darkMode = true
  const darkMode = false

  // let [darkMode, setDarkMode] = useState(false)

  // console.log(darkMode)

  return (
    <>
    <div className={ darkMode ? "dark" : "light"}>
    
     <Nav/>
     <Search/>
     <h2 className='cocktailsTitre'>Cocktails</h2>
     <section>
          {cocktails.map((_, index) => (
              <Cocktails key={index} />
          ))}

     </section>
     </div>
    </>
  )
}

export default App
