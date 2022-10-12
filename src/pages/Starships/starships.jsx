import { useEffect, useState } from 'react'
import { getAllStarships } from '../../services/api-calls'
import { Link } from 'react-router-dom'

const Starships = () => {
  const [starships, setStarships] = useState([])

  useEffect(()=> {
    const fetchAllStarships = async () => {
      const starshipsData = await getAllStarships()
      setStarships(starshipsData.results)
    }
      fetchAllStarships()
  }, [])


return (
  <>
  <div>
      <h3>Starships</h3>
      <div className="icon-container">
        {starships.map((starshipName, index) =>
          <Link key={index} state={{ starshipName }} to='/starships'>
            <div className="class-div" >
              {starshipName.name}
            </div>
          </Link>
        )}
      </div>
    </div>
  </>
)
}

export default Starships
    