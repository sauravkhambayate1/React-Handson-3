import React from 'react'
import { useState } from 'react'
// import Compo from './Compo'
import "./App.css"
function App() {
  // const [name, setName] = useState(" ");
  // const [department, setDepartment] = useState(" ");
  // const [rating, setRating] = useState();

  const [user, setUser] = useState({
    Name: "",
    Department: "",
    Rating: ""
  })

  const [data, setData] = useState([])
  const [truefalse, setTrueFalse] = useState(true)

  function onchange(e) {
    setUser({...user, [e.target.name]: e.target.value })
    console.log(user)

  }

  const Submit = (e) => {
    e.preventDefault()
    // console.log("hello")
    // const newdata = { name: nNameame, department: department, rating: rating }
   if(truefalse){
     setData([...data, user])

   }
    setTrueFalse(!truefalse)
    console.log(data)
  }



  return (
    <div className='main'>

      <h1 style={{ textAlign: "center"}}>Employee Feedback Form</h1>
      <form action="" onSubmit={Submit}>

        {truefalse ?
          <div>

            <label htmlFor='Name'>Name :  </label>
            <input type="text" name="Name" value={user.Name} onChange={onchange} className="input" /><br /><br />
            <label htmlFor='department'>Department :  </label>
            <input type="text" name="Department" value={user.Department} onChange={onchange} className="input" /><br /><br />
            <label htmlFor='rating'>Rating :</label>
            <input type="number" name="Rating" value={user.Rating} onChange={onchange} className="input" /><br /> <br />

           

          </div> :


  <div >
    {
      data.map((element, index) => {
        return (
          <div key={index} className='flex-cont'>
            <p><b>Name :</b> {element.Name}</p> &nbsp;
            <p><b> Department :</b> {element.Department}</p>&nbsp;
            <p><b>Rating :</b>  {element.Rating}</p>
          </div>
        )
      })
    }
  </div>
}
<button type='submit' className="submit" >{truefalse?<span>Submit</span> :<span>Go back</span>}</button>
            </form>


    </div >
  )
}

export default App
