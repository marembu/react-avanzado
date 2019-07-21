import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    window.fetch('https://petgram-server-marembu.marembu.now.sh/categories/')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, [])

  /*
  async function fetchData () {
    const response = await window.fetch('https://petgram-server-marembu.marembu.now.sh/categories/')
    const json = await response.json()
    setCategories(json)
  }
  useEffect(() => {
    fetchData()
  }, [])
*/
  return (
    <List>
      {
        categories.map((category) => <Item key={category.id} ><Category {...category} /></Item>)
      }
    </List>
  )
}
