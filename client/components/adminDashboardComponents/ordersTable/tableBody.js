import React from 'react';
import TableRow from './tableRow';
import classnames from 'classnames';

const TableBody = ({ tableData, isTableLoaded, startNumber }) => {
    return (
      <tbody className={classnames({"loading" : !isTableLoaded})}>
        {tableData.map((row, i) => 
          <TableRow 
            key={row.id}
            i={startNumber+i+1}
            name={row.name}
            status={row.status}
            amount={row.amount}
            created_at={row.created_at}
            changed_at={row.changed_at}
          />)
        }
      </tbody>
    );
};

export default TableBody;
