import { CONSTANTS } from "../actions";

let listID = 2
let cardID = 5


const initialState = [
  {
    title: 'judul satu',
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: "text satu"
      },
      {
        id: `card-${1}`,
        text: "text dua"
      }
    ]
  },
  {
    title: 'judul dua',
    id:`list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: "text satu"
      },
      {
        id: `card-${3}`,
        text: "text dua"
      },
      {
        id: `card-${4}`,
        text: "text tiga"
      }
    ]
  }
]

const listsReducer = (state = initialState, action) => {
  switch(action.type){
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id:`list-${listID}`
      }
      listID += 1
      return [...state, newList]

    case CONSTANTS.ADD_CARD:
      const newCard = {
        text: action.payload.text,
        id: `card-${cardID}`,
      }
      cardID += 1
      const newState = state.map(list => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          }
        } else {
          return list
        }
      })
      return newState

    default:
      return state;
  }
}

export default listsReducer