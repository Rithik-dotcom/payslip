import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/iec_logo2.jpeg'
import './Header.css';


const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div>
                    <img className='iec-logo'  src={logo} alt="iec_logo" />
                </div>
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className='nav-link text-white'>Employee</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to="/Attendance" className='nav-link'>Attendance</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Salary-Advance" className='nav-link'>Advance</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Leaves" className='nav-link'>Leaves</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Salary-Voucher" className='nav-link'>Voucher</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Enquiry" className='nav-link'>Enquiry</Link>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;