import { CONSTANTS } from "../actions"


export const addList = title => {
  return {
    type: CONSTANTS.ADD_LIST,
    payload: title
  }
}

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId
) => {
  // return (dispatch, getState) => {
  //   const boardID = getState().activeBoard;
  //   dispatch({
  //     type: CONSTANTS.DRAG_HAPPENED,
  //     payload: {
  //       droppableIdStart,
  //       droppableIdEnd,
  //       droppableIndexEnd,
  //       droppableIndexStart,
  //       draggableId
  //     }
  //   });
  // };
  return {
    type: CONSTANTS.DRAG_HAPPENED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexEnd,
      droppableIndexStart,
      draggableId
    }
  }
}

// export const editTitle = (listID, newTitle) => {
//   return {
//     type: CONSTANTS.EDIT_LIST_TITLE,
//     payload: {
//       listID,
//       newTitle
//     }
//   };
// };

// export const deleteList = listID => {
//   return (dispatch, getState) => {
//     const boardID = getState().activeBoard;
//     return dispatch({
//       type: CONSTANTS.DELETE_LIST,
//       payload: {
//         listID,
//         boardID
//       }
//     });
//   };
// };
