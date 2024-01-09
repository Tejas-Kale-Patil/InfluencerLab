/** @format */

// Marks.js
import React, { useEffect, useState } from "react";
import { Button, Modal, Table, Form, ModalBody, ModalFooter } from "react-bootstrap";
import "./Marks.scss";
import { useDispatch, useSelector } from "react-redux";
import { addStudents } from "../../redux/slice";
import { addTeachers } from '../../redux/teacherSlice';

function Marks() {
    const initialMarks = {
        studentId: null,
        studentName: "",
        class: "",
        teacher: "",
        subject: "",
        marks: "",
    };
    const dispatch = useDispatch();
    const studentData = useSelector((state) => state.table.studentsData);
    const teacherData = useSelector((state) => state.teacherSlice.teachersData);
    const [teacher, setTeacher] = useState(teacherData);
    const [student, setStudents] = useState(studentData);
    const [allData, setAllData] = useState([]);
    const [selectedData,setSelectedData] = useState([])
    const [show,setShow] = useState(false)

    useEffect(() => {
        let reqData = student.map((item, i) => {
            let teach = teacher.find(sub=>item.subject === sub.subject)
            console.log(teach);
            return {...item,'teacher':teach.name}
        });
        console.log(reqData);
        setAllData(reqData)
    }, []);

    return (
        <div className="marksSection p-2">
          
          <Modal show={show} onHide={()=>setShow(false)}>
              <ModalBody>
              <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Student Name</th>
                        <th scope="col">Class</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Teacher Name</th>
                        <th scope="col">Marks</th>
                      
                    </tr>
                </thead>
                <tbody>
                    {selectedData && selectedData.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.class}</td>
                                    <td>{item.subject}</td>
                                    <td>{item.teacher}</td>
                                    <td>{item.marks}</td>
                                    
                                </tr>
                            );
                        })}
                </tbody>
                </table>
                <ModalFooter>
                  <Button onClick={()=>setShow(false)}>Close</Button>
                </ModalFooter>
              </ModalBody>
            </Modal>
            <h2>Marks Module</h2>
            Search and Select Students Button
            <button className="btn btn-success mx-2" onClick={()=>setShow(true) }>Show Marks</button>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Select</th>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Class</th>
                        {/* <th scope="col">Subject</th>
                        <th scope="col">Teacher</th>
                        <th scope="col">Marks</th> */}
                      
                    </tr>
                </thead>
                <tbody>
                    {allData && allData.map((item, i) => {
                            return (
                                <tr key={i}>
                                  <td> <input type="checkbox" name={item.name} onChange={()=>setSelectedData(prev=>([...prev,item]))} /> </td>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.class}</td>
                                    {/* <td>{item.subject}</td>
                                    <td>{item.teacher}</td>
                                    <td>{item.marks}</td> */}
                                    
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
}

export default Marks;
