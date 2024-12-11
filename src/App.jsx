import Navbar from "./components/Navbar"
import { SearchBar } from './components/SearchBar';
import Card  from './components/Card.jsx';
const App = () => {
  return (
    <div className=''>
      <div className="search-bar-container"></div>
      <Navbar/>
      <SearchBar/>
      <div className="card-container">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </div>

    </div>
  )
}

export default App