import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import './CourseList.css';


const CourseList = ({listCourses = []}) => {
  return (
    <table id="CourseList" data-testid="CourseList">
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true}/>
      </thead>

      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow textFirstCell="No course available yet" />
        ):(
          listCourses.map((listCourses) =>
            <CourseListRow key={listCourses.id} textFirstCell={listCourses.name} textSecondCell={String(listCourses.credit)} isHeader={false}/>)
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

export default CourseList;
