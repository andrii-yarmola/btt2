import React from 'react';
import TableRow from './tableRow';
import classnames from 'classnames';

const TableBody = ({ tableData, isTableLoaded, startNumber }) => {
    return (
      <tbody className={classnames({"loading" : !isTableLoaded})}>
        {tableData.map((row, i) => 
          <TableRow 
            key={row.id}
            id={row.id}
            i={startNumber+i+1}
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
