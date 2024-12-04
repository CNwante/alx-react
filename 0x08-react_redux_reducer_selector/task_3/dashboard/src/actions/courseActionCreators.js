import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
} from "./courseActionTypes";

export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index: index,
  };
}

export const boundSelectCourse = (index) => (dispatch) =>
  dispatch(selectCourse(index));

export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index: index,
  };
}

export const boundUnSelectCourse = (index) => (dispatch) =>
  dispatch(unSelectCourse(index));

export function fetchCourseSuccess(data) {
  return {
    type: FETCH_COURSE_SUCCESS,
    data,
  };
}

export const boundFetchCourseSuccess = (data) => (dispatch) =>
  dispatch(fetchCourseSuccess(data));
