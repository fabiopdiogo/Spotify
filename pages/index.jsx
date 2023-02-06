import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Column from '../src/components/Sections/Column'
import Content from '../src/components/Sections/Content'

import ColumnAndContent from '../src/components/Sections/ColumnAndContent'

function HomePage () {

  return (
    <> 
      <ColumnAndContent>
        <Content />
      </ColumnAndContent>
    </>   
  )
}


export default HomePage