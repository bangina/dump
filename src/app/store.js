import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from "../features/students/studentsSlice";
import tutorsReducer from "../features/students/tutorsSlice";

export default configureStore({
  reducer: {
    students: studentsReducer,
    tutors: tutorsReducer,
  },
});
