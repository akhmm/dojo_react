import { useState } from 'react'
import './App.css'
import Students from "./components/Students.jsx"


/*tableau des eleve (prenom, nomdefamille, boolean)*/

const liste = [
  {
    firstName: "Akane",
    lastName: "Fukui",
  },
  {
    firstName: "Nadine",
    lastName: "Motel",
  },
   {
    firstName: "Sissis",
    lastName: "Ul",
  }, 
  {
    firstName: "Caroline",
    lastName: "Gallix",
  },
  {
    firstName: "Ange",
    lastName: "Kouakou",
  },

]
function App() {

  return (

      <div>
       
        {
        liste.map((student) => {
        return <Students key={student.firstName} firstName={student.firstName} lastName={student.lastName} /> 
        }) 
        }
        
      </div>

  )
}

export default App
