import axios from 'axios';
import * as myConstant from '../constant/constant';

const api_end_point = process.env.REACT_APP_API_END_POINT;

const getAllEmployee = async () => {
    debugger;
    const result = await axios.get(api_end_point + myConstant.GET_ALL_EMPLOYEE);
    return result.data
}


const getEMployeById = async (id) => {
    debugger;
    const result = await axios.get(api_end_point + myConstant.GET_EMPLOYEE_BY_ID + id);
    return result.data
}

const createEmp = async (obj) => {
    debugger;
    const result = await axios.post(api_end_point + myConstant.CREATE_NEW_EMPLOYEE,obj);
    return result.data
}

export {getAllEmployee,createEmp, getEMployeById}

