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
    default:
      return state;
  }
}

export default listsReducer