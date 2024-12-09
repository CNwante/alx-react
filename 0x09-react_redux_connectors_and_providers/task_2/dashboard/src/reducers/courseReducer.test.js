import { courseReducer } from "./courseReducer";
import * as actionTypes from "../actions/courseActionTypes";
import { fromJS } from "immutable";

describe("CourseReducer test", () => {
  const courses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  it("should return the default state", () => {
    const newState = courseReducer(undefined, {});
    expect(newState.toJS()).toEqual({
      entities: { courses: {} },
      result: [],
    });
  });

  it("should handle FETCH_COURSE_SUCCESS", () => {
    const action = {
      type: actionTypes.FETCH_COURSE_SUCCESS,
      data: courses,
    };

    const expectedState = fromJS({
      entities: {
        courses: {
          1: { id: 1, name: "ES6", credit: 60, isSelected: false },
          2: { id: 2, name: "Webpack", credit: 20, isSelected: false },
          3: { id: 3, name: "React", credit: 40, isSelected: false },
        },
      },
      result: [1, 2, 3],
    });

    const newState = courseReducer(undefined, action);
    expect(newState.toJS()).toEqual(expectedState.toJS());
  });

  it("should handle SELECT_COURSE", () => {
    const initialState = fromJS({
      entities: {
        courses: {
          1: { id: 1, name: "ES6", credit: 60, isSelected: false },
          2: { id: 2, name: "Webpack", credit: 20, isSelected: false },
          3: { id: 3, name: "React", credit: 40, isSelected: false },
        },
      },
      result: [1, 2, 3],
    });

    const action = {
      type: actionTypes.SELECT_COURSE,
      index: 2,
    };

    const expectedState = fromJS({
      entities: {
        courses: {
          1: { id: 1, name: "ES6", credit: 60, isSelected: false },
          2: { id: 2, name: "Webpack", credit: 20, isSelected: true },
          3: { id: 3, name: "React", credit: 40, isSelected: false },
        },
      },
      result: [1, 2, 3],
    });

    const newState = courseReducer(initialState, action);
    expect(newState.toJS()).toEqual(expectedState.toJS());
  });

  it("should handle UNSELECT_COURSE", () => {
    const initialState = fromJS({
      entities: {
        courses: {
          1: { id: 1, name: "ES6", credit: 60, isSelected: false },
          2: { id: 2, name: "Webpack", credit: 20, isSelected: true },
          3: { id: 3, name: "React", credit: 40, isSelected: false },
        },
      },
      result: [1, 2, 3],
    });

    const action = {
      type: actionTypes.UNSELECT_COURSE,
      index: 2,
    };

    const expectedState = fromJS({
      entities: {
        courses: {
          1: { id: 1, name: "ES6", credit: 60, isSelected: false },
          2: { id: 2, name: "Webpack", credit: 20, isSelected: false },
          3: { id: 3, name: "React", credit: 40, isSelected: false },
        },
      },
      result: [1, 2, 3],
    });

    const newState = courseReducer(initialState, action);
    expect(newState.toJS()).toEqual(expectedState.toJS());
  });
});
