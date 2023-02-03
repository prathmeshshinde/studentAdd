import React from "react";
import { useLocation } from "react-router-dom";

const View = ({ studentCollectionRef }) => {
  // let { id } = useParams();
  const location = useLocation();
  const data = location.state.student;

  return (
    <div className="section-view">
      <div>
        <div className="section-student-view">
          <div className="section-student-first">
            <p className="view-title">First Name</p>
            <p className="section-student-info-view">{data.firstname}</p>
          </div>
          <div className="section-student-first">
            <p className="view-title">Middel Name</p>
            <p className="section-student--view">{data.middlename}</p>
          </div>
          <div className="section-student-first">
            <p className="view-title">Last Name</p>
            <p className="section-student--view">{data.lastname}</p>
          </div>
        </div>
        <div className="section-student-view">
          <div className="section-student-first">
            <p className="view-title">Class</p>
            <p className="section-student--view">{data.class}</p>
          </div>
          <div className="section-student-first">
            <p className="view-title">Division</p>
            <p className="section-student--view">{data.div}</p>
          </div>
          <div className="section-student-first">
            <p className="view-title">Roll No</p>
            <p className="section-student--view">{data.rollNo}</p>
          </div>
        </div>
        <div className="section-student-view">
          <div className="section-student-add">
            <p className="view-title">Address Line 1</p>
            <p className="section-student--view">{data.addressline1}</p>
          </div>
          <div className="section-student-add">
            <p className="view-title">Address Line 2</p>
            <p className="section-student--view">{data.addressline2}</p>
          </div>
        </div>
        <div className="section-student-view">
          <div className="section-student-first">
            <p className="view-title">Landmark</p>
            <p className="section-student--view">{data.addressline1}</p>
          </div>
          <div className="section-student-first">
            <p className="view-title">City</p>{" "}
            <p className="section-student--view">{data.city}</p>
          </div>
          <div className="section-student-first">
            <p className="view-title">Pincode</p>
            <p className="section-student--view">{data.pincode}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
