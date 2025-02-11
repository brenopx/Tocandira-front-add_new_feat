/** This module holds the view of the React
 * component `DataTable`
 * 
 * Copyright (c) 2017 Aimirim STI.
 * 
 * Dependencies are:
 * - react 
 * - @mui/material
*/

// Imports from modules;
import React from 'react';
import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';
// Local Imports

// #######################################

/** Description
* @property `props.`:
* @method `props.`: */
class DataTable extends React.PureComponent {
     
    /** Defines the component property types */
    static propTypes = {
        headers:PropTypes.any,
        content_rows:PropTypes.array,
        processRowUpdate:PropTypes.func,
        handleProcessRowUpdateError:PropTypes.func,
    };

    static defaultProps={
    }

    /** Defines the component visualization.
    * @returns JSX syntax element */
    render(){
        const jsx_component = (
            <DataGrid
                sx={{...this.props.sx}}
                columns={this.props.headers}
                getRowId={(row) => row.table_id}
                rows={this.props.content_rows}
                editMode="row"
                processRowUpdate={this.props.processRowUpdate}
                onProcessRowUpdateError={this.props.handleProcessRowUpdateError}
                getRowClassName={this.props.getRowClassName}
            />
        )
        return(jsx_component);
    }
    
}

// Make this component visible on import
export default DataTable;