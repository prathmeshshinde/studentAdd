import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";
import moment from "moment";

const Student = ({ studentCollectionRef }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getStudents = async () => {
      const data = await getDocs(studentCollectionRef);
      setStudents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getStudents();
  }, []);

  const viewStudent = async (id) => {
    const viewInfo = students.find((items) => items.id === id);
  };

  const deleteStudent = async (id) => {
    await deleteDoc(doc(db, "students", id));

    const updatedStudents = students.filter((student) => student.id !== id);

    setStudents(updatedStudents);
  };

  return (
    <div className="section-student-list">
      <div>
        <div className="section-form-title">
          <p className="add-student-text"> Manage Student</p>
          <p className="add-student-text">
            {moment().format(" Do MMM YYYY  h:mm")}
          </p>
        </div>
        <div>
          <table>
            <tr>
              <th>Name</th>
              <th>Class</th>
              <th>Roll No.</th>
              <th>View/Edit/Delete</th>
            </tr>
            {students.map((student) => (
              <tr>
                <td>
                  {student.firstname} {student.lastname}
                </td>
                <td>
                  {student.class}
                  {student.div}
                </td>
                <td>{student.rollNo}</td>
                <td>
                  <NavLink to={`/view/${student.id}`} state={{ student }}>
                    <img src="view.png" alt="view" className="section-icon" />
                  </NavLink>

                  <NavLink to={`/edit/${student.id}`} state={{ student }}>
                    <img src="edit.png" alt="edit" className="section-icon" />
                  </NavLink>

                  <img
                    src="delete.png"
                    alt="delete"
                    className="section-icon"
                    onClick={() => deleteStudent(student.id)}
                  />
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Student;
