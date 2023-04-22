import React, { useEffect, useState } from 'react'

const Games = () => {
    const [games, setGames] = useState([])
    useEffect(() => {
        fetch('https://api.rawg.io/api/games?key=3deaa2f5f8e64ccfa91064d33d80d2f5').then(res => res.json()).then(data => {
            setGames(data.results)
            console.log(data.results)
        }).catch(err => console.error("Error: ",err))
    }, [])
  return (
      <div>
          <ul className="flex flex-col">
              {games.map(game => (
                  <li key={game.id} className=" items-center space-x-2 py-10 px-20 text-xl font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                      {game.name}
                  </li>
              ))}
              
          </ul>
    </div>
  )
}

export default Games