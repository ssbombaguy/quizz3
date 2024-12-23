import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'

const  App = () => {
  const [data,setData] = useState([])
  const [titles,setTitles] = useState([])
  const [bodys,setBodys] = useState([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {

            // console.log(response)
            setData(response.data)
            setTitles(data.data.title)
            setBodys(data.data.body)
            console.log(titles)




        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
  }, []);
  return (
    <>
        <h1>bomba</h1>
    </>
  )
}

export default App
