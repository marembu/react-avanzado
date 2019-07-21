import React from 'react'
import { ListOfCategories } from './components/listOfCategories'
import { ListOfPhotoCards } from './components/listOfPhotoCards'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
export const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards />
  </React.Fragment>
)
