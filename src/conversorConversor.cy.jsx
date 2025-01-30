import React from 'react'
import Conversor from './conversor'

describe('<Conversor />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Conversor />)
  })
})