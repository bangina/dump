import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Students, Tutors } from "./features/students/Students";

function App() {
  // const { studentList, tutorList } = useSelector(
  //   (state) => ({
  //     studentList: state.students.studentList,
  //     tutorList: state.tutors.tutorList,
  //   }),
  //   shallowEqual
  // );

  return (
    <div className="App">
      <header className="App-header">
        <Students />
        <br />
        <Tutors />
      </header>
    </div>
  );
}

export default App;
