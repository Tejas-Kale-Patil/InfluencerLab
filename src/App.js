/** @format */

import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Student from "./components/Student/Student";
import Teacher from "./components/Teacher/Teacher";
import Marks from "./components/Marks/Marks";

function App() {
    return (
        <>
            <Router>
                <Header />
                <div className="d-lg-flex d-block d-md-flex">
                <Sidebar/>
                <Routes>
                    <Route path="/" element={<Student />}></Route>
                    <Route path="/add" element={<Teacher />}></Route>
                    <Route path="/marks" element={<Marks />}></Route>
                </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
