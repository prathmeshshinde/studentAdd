import { addDoc } from "firebase/firestore";
import React, { useState } from "react";
import moment from "moment";

const Form = ({ studentCollectionRef }) => {
  const [first, setFirst] = useState();
  const [middle, setMiddle] = useState();
  const [last, setLast] = useState();
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedDiv, setSelectedDiv] = useState("");
  const [roll, setRoll] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");

  const addStudent = async (e) => {
    e.preventDefault();
    await addDoc(studentCollectionRef, {
      firstname: first,
      middlename: middle,
      lastname: last,
      class: selectedClass,
      div: selectedDiv,
      rollNo: roll,
      addressline1: addressLine1,
      addressline2: addressLine2,
      landmark: landmark,
      city: city,
      pincode: pin,
    });

    setFirst("");
    setMiddle("");
    setLast("");
    setSelectedClass("");
    setSelectedDiv("");
    setRoll("");
    setAddressLine1("");
    setAddressLine2("");
    setLandmark("");
    setCity("");
    setPin("");
  };

  return (
    <div className="section-form">
      <div>
        <div className="section-form-title">
          <p className="add-student-text">Add Student</p>
          <p className="add-student-text">
            {moment().format(" Do MMM YYYY  h:mm")}
          </p>
        </div>
        <div>
          <form onSubmit={addStudent}>
            <div className="section-student">
              <input
                type="text"
                className="section-student-first"
                value={first}
                placeholder="First Name"
                onChange={(e) => {
                  setFirst(e.target.value);
                }}
                required
              />
              <input
                type="text"
                className="section-student-first"
                value={middle}
                placeholder="Middle Name"
                onChange={(e) => {
                  setMiddle(e.target.value);
                }}
                required
              />
              <input
                type="text"
                className="section-student-first"
                value={last}
                placeholder="Last Name"
                onChange={(e) => {
                  setLast(e.target.value);
                }}
                required
              />
            </div>
            <div>
              <select
                id="class"
                name="class"
                className="section-student-select"
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                required
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
                value={selectedDiv}
                onChange={(e) => setSelectedDiv(e.target.value)}
                required
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
                value={roll}
                placeholder="Enter Roll No in Digits"
                onChange={(e) => {
                  setRoll(e.target.value);
                }}
                required
              />
            </div>
            <div>
              <input
                type="text"
                value={addressLine1}
                className="section-student-add"
                placeholder="Address Line 1"
                onChange={(e) => {
                  setAddressLine1(e.target.value);
                }}
                required
              />
              <input
                type="text"
                value={addressLine2}
                placeholder="Address Line 2"
                className="section-student-add"
                onChange={(e) => {
                  setAddressLine2(e.target.value);
                }}
                required
              />
            </div>
            <div>
              <input
                type="text"
                value={landmark}
                placeholder="Landmark"
                className="section-student-first"
                onChange={(e) => {
                  setLandmark(e.target.value);
                }}
                required
              />
              <input
                type="text"
                value={city}
                placeholder="City"
                className="section-student-first"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                required
              />
              <input
                type="text"
                maxLength="6"
                pattern="\d{6}"
                placeholder="Pincode"
                className="section-student-first"
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value);
                }}
                required
              />
            </div>
            <input
              className="section-add-student"
              type="submit"
              value="Add Student"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
