import React from 'react'
import { ListOfCategories } from './components/listOfCategories'
import { GlobalStyle } from './GlobalStyles'
export const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <ListOfCategories />
  </React.Fragment>
)
