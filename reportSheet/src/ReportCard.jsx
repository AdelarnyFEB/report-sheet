import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./ReportCard.css"
const ReportCard = () => {
  const studentInfo = {
    name: " ",
    age: " ",
    termEnd: " ",
    numberOfTimesSchoolOpened: " ",
    timePresent: " ",
    timeAbsent: " ",
    nextTermBegins: " ",
    class: " ",
    percentage: " %",
    grade: "A+",
    ratings: {
      behaviours: "",
      honesty: " ",
      senseResponse: " ",
      punctuality: " ",
      relationshipWithTeacher: " ",
      attentiveness: " ",
      reliability: " ",
      relationshipWithPupils: " ",
      initiative: " ",
      neatness: " ",
      selfControl: " ",
      spiritOfCooperation: " ",
      politeness: " ",
    },
    subjects: [
      {
        name: "English Language",
        test1: "",
        test2: "",
        exam: "",
        total: "",
        classAvg: "",
        grade: "",
        remark: "",
      },
      {
        name: "Mathematics",
        test1: "",
        test2: "",
        exam: "",
        total: "",
        classAvg: "",
        grade: "",
        remark: "",
      },
      {
        name: "Basic Science",
        test1: "",
        test2: "",
        exam: "",
        total: "",
        classAvg: "",
        grade: "",
        remark: "",
      },
      {
        name: "Social Studies",
        test1: "",
        test2: "",
        exam: "",
        total: "",
        classAvg: "",
        grade: "",
        remark: "",
      },
      {
        name: "French",
        test1: "",
        test2: "",
        exam: "",
        total: "",
        classAvg: "",
        grade: "",
        remark: "",
      },
      {
        name: "Yoruba",
        test1: "",
        test2: "",
        exam: "",
        total: "",
        classAvg: "",
        grade: "",
        remark: "",
      },
    ],
  };

  return (
    <div className="container report-card mt-5 ">
      <div className=" head row mb-2">
        <div className="col text-center">
          <h2>ELIM SPRINGS ACADEMY</h2>
          <h4>Year Class Assessment Report</h4>
        </div>
      </div>
      <div className="details row">
        <div className="col-md-8">
          <p>
            <strong>Name:</strong> {studentInfo.name}
          </p>
          <p>
            <strong>Term Ending:</strong> {studentInfo.termEnd}
          </p>
          <p>
            <strong>Number of Time School Opened:</strong>{" "}
            {studentInfo.numberOfTimesSchoolOpened}
          </p>
          <p>
            <strong>Time Present:</strong> {studentInfo.timePresent}
          </p>
          <p>
            <strong>Time Absent:</strong> {studentInfo.timeAbsent}
          </p>
          <p>
            <strong>Next Term Begins:</strong> {studentInfo.nextTermBegins}
          </p>
          <p>
            <strong>Class:</strong> {studentInfo.class}
          </p>
          <p>
            <strong>Age:</strong> {studentInfo.age}
          </p>
        </div>
        <div className="passport col-md-3 text-center border">
          <img
            src="student-photo.jpg"
            alt="Student"
            className="img-thumbnail"
          />
        </div>
      </div>
      <table className="table table-bordered mt-3 table-hover table-responsive-sm">
        <thead className="table-primary text-light">
          <tr>
            <th>Subjects</th>
            <th>Test 10%</th>
            <th>Test 20%</th>
            <th>Exam 60%</th>
            <th>Total Marks</th>
            <th>Class Average</th>
            <th>Grade</th>
            <th>Teacher's Remark</th>
          </tr>
        </thead>
        <tbody>
          {studentInfo.subjects.map((subject, index) => (
            <tr key={index}>
              <td>{subject.name}</td>
              <td>{subject.test1}</td>
              <td>{subject.test2}</td>
              <td>{subject.exam}</td>
              <td>{subject.total}</td>
              <td>{subject.classAvg}</td>
              <td>{subject.grade}</td>
              <td>{subject.remark}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="ratings mt-5">
        <h5 className="ratings-head">Ratings</h5>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <th>Behaviours</th>
              <td>{studentInfo.ratings.behaviours}</td>
              <th>Honesty</th>
              <td>{studentInfo.ratings.honesty}</td>
            </tr>
            <tr>
              <th>Punctuality</th>
              <td>{studentInfo.ratings.punctuality}</td>
              <th>Sense Response</th>
              <td>{studentInfo.ratings.senseResponse}</td>
            </tr>
            <tr>
              <th>Reliability</th>
              <td>{studentInfo.ratings.reliability}</td>
              <th>Relationship with Teacher</th>
              <td>{studentInfo.ratings.relationshipWithTeacher}</td>
            </tr>
            <tr>
              <th>Neatness</th>
              <td>{studentInfo.ratings.neatness}</td>
              <th>Relationship with Pupils</th>
              <td>{studentInfo.ratings.relationshipWithPupils}</td>
            </tr>
            <tr>
              <th>Politeness</th>
              <td>{studentInfo.ratings.politeness}</td>
              <th>Self Control</th>
              <td>{studentInfo.ratings.selfControl}</td>
            </tr>
            <tr>
              <th>Attentiveness</th>
              <td>{studentInfo.ratings.attentiveness}</td>
              <th>Initiative</th>
              <td>{studentInfo.ratings.initiative}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="comments mt-3">
        <p>
          <strong>GRADING SCALE</strong> : A = 90%-100% B= 80%-89% C=60%-79%
          D=50%-59% E=49%-40% F=39%-Below
        </p>
        <p className="comment">
          <strong>Class Teacher's Comment:</strong>
        </p>
        <p className="comment">
          <strong>Head Teacher's Comment:</strong>
        </p>
      </div>
    </div>
  );
};

export default ReportCard;
