import axios from 'axios' ;

import {ADD_INSCRIPTION, CLEAR_ERRORINSCRI, CLEAR_SUCCESSINSCRI, FAIL_INSCRIPTION, GET_INSCRISPTION, LOAD_INSCRIPTION} from "../ActionsTypes/inscri"


export const addInscri = (newInscri) => async (dispatch) => {
    dispatch ({type : LOAD_INSCRIPTION})
    try {
        let result = await axios.post('/api/inscri/inscription',newInscri)
        dispatch (  { type : ADD_INSCRIPTION, payload : result.data})
    } catch (error) {
        dispatch ({type : FAIL_INSCRIPTION, payload : error.response.data.errors})
    }
}


export const getInscriptions = () => async (dispatch) => {
    dispatch ({type : LOAD_INSCRIPTION})
    try {
        let result = await axios.get('/api/inscri/getInscriptions')
        dispatch (  { type : GET_INSCRISPTION, payload : result.data.listInscri})
    } catch (error) {
        dispatch ({type : FAIL_INSCRIPTION , payload : error.response.data.errors})
    }
}

export const deleteInscription = (id) => async (dispatch) => {
    dispatch ({type : LOAD_INSCRIPTION})
    try {
        await axios.delete(`/api/inscri/${id}`)
        dispatch (getInscriptions())
    } catch (error) {
        dispatch ({type : FAIL_INSCRIPTION , payload : error.response.data.errors})
    }
}

export const  clearSuccessInscri = () => {
    return {
        type : CLEAR_SUCCESSINSCRI
    }
}


export const clearErrorsInscri = () => {
    return {
        type : CLEAR_ERRORINSCRI
    }
}

