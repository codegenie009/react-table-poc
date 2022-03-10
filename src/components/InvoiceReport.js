import React from "react";
import MaterialTable from "material-table";

import CustomHeader from "./CustomHeader";
import './CustomTable.css';
import './InvoiceReport.css';
import {data} from './data'

class InvoiceReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    columns = [
        {
            title: 'No',
            width: 100,
            dataIndex: 'No',
            key: 'No',
            fixed: 'left',
        },
        {
            title: 'Queried',
            width: 100,
            dataIndex: 'Queried',
            key: 'Queried',
            fixed: 'left',
        },
        {
            title: 'Queried',
            field: 'Queried',
            cellStyle: {
                width: 300,
                minWidth: 300
            },
            headerStyle: {
                width: 300,
                minWidth: 300
            },
        },
        {
            title: 'DME_booking_id',
            field: 'DME_booking_id',
            cellStyle: {
                width: 300,
                minWidth: 300
            },
            headerStyle: {
                width: 300,
                minWidth: 300
            },
        },
        {
            title: 'Freight_charge',
            field: 'freight_charge',
            
            cellStyle: {
                width: 300,
                minWidth: 300
            },
            headerStyle: {
                width: 300,
                minWidth: 300
            },
        },
        {
            title: 'Client_name',
            field: 'client_name',
            
            cellStyle: {
                width: 300,
                minWidth: 300
            },
            headerStyle: {
                width: 300,
                minWidth: 300
            },
        },
        {
            title: 'FP_name',
            field: 'FP_name',
            
            cellStyle: {
                width: 300,
                minWidth: 300
            },
            headerStyle: {
                width: 300,
                minWidth: 300
            },
        },
        {
            title: 'B_Date',
            field: 'b_date',
            cellStyle: {
                width: 300,
                minWidth: 300
            },
            headerStyle: {
                width: 300,
                minWidth: 300
            },
        },
        {
            title: 'Connote_NO',
            field: 'connote_no',
            
            cellStyle: {
                width: 300,
                minWidth: 300
            },
            headerStyle: {
                width: 300,
                minWidth: 300
            },
        },
        {
            title: 'FP_INV_DATE',
            field: 'fp_inv_date',
            
            width: '80px',
            align: 'left',
            headerStyle: {
                fontSize: '16px',
            }
        },
        {
            title: 'FP_INV_NO',
            field: 'fp_inv_no',
            
            cellStyle: {
                width: 300,
                minWidth: 300
            },
            headerStyle: {
                width: 300,
                minWidth: 300
            },
        },
        {
            title: 'Quoted_FP_Cost',
            field: 'quoted_fp_cost',
            
            cellStyle: {
                width: 300,
                minWidth: 300
            },
            headerStyle: {
                width: 300,
                minWidth: 300
            },
        },
        {
            title: 'FP_Charge_DME',
            field: 'fp_charge_dme',
            align: 'left',
            cellStyle: {
                width: 300,
                minWidth: 300
            },
            headerStyle: {
                width: 300,
                minWidth: 300
            },
        },
        {
            title: 'fp_quoted_charge_cost_V',
            field: 'fp_quoted_charge_cost_V',
            
            cellStyle: {
                width: 300,
                minWidth: 300
            },
            headerStyle: {
                width: 300,
                minWidth: 300
            },
        },
        {
            title: 'dme_margin',
            field: 'dme_markup',
            
            cellStyle: {
                width: 300,
                minWidth: 300
            },
            headerStyle: {
                width: 300,
                minWidth: 300
            },
        },
        {
            title: 'dme_inv_no',
            field: 'dme_margin',
            
            cellStyle: {
                width: 300,
                minWidth: 300
            },
            headerStyle: {
                width: 300,
                minWidth: 300
            },
        },
        {
            title: 'dme_inv_date',
            field: 'dme_inv_date',
            
            cellStyle: {
                width: 300,
                minWidth: 300
            },
            headerStyle: {
                width: 300,
                minWidth: 300
            },
        },
        {
            title: 'customer_sales_order',
            field: 'customer_sales_order',
            
            cellStyle: {
                width: 300,
                minWidth: 300
            },
            headerStyle: {
                width: 300,
                minWidth: 300
            },
        },
        {
            title: 'est_cost_pre_booking',
            field: 'est_cost_pre_booking',
            
            cellStyle: {
                width: 300,
                minWidth: 300
            },
            headerStyle: {
                width: 300,
                minWidth: 300
            },
        },
        {
            title: 'quoted_$_booking',
            field: 'quoted_$_booking',
            
            cellStyle: {
                width: 300,
                minWidth: 300
            },
            headerStyle: {
                width: 300,
                minWidth: 300
            },
        },
        {
            title: '$_var_reason',
            field: '$_var_reason',
            
            cellStyle: {
                width: 300,
                minWidth: 300
            },
            headerStyle: {
                width: 300,
                minWidth: 300
            },
        },
        {
            title: '$_var_reason',
            field: 'task',
            width: '80px',   
            align: 'left',
            headerStyle: {
                fontSize: '16px',
            }
        },
        {
            title: '$_var_reason',
            field: 'lastAction',
            width: '80px',   
            align: 'left',
        },
        {
            title: '$_var_reason',
            field: 'timestamp',
            width: '80px',   
            align: 'left',
            headerStyle: {
                fontSize: '16px',
            }
        },
        {
            title: '$_var_reason',
            field: 'elapsed',
            width: '80px',   
            align: 'left',
            headerStyle: {
                fontSize: '16px',
            }
        },
        {
            title: '$_var_reason',
            field: 'remaining',
            width: '80px',   
            align: 'left',
            headerStyle: {
                fontSize: '16px',
            }
        },
        {
            title: '$_var_reason',
            field: 'status',
            width: '80px',   
            align: 'left',
            headerStyle: {
                fontSize: '16px',
            }
        },
        {
            title: '$_var_reason',
            field: 'notes',
            width: '80px',
            align: 'left',
            headerStyle: {
                fontSize: '16px',
                minWidth: '80px'
            }
        },
        {
            title: '$_var_reason',
            field: '$quoted',
            headerStyle: {
                fontSize: '16px',
            }
        },
        {
            title: '$_var_reason',
            field: '$booked',
            headerStyle: {
                fontSize: '16px',
            }
        },

        { 
            title:  <CustomHeader header='Name' onSort={this.onSort}/>,
            field: 'No',
            
            sorting: false,
        },
        { 
            title:  <CustomHeader header='Name' onSort={this.onSort}/>,
            field: 'No',
            
            sorting: false,
        },
        { 
            title:  <CustomHeader header='Name' onSort={this.onSort}/>,
            field: 'No',
            
            sorting: false,
        },
        { 
            title:  <CustomHeader header='Name' onSort={this.onSort}/>,
            field: 'No',
            sorting: false,
            width: '100%'
        },
    ];

    onSort(key) {
        console.log(key)
    }

    render() {
        // const { columns } = this.state;
        return (
            <MaterialTable
                columns= {this.columns}
                data={data.data}
                options={{
                    fixedColumns: {
                        left: 2,
                        right: 0,
                    },
                    tableLayout: "fixed",
                    doubleHorizontalScroll: false,
                }}
            />
        )
    }
}

export default InvoiceReport;