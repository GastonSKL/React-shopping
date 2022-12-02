import { useState } from "react"
import { useQuery } from "react-query";

import Drawer from '@material-ui/core/Drawer';
import LinearProgress from "@material-ui/core/LinearProgress";
import { Grid } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";

import { Wrapper } from './AppStyles';

import { CartItemType} from './Types/types'

const getCharacter = async():Promise<CartItemType[]> => await(await fetch('https://www.swapi.tech/api/people')).json();

function App() {
  

  return (
    <div className="App">
      
    </div>
  )
}

export default App
