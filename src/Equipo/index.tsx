import { data, useParams } from 'react-router'
import { useState, useEffect } from 'react'

interface TeamData {
  team: {
    name: string;
    info: {
      city: string;
      founded: string;
      stadium: string;
      president: string;
      last_title: string;
    };
    ranking: {
      position: string;
      competition: string;
    };
    social: {
      facebook: string;
      instagram: string;
      x: string;
    };
    links: {
      store: string;
      tickets: string;
    };
  };
}


function Equipo() {
  const { equipo } = useParams<{ equipo?: string }>()

  const [ranking, setRanking] = useState<Ranking[]>([])
  const [title, setTitle] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://raw.githubusercontent.com/sdtibata/dataliga/refs/heads/main/${equipo}.json`
        )
        const data = await res.json()

        setRanking(data.standings[0].ranking)
        setTitle(data.standings[0].competitionName)
      } catch (error) {
        console.error('Error cargando datos:', error)
      }
    }

    fetchData()
  }, [])

   if (!teamdata) return <p>Cargando...</p>;

  return (
    <>
        <h1>{teamData.team.name}</h1>
      <p>{equipo}</p>
    </>
    
  )
}

export default Equipo