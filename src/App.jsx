import Navbar from "./components/Navbar"
import { SearchBar } from './components/SearchBar';
import { Card }  from './components/Card.jsx';
const App = () => {
  return (
    <div className=''>
      <div className="search-bar-container"></div>
      <Navbar/>
      <SearchBar/>
      
      <div className="App">
      <div className="col">
        <Card
          imgSrc="https://picsum.photos/id/201/300/200"
          imgAlt="Card Image 1"
          title="Rose"
          description="Wants to learn Spanish"
          buttonText="Start Chatting"
          link="card2"
        />
        <Card
          imgSrc="https://picsum.photos/id/201/300/200"
          imgAlt="Card Image 2"
          title="Card Title"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
          link="card2"
        />
        <Card
          imgSrc="https://picsum.photos/id/193/300/200"
          imgAlt="Card Image 3"
          title="Card Title"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
          link="card2"
        />
      </div>
      <div className="col">
        <Card
          imgSrc="https://picsum.photos/id/211/300/200"
          imgAlt="Card Image 1"
          title="Card Title"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
          link="card1"
        />
        <Card
          imgSrc="https://picsum.photos/id/250/300/200"
          imgAlt="Card Image 3"
          title="Card Title"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
          link="card2"
        />
        <Card
          imgSrc="https://picsum.photos/id/250/300/200" 
          imgAlt="Card Image 3"
          title="Card Title"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
          link="card2"
        />
      </div>
      <div className="col">
        <Card
          imgSrc="https://picsum.photos/id/106/300/200"
          imgAlt="Card Image 1"
          title="Card Title"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
          link="card1"
        />

        <Card
          imgSrc="https://picsum.photos/id/193/300/200"
          imgAlt="Card Image 3"
          title="Card Title"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
          link="card2"
        />
        <Card
          imgSrc="https://picsum.photos/id/193/300/200"
          imgAlt="Card Image 3"
          title="Card Title"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
          link="card2"
        />
        
      </div>
    </div>

    </div>
  );
}

export default App;