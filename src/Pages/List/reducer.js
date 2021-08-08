import produce from "immer";

export const initialState = {};

const ListReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      default:
        return draft;
    }
  });

export default ListReducer;
