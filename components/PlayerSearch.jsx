import React, {useState, useEffect} from 'react'
import Select from 'react-select'
import { getPlayerListOptions } from '../helpers/util'

export default function PlayerSearch({ players }) {
  const [selected, setSelected] = useState(null)
  const handleChange = selected => {
    console.log(selected)
    setSelected(selected)
  }

  return (
    <Select value={selected}
            onChange={handleChange}
            options={players} />
  )
}
