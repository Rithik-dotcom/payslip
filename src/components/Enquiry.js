import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Enquiry = () => {

    let [enquiryList, setEnquiryList] = useState([]);
    let [filterObj, setFilterObj] = useState({
        "Name": "",
        "UserId": null,
        "ContactNo": "",
        "StatusId": null,
        "MasterId": null,
        "ReferenceId": null,
        "FrDate": null,
        "ToDate": null,
        "PageNumber": 2,
        "PageSize": 20
    })

    const changeFilterObj =(event,key) => {
        setFilterObj(prevObj => ({...prevObj,[key]:event.target.value}))
    }
    useEffect(() => {
        getEnquiry();
    }, [])

    const getEnquiry = async () => { 
        const result = await axios.post("https://freeapi.miniprojectideas.com/api/Resort/GetAllEnquiry", filterObj);
        setEnquiryList(result.data)
    }

    return (
        <div>
            <div className='row pt-2'>
                <div className='col-2'>
                    <input type='text' onChange={(event)=>{changeFilterObj(event,'Name')}} placeholder='Serach Name'/>
                </div>
                <div className='col-2'>
                    <input type='text' onChange={(event)=>{changeFilterObj(event,'ContactNo')}} placeholder='Serach Contact'/>
                </div>
                <div className='col-2'>
                    <input type='date' onChange={(event)=>{changeFilterObj(event,'FrDate')}} placeholder='Serach Name'/>
                </div>
                <div className='col-2'>
                    <input type='date' onChange={(event)=>{changeFilterObj(event,'ToDate')}} placeholder='Serach Contact'/>
                </div>
                <div className='col-2'>
                    <button className='btn btn-success' onClick={getEnquiry}>Search</button>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Sr</th>
                                <th>Name</th>
                                <th>Contact</th>
                                <th>Subject</th>
                                <th>Enquiry Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                enquiryList.map((item, index) => {
                                    return (<tr>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.contactNo}</td>
                                        <td>{item.subject}</td>
                                        <td>{item.enquiryDate}</td>
                                    </tr>)
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Enquiry;