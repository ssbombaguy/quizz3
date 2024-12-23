import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'

const  App = () => {
  const [data,setData] = useState([])
  const [titles,setTitles] = useState([])
  const [bodys,setBodys] = useState([])
    const [loading,setLoading] =useState(false)
    const [refresh,setRefresh] = useState(0)
    const [errorhandler,setErrorHandler] = useState(null)
    const refreshHandler = () => {
        setRefresh(refresh+1)
    }
  useEffect(() => {

    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {

            // console.log(response)
          console.log(response)
            setData(response.data)
            console.log(data)
          data.map(( index) => {
              setTitles(index.title)
              setBodys(index.body)
          })
            console.log(titles)
            console.log(bodys)


            setLoading(true)



        })
        .catch(function (error) {
          // handle error
          console.log(error);
            setErrorHandler(error)
        })
        .finally(function () {
          // always executed
        });
  }, [refresh]);
  return (
    <>{loading ? <div>
        <h1>bomba</h1>
        <button onClick={refreshHandler}>refresh</button>
        {errorhandler && <h1>{errorhandler}</h1>}
    </div> : <div>
        <h1>Loading</h1>
        {errorhandler && <h1>{errorhandler}</h1>}
    </div>}
    </>
  )
}

export default App
