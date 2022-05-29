import { useEffect, useState } from 'react'

function App() {

  const [users, setUsers] = useState([])
 useEffect(()=>{

   fetch('http://localhost:3333/users', {
     headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
   })
    .then(response => response.json())
    .then(data =>{
      setUsers(data.data)
   })
 })
  return (
  <ul>
      {users.map(user=>{
        return <li key={user.id}>{user.name}</li>
      })}
  </ul>
    )
}

export default App
