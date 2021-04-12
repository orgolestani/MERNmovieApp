import React, { useEffect } from 'react';
import MUIDataTable from "mui-datatables";


export default function DataTable(props) {
  const { title,  columns, options, data } = props
 


  return (
    <div style={{ height: 400, width: '100%' }}>
      <h1>Table is Below</h1>
      <MUIDataTable
        title={title}
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
}
