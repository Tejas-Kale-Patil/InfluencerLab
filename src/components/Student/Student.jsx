/** @format */

// Student.js
import React, { useState } from "react";
import { Button, Modal} from "react-bootstrap";
import "./Students.scss";
import { v4 as uuidv4, parse as uuidParse } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addStudents } from "../../redux/slice";

function Student() {
    const studentData = useSelector((state) => state.table.studentsData);
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    let [students, setStudents] = useState(studentData);
    const [indexToEdit,setIndexToEdit] = useState()
  const [isEdit,setIsEdit] = useState(false)

    let [studentinfo, setStudentInfo] = useState({
        name: "",
        subject: "English",
        class:'',
        marks: "",
        id:''
    });

    function handleSubmit() {
      let newArr = [...students, {...studentinfo, 'id':uuidParse(uuidv4())}]
        dispatch(addStudents(newArr));
        console.log(studentinfo);
        setStudents(newArr);
        setStudentInfo({
          name: "",
          subject: "",
          class:'',
          marks: "",
          id:''
        });
      setShow(false)

    }
    function handleDelete(item){
      let updatedItem = students.filter((ele,i)=> ele !== item)
      console.log(updatedItem);
      dispatch(addStudents([...updatedItem]))
      setStudents(updatedItem)
    }

    function handleEdit(item,i){
      setShow(true)
      setIsEdit(true)
      setIndexToEdit(i)
      setStudentInfo({
        name:item.name,
          subject: item.subject,
          class:item.class,
          marks: item.marks,
          id:item.id
      })

    }

    function submitEdited(){
      let item = studentinfo;
      let updatedArr = students.map((ele,i)=>{
        if(i===indexToEdit){
          return item
        }
        else{
          return ele
        }
      })
      setStudents(updatedArr)
      
      setStudentInfo({
        name: "",
        subject: "",
        class:'',
        marks: "",
        id:''
      });
      setShow(false)
    }

    return (
        <div className="studentSection p-2">
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group">
                        <label htmlFor="studentName">Student Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="studentName"
                            placeholder="Enter student's name"
                            value={studentinfo.name}
                            required
                            onChange={(e) =>
                                setStudentInfo((prev) => ({
                                    ...prev,
                                    name: e.target.value,
                                }))
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="class">Class:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="class"
                            placeholder="Enter class"
                            value={studentinfo.class}
                            required
                            onChange={(e) =>
                                setStudentInfo((prev) => ({
                                    ...prev,
                                    class: e.target.value,
                                }))
                            }
                        />
                    </div>
                    <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <select
                className="form-control"
                id="subject"
                value={studentinfo.subject}
                onChange={(e) =>
                    setStudentInfo((prev) => ({
                        ...prev,
                        subject: e.target.value,
                    }))
                }
                required
            >
                <option value="English">English</option>
                <option value="Science">Science</option>
                <option value="History">History</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
            </select>
        </div>
                    <div className="form-group">
                        <label htmlFor="subjectMarks"> Marks:</label>
                        <input
                            type="number"
                            className="form-control"
                            id="subjectMarks"
                            value={studentinfo.marks}
                            placeholder="Enter subject marks"
                            required
                            onChange={(e) =>
                                setStudentInfo((prev) => ({
                                    ...prev,
                                    marks: e.target.value,
                                }))
                            }
                        />
                    </div>
                    {isEdit ? <button
                        type="submit"
                        onClick={submitEdited}
                        className="btn btn-primary mt-2"
                    >
                        Edit
                    </button> :<button
                        type="submit"
                        onClick={handleSubmit}
                        className="btn btn-primary mt-2"
                    >
                        Submit
                    </button> }
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <button className="btn btn-primary" onClick={() => setShow(true)}>
                Add Student
            </button>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Class</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Marks</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students &&
                        students.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.class}</td>
                                    <td>{item.subject}</td>
                                    <td>{item.marks}</td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-info m-1"
                                            onClick={()=>handleEdit(item,i)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-danger m-1"
                                            onClick={()=>handleDelete(item)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
}

export default Student;
