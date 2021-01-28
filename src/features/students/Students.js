import React, { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { addStudentThunk } from "./studentsSlice";
import { addtutorThunk } from "./tutorsSlice";

// STUDENT

export const Students = () => {
  // export const Students = React.memo(({ studentList }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("tutor name");
  // 1. 객체로 한번에 가져올 경우 (객체vs객체로 비교되기 때문에 매번 리렌더링됨.
  // ->shallowEqual을 사용해서 객체 바로 안쪽의 값들을 비교해주면 tutor에서 독립적)

  // const { id, text } = useSelector(
  //   (state) => ({
  //     id: state.students.studentList[0].id,
  //     text: state.students.studentList[0].text,
  //   })

  //2. 각각 값으로 가져올 경우(객체가 아닌 값으로 비교되기때문에 tutor에서 독립적)
  // const id = useSelector((state) => state.students.studentList[0].id);
  // const text = useSelector((state) => state.students.studentList[0].text);

  //3. equality function
  //3-1. shallowEquality 1 depth
  // const { id, text } = useSelector(
  //   (state) => ({
  //     id: state.students.studentList[0].id,
  //     text: state.students.studentList[0].text,
  //   }),
  //   (prev, next) => {
  //     return prev.id === next.id && prev.text === next.text;
  //   }
  // );
  //3-2. shallowEquality 2 depth
  const { studentList } = useSelector(
    (state) => ({
      studentList: state.students.studentList,
    }),
    (prev, next) => {
      let same = false;
      for (let i = 0; i < Math.max(next.length, prev.length); i++) {
        let same = false;
        for (let i = 0; i < Math.max(next.length, prev.length); i++) {
          if (prev[i].id === next[i].id && prev[i].text === next[i].text) {
            console.log(prev[i].id, next[i].id, prev[i].text, next[i].text);
            same = true;
            continue;
          } else {
            same = false;
            break;
          }
        }
        return same;
      }
      return same;
      // return prev.id === next.id && prev.text === next.text;
    }
  );
  const state1 = {
    store: {
      students: {
        studentList: [
          { id: 1, text: "Jean" },
          { id: 2, text: "John" },
          { id: 3, text: "Britney" },
        ],
      },
    },
  };
  const state2 = {
    store: {
      students: {
        studentList: [
          { id: 1, text: "Jean" },
          { id: 2, text: "John" },
          { id: 3, text: "Britney" },
        ],
      },
    },
  };

  const equalityCheck = (prev, next) => {
    let same = false;
    for (let i = 0; i < Math.max(next.length, prev.length); i++) {
      if (prev[i].id === next[i].id && prev[i].text === next[i].text) {
        console.log(prev[i].id, next[i].id, prev[i].text, next[i].text);
        same = true;
        continue;
      } else {
        same = false;
        break;
      }
    }
    return same;
  };

  console.log(
    equalityCheck(
      state1.store.students.studentList,
      state2.store.students.studentList
    )
  );

  // console.log(studentList, "studentList");
  return (
    <section>
      <div>
        <h3>Students List</h3>
        <input
          type="text"
          aria-label="Set increment amount"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => dispatch(addStudentThunk(name))}>
          Add Student (thunk)
        </button>
      </div>
      <ul>
        {studentList.map((v) => (
          <li>
            {v.id} / {v.text}
          </li>
        ))}
        {/* <p>id: {id}</p>
        <p>text:{text}</p> */}
      </ul>
    </section>
  );
};

// TUTOR
export const Tutors = () => {
  // export const Tutors = React.memo(({ tutorList }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  // const { tutorList } = useSelector((state) => ({
  //   tutorList: state.tutors.tutorList,
  // }));
  const { id, text } = useSelector((state) => ({
    id: state.students.studentList[0].id,
    text: state.students.studentList[0].text,
  }));

  return (
    <section>
      <div>
        <h3>tutors List</h3>
        <input
          type="text"
          aria-label="Set increment amount"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => dispatch(addtutorThunk(name))}>
          Add tutor (thunk)
        </button>
      </div>
      <ul>
        {/* {tutorList.map((v) => (
          <li>
            {v.id} / {v.text}
          </li>
        ))} */}
        <p>id: {id}</p>
        <p>text:{text}</p>
      </ul>
    </section>
  );
};

// EVERYONE = STUDENT + TUTOR
// export const Everyone = React.memo(() => {
// A. students/tutors 따로 store에서 가져오기
// const { studentList, tutorList } = useSelector(
//   (state) => ({
//     studentList: state.students.studentList,
//     tutorList: state.tutors.tutorList,
//   }),
//   shallowEqual
// );

//   return (
//     <>
//       <Students />
//       <hr />
//       <Tutors />
//     </>
//   );
// });
