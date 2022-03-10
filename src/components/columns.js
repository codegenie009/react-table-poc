import CustomHeader from "./CustomHeader";

const columns = [
    {
        title: 'No',
        field: 'No',
        width: 150,
        headerStyle: {
            fontSize: '16px',
            textAlign: 'center',
        },
    },
    {
        title: 'Queried',
        field: 'Queried',
        width: 150,
        align: 'center',
        headerStyle: {
            fontSize: '16px',
        }
    },
    {
        title: 'DME_booking_id',
        field: 'DME_booking_id',
        width: 120,
        align: 'center',
        headerStyle: {
            fontSize: '16px',
        }
    },
    {
        title: 'Freight_charge',
        field: 'freight_charge',
        width: 40,
        align: 'center',
        headerStyle: {
            fontSize: '16px',
        }
    },
    {
        title: 'Client_name',
        field: 'client_name',
        width: 40,
        align: 'center',
        headerStyle: {
            fontSize: '16px',
        }
    },
    {
        title: 'FP_name',
        field: 'FP_name',
        width: 40,
        align: 'center',
        headerStyle: {
            fontSize: '16px',
        }
    },
    {
        title: 'B_Date',
        field: 'b_date',
        width: 40,
        align: 'center',
        headerStyle: {
            fontSize: '16px',
        }
    },
    {
        title: 'Connote_NO',
        field: 'connote_no',
        width: 40,
        align: 'center',
        headerStyle: {
            fontSize: '16px',
        }
    },
    {
        title: 'FP_INV_DATE',
        field: 'No',
        width: 40,
        align: 'center',
        headerStyle: {
            fontSize: '16px',
        }
    },
    {
        title: 'FP_INV_NO',
        field: 'No',
        width: 40,
        align: 'center',
        headerStyle: {
            fontSize: '16px',
        }
    },
    {
        title: 'Quoted_FP_Cost',
        field: 'No',
        width: 40,
        align: 'center',
        headerStyle: {
            fontSize: '16px',
        }
    },
    {
        title: 'FP_Charge_DME',
        field: 'No',
        width: 40,
        align: 'center',
        headerStyle: {
            fontSize: '16px',
        }
    },
    {
        title: 'fp_quoted_charge_cost_V',
        field: 'No',
        width: 40,
        align: 'center',
        headerStyle: {
            fontSize: '16px',
        }
    },
    {
        title: 'dme_margin',
        field: 'No',
        width: 40,
        align: 'center',
        headerStyle: {
            fontSize: '16px',
        }
    },
    {
        title: 'dme_inv_no',
        field: 'No',
        width: 40,
        align: 'center',
        headerStyle: {
            fontSize: '16px',
        }
    },
    {
        title: 'dme_inv_date',
        field: 'No',
        width: 40,
        align: 'center',
        headerStyle: {
            fontSize: '16px',
        }
    },
    {
        title: 'customer_sales_order',
        field: 'No',
        width: 40,
        align: 'center',
        headerStyle: {
            fontSize: '16px',
        }
    },
    {
        title: 'est_cost_pre_booking',
        field: 'No',
        width: 40,
        align: 'center',
        headerStyle: {
            fontSize: '16px',
        }
    },
    {
        title: 'quoted_$_booking',
        field: 'No',
        width: 40,
        align: 'center',
        headerStyle: {
            fontSize: '16px',
        }
    },
    {
        title: '$_var_reason',
        field: 'No',
        width: 40,
        align: 'center',
        headerStyle: {
            fontSize: '16px',
        }
    },
    { 
        title:  <CustomHeader header='Name' onSort={this.onSort}/>,
        field: 'No',
        width: 10,
        sorting: false,
        align: 'center',
        
    },
];

export { columns };


// const columns = [
//     {
//         "field_name": "No",
//         "is_key": true,
//         "displayType" : 0,
//         "width": "40px",
//         "headerString": "header",
//         "hidden": false,
//     },

//     {
//         "field_name": "Queried",
//         "displayType" : 1,
//         "width": "80px",
//         "headerString": "<div>Freight<br /> Provider</div>",
//         "hidden": false,
//     },

//     {
//         "field_name": "DME_booking_id",
//         "displayType" : 1,
//         "width": "120px",
//         "headerString": "header",
//         "hidden": false,
//     },
//     {
//         "field_name": "freight_charge",
//         "displayType" : 1,
//         "width": "120px",
//         "headerString": "header",
//         "hidden": false,
//     },

//     {
//         "field_name": "client_name",
//         "displayType" : 1,
//         "width": "120px",
//         "headerString": "header",
//         "hidden": false,
//     },

//     {
//         "field_name": "FP_name",
//         "displayType" : 1,
//         "width": "120px",
//         "headerString": "header",
//         "hidden": false,
//     },

//     {
//         "field_name": "b_date",
//         "displayType" : 1,
//         "width": "120px",
//         "headerString": "header",
//         "hidden": false,
//     },

//     {
//         "field_name": "connote_no",
//         "displayType" : 1,
//         "width": "120px",
//         "headerString": "header",
//         "hidden": false,
//     },

//     {
//         "field_name": "fp_inv_date",
//         "displayType" : 1,
//         "width": "120px",
//         "headerString": "header",
//         "hidden": false,
//     },
    
//     {
//         "field_name": "fp_inv_no",
//         "displayType" : 1,
//         "width": "120px",
//         "headerString": "header",
//         "hidden": false,
//     },

//     {
//         "field_name": "quoted_fp_cost",
//         "displayType" : 1,
//         "width": "120px",
//         "headerString": "header",
//         "hidden": false,
//     },
    
//     {
//         "field_name": "fp_charge_dme",
//         "displayType" : 1,
//         "width": "120px",
//         "headerString": "header",
//         "hidden": false,
//     },

//     {
//         "field_name": "fp_quoted_charge_cost_V",
//         "displayType" : 1,
//         "width": "120px",
//         "headerString": "header",
//         "hidden": false,
//     },

//     {
//         "field_name": "dme_markup",
//         "displayType" : 1,
//         "width": "120px",
//         "headerString": "header",
//         "hidden": false,
//     },

//     {
//         "field_name": "dme_margin",
//         "displayType" : 1,
//         "width": "120px",
//         "headerString": "header",
//         "hidden": false,
//     },

    
//     {
//         "field_name": "dme_inv_no",
//         "displayType" : 1,
//         "width": "120px",
//         "headerString": "header",
//         "hidden": false,
//     },

//     {
//         "field_name": "dme_inv_date",
//         "displayType" : 1,
//         "width": "120px",
//         "headerString": "header",
//         "hidden": false,
//     },

//     {
//         "field_name": "customer_sales_order",
//         "displayType" : 1,
//         "width": "120px",
//         "headerString": "header",
//         "hidden": false,
//     },

//     {
//         "field_name": "est_cost_pre_booking",
//         "displayType" : 1,
//         "width": "120px",
//         "headerString": "header",
//         "hidden": false,
//     },

//     {
//         "field_name": "quoted_$_booking",
//         "displayType" : 1,
//         "width": "120px",
//         "headerString": "header",
//         "hidden": false,
//     },

//     {
//         "field_name": "$_var_reason",
//         "displayType" : 1,
//         "width": "120px",
//         "headerString": "header",
//         "hidden": false,
//     },

//     {
//         "field_name": "quoted_$versus_charged",
//         "displayType" : 2,
//         "width": "120px",
//         "headerString": "header",
//         "hidden": false,
//         "sort": "up",
//     },
//     {
//         "field_name": "QTY",
//         "displayType" : 2,
//         "width": "120px",
//         "headerString": "header",
//         "sort": "up",
//         "hidden": false,
//     },
//     {
//         "field_name": "Mass KG Measured",
//         "displayType" : 2,
//         "width": "120px",
//         "headerString": "header",
//         "sort": "up",
//         "hidden": false,
//     },
//     {
//         "field_name": "Cubic Measured",
//         "displayType" : 2,
//         "width": "120px",
//         "headerString": "header",
//         "sort": "up",

//         "hidden": false,
//     },
//     {
//         "field_name": "Greater of Customer Declared Mass or Cubic KG",
//         "displayType" : 2,
//         "width": "120px",
//         "headerString": "header",
//         "sort": "up",

//         "hidden": false,
//     },
//     {
//         "field_name": "Greater of FP Charged Mass KG or Cubic KG",
//         "displayType" : 2,
//         "width": "120px",
//         "headerString": "header",
//         "sort": "up",

//         "hidden": false,
//     },
//     {
//         "field_name": "No of billed vs. no of Quoted Charge Lines",
//         "displayType" : 2,
//         "width": "120px",
//         "headerString": "header",
//         "hidden": false,
//         "sort": "up",
//     },
//     {
//         "field_name": "Residential not Business",
//         "displayType" : 2,
//         "width": "120px",
//         "headerString": "header",
//         "hidden": false,
//         "sort": "up",
//     },
//     {
//         "field_name": "MASS KG",
//         "displayType" : 2,
//         "width": "120px",
//         "headerString": "header",
//         "hidden": false,
//         "sort": "up",
//     },
//     {
//         "field_name": "$quoted",
//         "displayType" : 3,
//         "width": "120px",
//         "headerString": "header",
//         "hidden": false,
//         "sort": "up",
//     },
//     {
//         "field_name": "$booked",
//         "displayType" : 3,
//         "width": "120px",
//         "headerString": "header",
//         "hidden": false,
//         "sort": "up",
//     },
// ]

// export { columns };