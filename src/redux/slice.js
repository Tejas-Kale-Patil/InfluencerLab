import { createSlice } from "@reduxjs/toolkit";

let initialState={
    
    studentsData:[{ id: 1, name: 'John Doe', class: '10th', subject: 'English', marks: 78 },
    { id: 2, name: 'Jane Smith', class: '11th', subject: 'English', marks: 85 },
    { id: 3, name: 'Bob Johnson', class: '9th', subject: 'Science', marks: 92 },
    { id: 4, name: 'Alice Williams', class: '12th', subject: 'History', marks: 75 },
    { id: 5, name: 'Charlie Brown', class: '10th', subject: 'Physics', marks: 88 },
    { id: 6, name: 'Eva Davis', class: '11th', subject: 'Chemistry', marks: 95 },
    { id: 7, name: 'Frank Martin', class: '9th', subject: 'History', marks: 81 },
    { id: 8, name: 'Grace Turner', class: '12th', subject: 'English', marks: 89 },
    { id: 9, name: 'David Lee', class: '10th', subject: 'Science', marks: 96 },
    { id: 10, name: 'Helen Garcia', class: '11th', subject: 'Physics', marks: 87 }
  ],

}

export const tableSlice = createSlice({
    name:'table',
    initialState,
    reducers:{
        addStudents:(state,action)=>{ 
            return {studentsData:[...action.payload]}
        },

    }
})

export const {addStudents} = tableSlice.actions
export default tableSlice.reducer