import React, {useState, useEffect} from 'react'

export default function PlayerSearch({players}) {
  const [search, setSearch] = useState()
  const [searchResults, setSearchResults] = useState([])
  const handleChange = event => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    const results = players.filter(player => {
      const fullName = player.firstName + ' ' + player.lastName
      return fullName.toLowerCase().includes(search.toLowerCase())}
    )
    setSearchResults(results)
  }, [search])

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleChange}
      />
      <ul>
         {searchResults.map(item => (
          <li>{item.firstName}</li>
        ))}
      </ul>
    </div>
  )
}
