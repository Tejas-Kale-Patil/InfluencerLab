import { createSlice } from "@reduxjs/toolkit";

let initialState={
    teachersData:[
        { id: 11, name: 'Alice Johnson', subject: 'English' },
        { id: 12, name: 'Bob Smith', subject: 'Science' },
        { id: 13, name: 'Charlie Williams', subject: 'History' },
        { id: 14, name: 'Eva Brown', subject: 'Physics' },
        { id: 15, name: 'Frank Davis', subject: 'Chemistry' }
    ],
}

export const teacherSlice = createSlice({
    name:'teacherTable',
    initialState,
    reducers:{
        addTeachers:(state,action)=>{ 
            return {teachersData:[...action.payload]}
        }
    }
})

export const {addAll,addStudents,addTeachers} = teacherSlice.actions
export default teacherSlice.reducer