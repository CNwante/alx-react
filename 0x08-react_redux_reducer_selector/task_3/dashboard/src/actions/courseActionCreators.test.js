import { fetchCourseSuccess, selectCourse, unSelectCourse } from "./courseActionCreators";
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe("Test for action creators", () => {
  test("selectCourse should return type: SELECT_COURSE, index: 1", () => {
    expect(selectCourse(1)).toEqual({ type: SELECT_COURSE, index: 1 });
  });

  test("unSelectCourse should return type: UNSELECT_COURSE, index: 1", () => {
    expect(unSelectCourse(1)).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });

  test("fetchCourseSuccess returns the correct course data with isSelected: false", () => {
    const courses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];

    const expectedResult = {
      type: "FETCH_COURSE_SUCCESS",
      data: [
        { id: 1, name: "ES6", credit: 60, isSelected: false },
        { id: 2, name: "Webpack", credit: 20, isSelected: false },
        { id: 3, name: "React", credit: 40, isSelected: false },
      ],
    };

    expect(fetchCourseSuccess(courses)).toEqual(expectedResult);
  });
});
