import { useEffect, useState } from 'react'
import styled from 'styled-components'
import App from '../src/App'
import DataLayer from '../src/components/DataLayer'

function HomePage () {

  return (   
      <DataLayer initialState reducer>
        <App/>
      </DataLayer>
  )
}


export default HomePage