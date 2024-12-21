import Navbar from "./components/Navbar"
import { SearchBar } from './components/SearchBar';
import { Card }  from './components/Card.jsx';
import ProfilePage from './components/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const TempSearchPage = () => {
    <div>
        <div className="search-bar-container"></div>
      <Navbar/>
      <SearchBar/>
      <ProfilePage />
    
          {/* Profile Page Route */}
         

      <div className="App">
      <div className="col">
        <Card
          imgSrc="https://picsum.photos/id/201/300/200"
          imgAlt="Card Image 1"
          title="Rose"
          description="Wants to learn: Spanish"
          canTeach="Can teach: English"
          buttonText="View Profile"
          link="card2"
        />
        <Card
          imgSrc="https://picsum.photos/id/201/300/200"
          imgAlt="Card Image 2"
          title="Pierre"
          description="Wants to learn: Photography"
          canTeach="Can teach: Web Development"
          buttonText="View Profile"
          link="card2"
        />
        <Card
          imgSrc="https://picsum.photos/id/193/300/200"
          imgAlt="Card Image 3"
          title="Bob"
          description="Wants to learn: Music"
          canTeach="Can teach: Photography"
          buttonText="View Profile"
          link="card2"
        />
      </div>
      <div className="col">
        <Card
          imgSrc="https://picsum.photos/id/211/300/200"
          imgAlt="Card Image 1"
          title="Carla"
          description="Wants to learn: Music"
          canTeach="Can teach: Cooking"
          buttonText="View Profile"
          link="card1"
        />
        <Card
          imgSrc="https://picsum.photos/id/250/300/200"
          imgAlt="Card Image 3"
          title="Emma"
          description="Wants to learn: cooking"
          canTeach="Can teach: Yoga"
          buttonText="View Profile"
          link="card2"
        />
        <Card
          imgSrc="https://picsum.photos/id/250/300/200" 
          imgAlt="Card Image 3"
          title="John"
          description="Wants to learn: Gardening"
          canTeach="Can teach: English"
          buttonText="View Profile"
          link="card2"
        />
      </div>
      <div className="col">
        <Card
          imgSrc="https://picsum.photos/id/106/300/200"
          imgAlt="Card Image 1"
          title="Hannah"
          description="Wants to learn: Fitness"
          canTeach="Can teach: French"
          buttonText="View Profile"
          link="card1"
        />

        <Card
          imgSrc="https://picsum.photos/id/193/300/200"
          imgAlt="Card Image 3"
          title="Kaitlyn"
          description="Wants to learn: Playing Piano"
          canTeach="Can teach: Knitting"
          buttonText="View Profile"
          link="card2"
        />
        <Card
          imgSrc="https://picsum.photos/id/193/300/200"
          imgAlt="Card Image 3"
          title="Ishaan"
          description="Wants to learn: Painting"
          canTeach="Can teach: Cooking"
          buttonText="View Profile"
          link="card2"
        />
        
      </div>
    </div>
    </div>
}