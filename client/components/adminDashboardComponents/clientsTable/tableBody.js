import React from 'react';
import TableRow from './tableRow';

const TableBody = ({tableData}) => {
    return (
      <tbody>
        {tableData.map((row, i) => 
          <TableRow 
            key={row.id}
            i={i+1}
            name={row.name}
            email={row.email}
            phone={row.phone}
            created_at={row.created_at}
            type={row.type}
          />)
        }
      </tbody>
    );
};

export default TableBody;
