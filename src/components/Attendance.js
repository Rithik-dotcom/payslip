import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {getAllEmployee} from '../service/employeeService';

const Attendance = () => {
    const apiEndPoint = "https://onlinetestapi.gerasim.in/api/TeamSync/";
    let [attendanceList,setAttendanceList] = useState([])
    let [attendanceObj,setattendanceObj] = useState({
        "AttendanceId": 0,
        "EmployeeId": 0,
        "AttendanceDate": "",
        "InTime": "",
        "OutTime": "",
        "IsFullDay": true
    })
    let [employeeList,setemployeeList] = useState([])

    const changeFormValue = (event, key) => {
        setattendanceObj(prevObj => ({ ...prevObj, [key]: event.target.value }))
    }
    const changeCheckBoxValue = (event) => {
        setattendanceObj(prevObj => ({ ...prevObj, IsFullDay: event.target.checked }))
    }
    useEffect(()=>{
        getEmployeeList();
        getAllAttendance();
    },[])
    const getEmployeeList = async () => { 
        
        getAllEmployee().then((res)=>{
            setemployeeList(res.data)
        })
       
    }

    const getAllAttendance = async () => {  
        const result = await axios.get(apiEndPoint + 'GetAllAttendance'); 
        setAttendanceList(result.data.data)
    }
    const saveAttendance = async () => { 
        try {
            debugger;
            const result = await axios.post(apiEndPoint + 'AddAttendance', attendanceObj);  
            if (result.data.result) {
                alert('attendance Created');
                getAllAttendance();
            } else {
                alert(result.data.message)
            }
        } catch (error) { 
            debugger;
            alert(error.code)
        }
        
    }

    return (
        <div>
            <div className='row'>
                <div className='col-8'>
                    <div className='card'>
                        <div className='card-header bg-success'>
                            Attendance List
                        </div>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Sr No</th>
                                        <th>Name</th>
                                        <th>Contact No</th>
                                        <th>attendance Date</th>
                                        <th>In-time</th>
                                        <th>Out-time</th>
                                        <th>Is Full Day</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {
                                            attendanceList.map((item, index) => {
                                                return (<tr>
                                                    <td>{index + 1} </td>
                                                    <td> {item.empName} </td>
                                                    <td> {item.empContactNo}</td>
                                                    <td>{item.attendanceDate} </td>
                                                    <td>{item.inTime} </td>
                                                    <td>{item.outTime} </td>
                                                    <td>{item.isFullDay ? 'Full Day':'Half Day'} </td>
                                                    <td>
                                                        <button className='btn btn-sm btn-primary' > Edit</button>
                                                        <button className='btn btn-sm btn-danger' > Delete</button>
                                                    </td>
                                                </tr>)
                                            })
                                        }

                                    </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='card'>
                        <div className='card-header bg-success'>
                            New Attendance
                        </div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-6'>
                                    <label>Employee</label>
                                    <select className='form-select' value={attendanceObj.EmployeeId} onChange={(event) => { changeFormValue(event, 'EmployeeId') }} >
                                        <option>Select Employee</option>
                                        {
                                            employeeList.map((item)=>{
                                              return(<option value={item.empId}>{item.empName}</option> )  
                                            })
                                        }
                                    </select>
                                </div>
                                <div className='col-6'>
                                    <label>Date</label>
                                    <input type='date'  value={attendanceObj.AttendanceDate} onChange={(event) => { changeFormValue(event, 'AttendanceDate') }} className='form-control'  ></input>
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-6'>
                                    <label>In Time</label>
                                    <input type='time'  value={attendanceObj.InTime} onChange={(event) => { changeFormValue(event, 'InTime') }} className='form-control'  ></input>
                                </div>
                                <div className='col-6'>
                                    <label>Out Time</label>
                                    <input type='time'  value={attendanceObj.OutTime} onChange={(event) => { changeFormValue(event, 'OutTime') }} className='form-control' ></input>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6 mt-3 text-start'>
                                    <input type='checkbox' checked={attendanceObj.IsFullDay}  onChange={(event)=>{changeCheckBoxValue(event)}}  id='fillId'  ></input>
                                    <label className='ms-2' for='fillId'>Full Day</label>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6 mt-3 text-center'>
                                    <button className='btn btn-secondary btn-sm' >Reset</button>
                                </div>
                                <div className='col-6 mt-3 text-center'>
                                    <button className='btn btn-primary btn-sm' onClick={saveAttendance}  >Save Data</button>
                                    <button className='btn btn-success btn-sm'  >Update Data</button>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Attendance;