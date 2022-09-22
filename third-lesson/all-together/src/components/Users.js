
import  { useState } from 'react';

const Users =({users}) =>{
  const [showState, setGameState] = useState(true);

  const hideHandler = () => {
    setGameState(!showState);
  };
  
  return (
    <div>
      <h2>Users</h2>
      <ol>
        {users.map((user) => {              
            const games =  showState ? user.games  : '*'
          return (
            <li
              key={user.userName}
            >{`${user.userName} have played ${games}  games`}</li>
          );
        })}
      </ol>
      <button onClick={hideHandler}>{ showState ? "hide" : "show"}</button>
    </div>
  );
}

export default Users
