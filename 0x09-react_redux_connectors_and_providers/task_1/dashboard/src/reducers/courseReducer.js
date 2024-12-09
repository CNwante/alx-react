import { fromJS } from "immutable";
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from "../actions/courseActionTypes";
import { coursesNormalizer } from "../schema/courses";

export const defaultState = fromJS({
  entities: {
    courses: {},
  },
  result: [],
});

export const courseReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS: {
      const normalizedData = coursesNormalizer(action.data);
      const newState = state.merge(fromJS(normalizedData));
      return newState.updateIn(["entities", "courses"], (courses) =>
        courses.map((course) => course.set("isSelected", false))
      );
    }

    case SELECT_COURSE: {
      return state.setIn(
        ["entities", "courses", action.index.toString(), "isSelected"],
        true
      );
    }

    case UNSELECT_COURSE: {
      return state.setIn(
        ["entities", "courses", action.index.toString(), "isSelected"],
        false
      );
    }

    default:
      return state;
  }
};
