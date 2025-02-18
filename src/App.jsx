import './App.css'
import Nav from './assets/components/nav/nav'
import Search from './assets/components/search/Search'
import Cocktails from './assets/components/cocktail/Cocktails'

function App() {

  const cocktails = Array(9).fill(null);
  console.log(cocktails)

  return (
    <>
     <Nav/>
     <Search/>
     <h2 className='cocktailsTitre'>Cocktails</h2>
     <section>
          {cocktails.map((_, index) => (
              <Cocktails key={index} />
          ))}


          {/* <Cocktails/>
          <Cocktails/>
          <Cocktails/>

          <Cocktails/>
          <Cocktails/>
          <Cocktails/>

          <Cocktails/>
          <Cocktails/>
          <Cocktails/> */}
     </section>
    </>
  )
}

export default App
