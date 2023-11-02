import React, { useState } from "react";
import dummyCourseData from "../DummyCourseData";
import "./Dashboard.css";

const Dashboard = () => {
  const [courses, setCourses] = useState(dummyCourseData);

  const markAsComplete = (courseId) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === courseId ? { ...course, completed: true } : course
      )
    );
  };

  return (
    <div className="student-dashboard">
      <h1>Student Dashboard</h1>
      <div className="ongoing-div">
        <h3>On Going Courses</h3>
      </div>
      <div className="courses-list">
        {courses.map((course) => (
          <div key={course.id} className="course">
            <h4>{course.name}</h4>
            <p>Instructor: {course.instructor}</p>
            <img src={course.thumbnail} alt={course.name} />
            {/* <p>Due Date: {course.dueDate}</p> */}
            <p>Progress:</p>
            <progress value={course.percentageCompleted} max={100} />
            {!course.completed ? (
              <button onClick={() => markAsComplete(course.id)}>
                Mark as Complete
              </button>
            ) : (
              <p>Completed</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
