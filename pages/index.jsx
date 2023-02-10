import { useEffect, useState } from 'react';
import styled from 'styled-components';
import App from '../src/App';
import {DataLayer} from '../src/components/DataLayer';
import reducer, { initialState } from "../src/reducer";


function HomePage () {

  return (   
      <DataLayer initialState={initialState} reducer={reducer}>
        <App/>
      </DataLayer>
  )
}


export default HomePage