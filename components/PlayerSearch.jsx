import React, {useState, useEffect} from 'react'
import Select from 'react-select'
import { getPlayerListOptions } from '../helpers/util'

export default function PlayerSearch({ players, changePlayer }) {
  const [selected, setSelected] = useState('')
  const handleChange = selected => {
    const player = {id: selected.value, name: selected.label}
    if (player != null) {
      console.log(player)
      changePlayer(player)
    }
    setSelected(selected)
  }

  return (
    <Select value={selected}
            onChange={handleChange}
            options={players} />
  )
}
