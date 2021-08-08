/**
 * Homepage selectors
 */

import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectList = (state) => state.List || initialState;
const makeSelectList = () =>
  createSelector(selectList, (ListState) => ListState);

export { selectList, makeSelectList };
