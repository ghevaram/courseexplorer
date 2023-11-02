import React, { useState, useRef } from "react";
import dummyCourseData from "../DummyCourseData";
import "./CourseList.css";
import CourseDetails from "./CourseDetails";

function CourseList() {
  const [courses, setCourses] = useState(dummyCourseData);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const detailsRef = useRef(null);

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const viewCourseDetails = (course) => {
    setSelectedCourse(course);
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container">
      <h1 className="text-center">Course List</h1>
      <div className="course-list">
        <div className="search-div">
          <input
            type="text"
            className="search-input"
            placeholder="Search by course name or instructor"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <ul>
          {filteredCourses.map((course) => (
            <li key={course.id} className="course-item">
              <h3>{course.name}</h3>
              <p>Instructor: {course.instructor}</p>

              <div className="view-btn-div">
                <button
                  className="btn btn-primary"
                  onClick={() => viewCourseDetails(course)}
                >
                  View Details
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {selectedCourse && (
        <div ref={detailsRef}>
          <CourseDetails course={selectedCourse} />
        </div>
      )}
    </div>
  );
}

export default CourseList;
