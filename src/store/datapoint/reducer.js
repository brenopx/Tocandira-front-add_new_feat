/** This module contains the auth
 * reducer build and configuration
 * 
 * Copyright (c) 2017 Aimirim STI.
*/

// Local Imports
import * as actionTypes from './actionTypes';
import { getDataPointAddress } from '../../component/Protocols/Protocols';

// #######################################

/** Initial state of the auth redux */
const initialState = {
    dp_content:[],
    dp_defaults:{},
    dp_verify:[],
    state_edit_dp:false,
};

/** Auth reducer definition */
const reducer = (state=initialState, action) => {
    let dp_formated_list;
    // Duplicate the state to change the Pointer
    const newState = {...state};
    // Check and select correct action
    switch ( action.type ) {
        case actionTypes.GET_DPDATA:
            let new_dp_content = [...action.dplist]
            new_dp_content.forEach((row, id) => {
                row['table_id'] = id
            })
            newState.dp_content = new_dp_content;
            break
        case actionTypes.UPDATE_DPDATA_PENDING:
            dp_formated_list = action.dp_list.map(
                (row)=>({
                    name: row.name,
                    address: getDataPointAddress(row,row.access.name),
                    status: null, 
                    response: null,
                    message: ""
                })
            );
            newState.dp_verify = dp_formated_list;
            break
        case actionTypes.VERIFY_DPDATA_PENDING:
            newState.dp_verify.forEach((row) => {
                if (row.name === action.dpname){
                    row.status = action.dplist.status
                    row.response = action.dplist.response
                    row.message = action.dplist.message
                    }
            })
            break
        case actionTypes.GET_DP_DEFAULTS:
            newState.dp_defaults = {...state.dp_defaults};
            newState.dp_defaults[action.protocol] = action.defaults;
            break
        case actionTypes.STATE_EDIT_DP:
            newState.state_edit_dp = action.state_edit_dp;
            break
        default:
            // console.debug('[reducers/auth]',action)
            break
    }
    return(newState);
};

export default reducer;
