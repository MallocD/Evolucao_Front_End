import { useEffect, useState } from 'react'

function App({users}) {
  
  return (
    <ul>
    {users.map(user=>{
      return <li key={user.id}>{user.name}</li>
    })}
    </ul>
    )
  }
  
  //SSR - Server side rendering no Front
  
  // export const getServerSideProps = async() =>{
  //   const headers = new Headers ()
  
  //   headers.append('Accept','application/json')
  
  //   const response = await fetch('http://localhost:3333/users', {headers})
  //   const data = await response.json()
  
  
  //   return { 
  //     props:{
  //       users : data.data,
  //     }
  //   }
  // }
  
  //SSG - Static Site Generation
  
  export const getStaticProps = async() =>{
    const headers = new Headers ()
    
    headers.append('Accept','application/json')
    
    const response = await fetch('http://localhost:3333/users', {headers})
    const data = await response.json()
    
    
    return { 
      props:{
        users : data.data,
      },
      revalidate : 5,
      
    }
  }
  
  export default App
  