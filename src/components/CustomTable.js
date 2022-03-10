// import React from "react";
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
// import { data } from "./data.js";
// import { columns } from "./columns";
// import './CustomTable.css';

// class ReactTable extends React.Component {
//   constructor(props) {
//     super(props);
//     this.page = 0;
//     this.pageSize = 0;
//     this.options = {
//       page: 1,  // which page you want to show as default
//       sizePerPageList: [ {
//         text: '5', value: 5
//       }, {
//         text: '10', value: 10
//       }, {
//         text: 'All', value: data.data.length
//       } ], // you can change the dropdown list for size per page
//       sizePerPage: 5,  // which size per page you want to locate as default
//       pageStartIndex: 1, // where to start counting the pages
//       paginationSize: 10,  // the pagination bar size.
//       prePage: 'Prev', // Previous page button text
//       nextPage: 'Next', // Next page button text
//       firstPage: 'First', // First page button text
//       lastPage: 'Last', // Last page button text
//       // paginationShowsTotal: this.renderShowsTotal,  // Accept bool or function
//       paginationPosition: 'bottom',  // default is bottom, top and both is all available
//       onPageChange:  this.onPageChange.bind(this),
//       onSizePerPageList: this.sizePerPageListChange.bind(this)
//       // hideSizePerPage: true > You can hide the dropdown for sizePerPage
//       // alwaysShowAllBtns: true // Always show next and previous button
//       // withFirstAndLast: false > Hide the going to First and Last page button
//     };

//     this.state = {
//       data: data.data,
//       columns: columns,
//       index: 0,

//     };
//   }

//   priceFormatter = (cell, row) => {
//     return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
//   }

//   renderRectField = (sub, offset) => {
//     let isNormal = (Math.abs(sub) <= offset)
//     let style = {
//         border: '1px solid black',
//         backgroundColor: isNormal ? '#FED1CF' : '#FFFFFF',
//         width: '25px',
//         height: '25px',
//         justifyContent: 'center',
//         alignItems: 'center',
//         display: 'flex'
//     }
    
//     let textStyle = {
//         color: sub > 0 ? '#0000FF' : '#FF0000',
//         fontSize: '20px',
//         marginTop: '-3px'
//     }

//     return (
//         <div style={style}>
//         {
//             !isNormal && <span style={textStyle}>{ sub > 0 ? '+' : '-' }</span>
//         }
//         </div>
//     )
//   }

//   renderCustomField = (row) => {
//     let v1 = row.$quoted
//     let v2 = row.$booked
//     let sub = v1 - v2
//     let rootStyle = {
//         display: 'flex',
//         justifyContent: 'center'
//     }

//     let style = {
//         // padding: '0px'
//         paddingLeft: '2px',
//         paddingRight: '2px',
//         fontSize: '10px',
//         width: '40px'
//     }

//     let styleText = {
//         color: sub < 0 ? 'red' : 'blue'
//     }

//     let offset = 25

//     return (
//         <div style={rootStyle}>
//             <div style={{...style, textAlign: 'right'}}>
//                 { v1.toFixed(2) }
//             </div>
//             <div style={{...style, width: '30px'}}>
//                 { this.renderRectField(sub, offset) }
//             </div>
//             <div style={style}>
//                 <div>{ v2.toFixed(2) }</div>
//                 <div style={styleText}>{ sub.toFixed(2) }</div>
//             </div>
//         </div>
//     )
//   }

//   renderIndexField = (index) => {
//     const page = this.page;
//     const pageSize = this.pageSize;

//     return (
//       <div>
//         {page * pageSize + index + 1}
//       </div>
//     )
//   }

//   renderShowsTotal(start, to, total) {
//     return (
//       <p style={ { color: 'blue' } }>
//         From { start } to { to }, totals is { total }&nbsp;&nbsp;(its a customize text)
//       </p>
//     );
//   }

  

//   onSort = (key) => {
//     let newState = [...this.state.data];
//     let columns = [...this.state.columns];
    
//     const direct = columns.find((column, index) => {
//       if (column.field_name === key) return true;
//       return false;
//     });

//     if (direct.sort === "up") {
//       newState.sort((a, b) => {
//         return b[key] - a[key];
//       });
//       direct.sort = "down";
//     } else {
//       newState.sort((a, b) => {
//         return a[key] - b[key];
//       });
//       direct.sort = "up"
//     }
//     this.setState(columns)
//     this.setState({data: newState});
//   }

//   onPageChange = (page, sizePerPage) => {
//     this.page = page;
//     this.sizePerPage = sizePerPage;
//   }
  
//   sizePerPageListChange = (sizePerPage) => {
//     this.sizePerPage = sizePerPage
//   }
//   render() {
//     let columns = this.state.columns;
//     const selectRow = {
//       mode: 'checkbox',
//       clickToSelect: true,
//     };

//     const cellEdit = {
//       mode: 'click' // click cell to edit
//     };

//     return (
//       <div className="container">
//         <BootstrapTable data={this.state.data} keyField='No' hover={true} 
//           pagination= {true} options={this.options} trClassName="row-style" 
//           tableHeaderClass="header-style" search multiColumnSearch condensed 
//           selectRow={selectRow}
//         >
//           {
//             columns.map((column, index) => {
//               if (!column.hidden) {
//                 if (column.displayType === 1) {
//                   return <TableHeaderColumn dataField={column.field_name} key={index} width={column.width} dataAlign="center" dataSort={false}>{column.field_name}</TableHeaderColumn>
//                 } else if (column.displayType === 2) {
//                   return (
//                     <TableHeaderColumn key={index} dataField="" dataAlign="center" width={'120px'} dataSort={false} dataFormat={(cell, row) => this.renderCustomField(row)}>
//                       <i onClick={() => this.onSort('$quoted')} className="fa fa-sort" style={{fontSize: "12px", color: "blue"}}></i>&nbsp;{column.field_name}&nbsp;
//                       <i className="fa fa-sort" style={{fontSize: "12px", color: "red"}} onClick={() => this.onSort('$booked')}></i>
//                     </TableHeaderColumn>
//                   );
//                 } else if (column.displayType === 0) {
//                   return (
//                     <TableHeaderColumn key={index} dataField={column.field_name} dataAlign="center" width={'50px'} dataSort={false} dataFormat={(cell, row, enu , index) => this.renderIndexField(index)}>
//                       &nbsp;{column.field_name}&nbsp;
//                     </TableHeaderColumn>
//                   )
//                 }
//               }
//             })
//           }
//         </BootstrapTable>
//       </div>
//     );
//   }


// }

// export default ReactTable;