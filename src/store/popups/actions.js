/** This module contains the implementation
 * of the actions accepted by auth redux
 * 
 * Copyright (c) 2017 Aimirim STI.
*/

// Imports from modules
import {AxiosError} from 'axios';
// Local Imports
import * as actionTypes from './actionTypes';

// #######################################

/** Redux action to */
export const openDataSourcePopup=(status) => ({type:actionTypes.OPEN_DATASOURCE, open:status});

/** Redux action to  */
export const openDataPointPopup=(status) => ({type:actionTypes.OPEN_DATAPOINT, open:status});
