import { CONSTANTS } from "../actions";

let listID = 2
const initialState = [
  {
    title: 'judul satu',
    id:0,
    cards: [
      {
        id: 0,
        text: "text satu"
      },
      {
        id: 1,
        text: "text dua"
      }
    ]
  },
  {
    title: 'judul dua',
    id:1,
    cards: [
      {
        id: 0,
        text: "text satu"
      },
      {
        id: 1,
        text: "text dua"
      },
      {
        id: 2,
        text: "text tiga"
      }
    ]
  }
]

const listsReducer = (state = initialState, action) => {
  switch(action.type){
    case CONSTANTS.ADD_LIST:
      const newList ={
        title: action.payload,
        cards: [],
        id: listID
      }
      listID += 1
      return [...state, newList]
    default:
      return state;
  }
}

export default listsReducer