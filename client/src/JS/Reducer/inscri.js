import {ADD_INSCRIPTION, CLEAR_ERRORINSCRI, CLEAR_SUCCESSINSCRI, FAIL_INSCRIPTION, GET_INSCRISPTION, LOAD_INSCRIPTION,} from "../ActionsTypes/inscri"

const initialState = {
  newInscri: {},
  listInscri: [],
  errors: null,
  load: false,
  success: null,
}; 


const inscriReducer = (state=initialState ,  {type,payload}) => {
    switch (type) {
        case LOAD_INSCRIPTION:
            return {...state, load : true}
        case ADD_INSCRIPTION:
            return {...state, load : false , newInscri: payload.newInscri, success : payload.success}    
        case GET_INSCRISPTION:
            return {...state, load:false , listInscri:payload, success : payload.success }         
       case FAIL_INSCRIPTION : 
            return {...state , load : false , errors : payload}       
       case CLEAR_SUCCESSINSCRI : 
             return {...state , success : null}       
        case CLEAR_ERRORINSCRI :
            return {...state , errors : null }      
        default:
            return state
    }
}


export default inscriReducer ;
