import { fetchCourseSuccess, selectCourse, unSelectCourse } from "./courseActionCreators";
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe("Test for action creators", () => {
  test("selectCourse should return type: SELECT_COURSE, index: 1", () => {
    expect(selectCourse(1)).toEqual({ type: SELECT_COURSE, index: 1 });
  });

  test("unSelectCourse should return type: UNSELECT_COURSE, index: 1", () => {
    expect(unSelectCourse(1)).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });

  test("fetchCourse success returns the correct data", () => {
    const expectedResult = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: "ES6", isSelected: false, credit: 60 },
        { id: 2, name: "Webpack", isSelected: false, credit: 20 },
        { id: 3, name: "React", isSelected: false, credit: 40 },
      ]
    };

    const data = [
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: false, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 },
    ];

    expect(fetchCourseSuccess(data)).toEqual(expectedResult);
  });
});
