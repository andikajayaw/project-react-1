import React,{useState} from 'react';
import Tweet from './Tweet';


function App(){
  const [user, setUser] = useState([
    {name: 'An', message: 'Halo'},
    {name: 'Dika', message: 'Aku Andika'},
    {name: 'Jaya  ', message: "I'am awesome"} 
  ]);


  return(
    <div className="app">
      {user.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );
}

export default App;