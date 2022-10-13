import { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom"
import { getDetails } from "../../services/api-calls"

const StarshipPage = () => {
  const [starshipPage, setStarshipPage] = useState({})
  const location = useLocation()
  console.log(location.state)

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipPageData = await getDetails(location.state.starshipName.url)
      console.log(starshipPage)
      setStarshipPage(starshipPageData)
    }
    fetchDetails()
  }, [location.state.starshipName.url])

  return (
    <>
    <div className='center-page'>
      <div  className="page-class-div">
        {starshipPage.name ?
        <>
          <h2>NAME: {starshipPage.name}</h2>
          <h3>MODEL: {starshipPage.model}</h3>
          <Link to='/'>Return</Link>
        </>
        :
        <>
          <p>Loading class details...</p>
        </>}
      </div>
    </div>
    </>
  )
}

export default StarshipPage