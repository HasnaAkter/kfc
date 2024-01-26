import Main from "../layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Popular from "../pages/Home/ItemPages/Popular";
import ComboItems from "../pages/Home/ItemPages/ComboItems";
import SnacksItems from "../pages/Home/ItemPages/SnacksItems";
import JuicychickenItems  from "../pages/Home/ItemPages/JuicychickenItems";
import DrinksItems  from "../pages/Home/ItemPages/DrinksItems";
import ComboBasketsItems  from "../pages/Home/ItemPages/ComboBasketsItems";
import BoxesItems  from "../pages/Home/ItemPages/BoxesItems";
import AdditionallyItem from "../pages/Home/ItemPages/AdditionallyItem";
import Newitems from "../pages/Home/ItemPages/Newitems";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'popular',
        element:<Popular></Popular>
      },
      {
        path:'addi',
        element:<AdditionallyItem></AdditionallyItem>
      },
      {
        path:'Boxesitem',
        element:<BoxesItems ></BoxesItems>
      },
      {
        path:'comboBas',
        element:<ComboBasketsItems ></ComboBasketsItems>
      },
      {
        path:'drinksitem',
        element:<DrinksItems ></DrinksItems>
      },
      {
        path:'juicy',
        element:<JuicychickenItems ></JuicychickenItems>
      },
      {
        path:'newitem',
        element:<Newitems></Newitems>
      },
      {
        path:'snack',
        element:<SnacksItems></SnacksItems>
      },
      {
        path:'comboitem',
        element:<ComboItems></ComboItems>
      },
     
     
    ]
  },
    
]);
