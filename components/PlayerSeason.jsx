import React, {useState, useEffect} from 'react'
import Select from 'react-select'
import { getPlayerListOptions } from '../helpers/util'

export default function PlayerSeason({ seasons, changeSeason }) {
  const [selected, setSelected] = useState('')
  const handleChange = selected => {
    changeSeason(selected.value)
    setSelected(selected)
  }

  return (
    <Select value={selected}
            onChange={handleChange}
            options={seasons} />
  )
}
