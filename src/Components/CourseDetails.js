import React from "react";
import "./CourseDetails.css";

function CourseDetails({ course }) {
  return (
    <div className="course-details-container">
      <h1 className="course-details-heading">Course Details</h1>
      <h2 className="course-name">{course.name}</h2>
      <p className="course-info">Instructor: {course.instructor}</p>
      <p className="course-info">Description: {course.description}</p>
      <p className="course-info">
        Enrollment Status: {course.enrollmentStatus}
      </p>
      <p className="course-info">Duration: {course.duration}</p>
      <p className="course-info">Schedule: {course.schedule}</p>
      <p className="course-info">Location: {course.location}</p>
      <p className="course-info">
        Pre-requisites: {course.prerequisites.join(", ")}
      </p>

      <div className="syllabus-container">
        <h3 className="syllabus-heading">Syllabus</h3>
        <ul className="syllabus-list">
          {course.syllabus.map((item) => (
            <li key={item.week} className="syllabus-item">
              <strong>Week {item.week}:</strong> {item.topic}
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CourseDetails;
