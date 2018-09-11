import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';


const initialState = {
  items:[
    {id: uuid(), name: 'eggs' },
    {id: uuid(), name: 'milk' },
    {id: uuid(), name: 'water' },
    {id: uuid(), name: 'bread' }
  ]
}


export default function(state = initialState, action){
  switch(action.types){
    case GET_ITEMS:
      return{
        ...state
      }
      default:
        return state;
  }
}