import { updateDoc, doc } from "firebase/firestore";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { db } from "./firebase-config";

const Edit = () => {
  const [updateFirst, setUpdateFirst] = useState("");
  const [updateMiddle, setUpdateMiddle] = useState("");
  const [updateLast, setUpdateLast] = useState("");
  const [updateClass, setUpdateClass] = useState("");
  const [updateDiv, setUpdateDiv] = useState("");
  const [updateAddressLine1, setUpdateAddressLine1] = useState("");
  const [updateRollNo, setUpdateRollNo] = useState("");
  const [updateAddressLine2, setUpdateAddressLine2] = useState("");
  const [updateLandmark, setUpdateLandmark] = useState("");
  const [updateCity, setUpdateCity] = useState("");
  const [updatePincode, setUpdatePincode] = useState("");

  const location = useLocation();
  const editData = location.state.student;
  console.log(editData);

  const updateStudent = async (e) => {
    e.preventDefault();

    const washington = doc(db, "students", editData.id);
    await updateDoc(washington, {
      firstname: updateFirst,
      middlename: updateMiddle,
      lastname: updateLast,
      class: updateClass,
      div: updateDiv,
      rollNo: updateRollNo,
      addressline1: updateAddressLine1,
      addressline2: updateAddressLine2,
      landmark: updateLandmark,
      city: updateCity,
      pincode: updatePincode,
    });
    setUpdateFirst("");
    setUpdateMiddle("");
    setUpdateLast("");
    setUpdateClass("");
    setUpdateDiv("");
    setUpdateRollNo("");
    setUpdateAddressLine1("");
    setUpdateAddressLine2("");
    setUpdateLandmark("");
    setUpdateCity("");
    setUpdatePincode("");
  };
  return (
    <div className="section-edit">
      <form onSubmit={updateStudent}>
        <div className="section-student">
          <input
            type="text"
            className="section-student-first"
            value={updateFirst}
            onChange={(e) => setUpdateFirst(e.target.value)}
          />
          <input
            type="text"
            className="section-student-first"
            value={updateMiddle}
            onChange={(e) => {
              setUpdateMiddle(e.target.value);
            }}
          />
          <input
            type="text"
            className="section-student-first"
            value={updateLast}
            onChange={(e) => {
              setUpdateLast(e.target.value);
            }}
          />
        </div>
        <div>
          <select
            id="class"
            name="class"
            className="section-student-select"
            value={updateClass}
            onChange={(e) => setUpdateClass(e.target.value)}
          >
            <option disabled={true} value="">
              Select Class
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          <select
            id="class"
            name="class"
            className="section-student-select"
            value={updateDiv}
            onChange={(e) => setUpdateDiv(e.target.value)}
          >
            <option disabled={true} value="">
              Select Division
            </option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
          </select>
          <input
            type="text"
            maxLength="2"
            pattern="\d{2}"
            className="section-student-first"
            value={updateRollNo}
            onChange={(e) => {
              setUpdateRollNo(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="text"
            className="section-student-add"
            placeholder="Address Line 1"
            value={updateAddressLine1}
            onChange={(e) => {
              setUpdateAddressLine1(e.target.value);
            }}
          />
          <input
            type="text"
            className="section-student-add"
            placeholder="Address Line 2"
            value={updateAddressLine2}
            onChange={(e) => {
              setUpdateAddressLine2(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="text"
            value={updateLandmark}
            className="section-student-first"
            placeholder="Landmark"
            onChange={(e) => {
              setUpdateLandmark(e.target.value);
            }}
          />
          <input
            type="text"
            value={updateCity}
            placeholder="City"
            className="section-student-first"
            onChange={(e) => {
              setUpdateCity(e.target.value);
            }}
          />
          <input
            type="text"
            maxLength="6"
            pattern="\d{6}"
            className="section-student-first"
            placeholder="Pincode"
            value={updatePincode}
            onChange={(e) => {
              setUpdatePincode(e.target.value);
            }}
          />
        </div>
        <input className="section-add-student" type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Edit;
