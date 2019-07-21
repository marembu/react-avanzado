import React from 'react'
import { ListOfCategories } from './components/listOfCategories'
import { ListOfPhotoCards } from './components/listOfPhotoCards'
import { GlobalStyle } from './GlobalStyles'
export const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotoCards />
  </React.Fragment>
)
