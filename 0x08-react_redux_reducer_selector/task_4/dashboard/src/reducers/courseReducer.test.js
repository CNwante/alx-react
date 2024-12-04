import { courseReducer } from "./courseReducer";
import * as actionTypes from "../actions/courseActionTypes";

describe("CourseReducer test", () => {
  const courses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  it("should return the default state", () => {
    const newState = courseReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it("should handle FETCH_COURSE_SUCCESS", () => {
    const action = {
      type: actionTypes.FETCH_COURSE_SUCCESS,
      data: courses,
    };

    const expectedState = [
      { id: 1, name: "ES6", credit: 60, isSelected: false },
      { id: 2, name: "Webpack", credit: 20, isSelected: false },
      { id: 3, name: "React", credit: 40, isSelected: false },
    ];

    const newState = courseReducer(undefined, action);
    expect(newState).toEqual(expectedState);
  });

  it("should handle SELECT_COURSE", () => {
    const initialState = [
      { id: 1, name: "ES6", credit: 60, isSelected: false },
      { id: 2, name: "Webpack", credit: 20, isSelected: false },
      { id: 3, name: "React", credit: 40, isSelected: false },
    ];

    const action = {
      type: actionTypes.SELECT_COURSE,
      index: 2,
    };

    const expectedState = [
      { id: 1, name: "ES6", credit: 60, isSelected: false },
      { id: 2, name: "Webpack", credit: 20, isSelected: true },
      { id: 3, name: "React", credit: 40, isSelected: false },
    ];

    const newState = courseReducer(initialState, action);
    expect(newState).toEqual(expectedState);
  });

  it("should handle UNSELECT_COURSE", () => {
    const initialState = [
      { id: 1, name: "ES6", credit: 60, isSelected: false },
      { id: 2, name: "Webpack", credit: 20, isSelected: true },
      { id: 3, name: "React", credit: 40, isSelected: false },
    ];

    const action = {
      type: actionTypes.UNSELECT_COURSE,
      index: 2,
    };

    const expectedState = [
      { id: 1, name: "ES6", credit: 60, isSelected: false },
      { id: 2, name: "Webpack", credit: 20, isSelected: false },
      { id: 3, name: "React", credit: 40, isSelected: false },
    ];

    const newState = courseReducer(initialState, action);
    expect(newState).toEqual(expectedState);
  });
});
