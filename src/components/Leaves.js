import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Alert from 'react-bootstrap/Alert';
import Toast from 'react-bootstrap/Toast';

const Leaves = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <div className='row'>
                <div className='col-8'>
                    <div className='card'>
                        <div className='card-header bg-success'>
                            Employee List
                        </div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-4'>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            Dropdown Button
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className='col-4'>
                                    <Button variant="primary" disabled={true} >Primary</Button>{' '}
                                    <Button variant="success">Primary</Button>{' '}
                                </div>
                                <div className='col-4'>
                                    <Alert variant="primary">
                                        This is a Primatu alert—check it out!
                                    </Alert>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='card'>
                        <div className='card-header bg-success'>
                            New Employee
                        </div>
                        <div className='card-body'>
                            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                                <Toast.Header closeButton={true}>
                                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                                    <strong className="me-auto">Bootstrap</strong>
                                    <small>11 mins ago</small>
                                </Toast.Header>
                                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                            </Toast>
                            <Button onClick={() => setShow(true)}>Show Toast</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leaves;