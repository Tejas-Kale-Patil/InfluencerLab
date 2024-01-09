// Teacher.js
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './Teacher.scss';
import { v4 as uuidv4, parse as uuidParse } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addTeachers } from '../../redux/teacherSlice';



function Teacher() {
  const initialTeacher = {
    id: null,
    name: '',
    subject: '',
    // Add other teacher details as needed
  };
  const teacher = useSelector(state=>state.teacherSlice.teachersData)
  const dispatch = useDispatch()
  const [teachers, setTeachers] = useState(teacher);
  const [show, setShow] = useState(false);
  const [currentTeacher, setCurrentTeacher] = useState(initialTeacher);
  const[indexToEdit,setIndexToEdit] = useState()
  const [isEdit,setIsEdit] = useState(false)
  
  function handleSubmit(){
    let newArr = [...teachers,{...currentTeacher, id:uuidParse(uuidv4())}]
    dispatch(addTeachers(newArr))
    setTeachers(newArr)
    setCurrentTeacher(initialTeacher)
  }
  function handleDelete(item){
    let updatedArr = teachers.filter((ele,i)=>item!==ele)
    dispatch(addTeachers(updatedArr))
    setTeachers(updatedArr)
  }

  function handleEdit(item,i){
    setShow(true)
    setIsEdit(true)
    setIndexToEdit(i)
    setCurrentTeacher({
        name:item.name,
        subject: item.subject,
        class:item.class,
        marks: item.marks,
        id:item.id
    })
  }

  function submitEdited(){
    let item = currentTeacher;
      let updatedArr = teachers.map((ele,i)=>{
        if(i===indexToEdit){
          return item
        }
        else{
          return ele
        }
      })
      dispatch(addTeachers(updatedArr))
      setTeachers(updatedArr)
      setIsEdit(false)
      setShow(false)
  }

  return (
    <div className="teachersection p-2">
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group">
                        <label htmlFor="teacherName">Teacher Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="studentName"
                            placeholder="Enter student's name"
                            value={currentTeacher.name}
                            required
                            onChange={(e) =>
                                setCurrentTeacher((prev) => ({
                                    ...prev,
                                    name: e.target.value,
                                }))
                            }
                        />
                    </div>
                    
                    <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
                className="form-control"
                id="subject"
                name='subject'
                placeholder='Enter Your Subject'
                value={currentTeacher.subject}
                onChange={(e) =>
                    setCurrentTeacher((prev) => ({
                        ...prev,
                        subject: e.target.value,
                    }))
                }
                required
           / >
                
        </div>
                    {isEdit?<button
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
                    </button>}
                    
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <button className="btn btn-primary" onClick={() => setShow(true)}>
                Add Teacher
            </button>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        
                        <th scope="col">Subject</th>
                      
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {teachers &&
                        teachers.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    
                                    <td>{item.subject}</td>
                                    
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

export default Teacher;
