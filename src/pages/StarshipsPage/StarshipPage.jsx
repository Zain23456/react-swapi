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
}
    