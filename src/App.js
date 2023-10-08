//import logo from './logo.svg';
import './App.css';
import Person from './components/Person';
import Header from './components/Header';
import Lonely from './components/Lonely';
import { useState } from 'react';
import data from './data/data.json';

function App() {

const [people,setPeople]=useState(data);
const [likedUsers,setLikedUsers]=useState([]);
const [superLikedUsers,setSuperLikedUsers]=useState([]);
const [dislikedUsers,setDislikedUsers]=useState([]);
const activeUser = 0;
const removedPersonFromDataSrc= (peopleSource,userId)=>
peopleSource.filter(user=>user.id !==userId);


const modifySuperficialChoices = (userId, action) => {
  const newPeople= [...people];
  const newLikedUsers= [...likedUsers];
  const newSuperLikedUsers = [...superLikedUsers];
  const newDislikedUsers = [...dislikedUsers];
  switch(action){
    case 'Add_TO_LIKED_USERS':
      if(!people[activeUser].likedUsers.includes(userId)){
        newPeople[activeUser].likedUsers.push(userId);
        newLikedUsers.push(data[userId]);
        setLikedUsers(newLikedUsers);
        setPeople(removedPersonFromDataSrc(people,userId));
      }break;
    case 'ADD_TO_DISLIKED_USERS':
      if(!people[activeUser].dislikedUsers.includes(userId)){
        newPeople[activeUser].dislikedUsers.push(userId);
        newDislikedUsers.push(data[userId]);
        setDislikedUsers(newLikedUsers);
        setPeople(removedPersonFromDataSrc(people,userId));
      
        
      }  break;
      case 'ADD_TO_SUPERLIKED_USERS':
        if(!people[activeUser].superLikedUsers.includes(userId)){
          newPeople[activeUser].superLikedUsers.push(userId);
          newSuperLikedUsers.push(data[userId]);
          setSuperLikedUsers(newSuperLikedUsers);
          setPeople(removedPersonFromDataSrc(people,userId));

        }
        break;
        default:
          return people;
  }

}


  return (
    <div className="App">

      <Header/>
    
    {people[1] ? (
      <Person
       key={people[1].id}
       person={people[1]}
       modifySuperficialChoices={modifySuperficialChoices}
      likedUsers={likedUsers}
      />
    ):
    <Lonely
    activeUserImage={people[activeUser].image}
    likedUsers={likedUsers}
    superLikedUsers={superLikedUsers}
    />

  }
      
      <div>
       <footer className="text-center text-sm p-5">
          Made with ♥ in&nbsp;
          <a href="https://codux.com">Codux</a>
          &nbsp;with&nbsp;
          <a href="https://radix-ui.com">RadixUI</a>
          &nbsp;and&nbsp;
          <a href="https://tailwindcss.com">TailwindCSS</a>
        </footer>
    </div>
     
    </div>
  );
}

export default App;
