import React from 'react';
import { Link } from 'react-router';

const TableRow = ({ i, created_at, name, amount, status, changed_at }) => {
    return (
      <tr>
        <td className="cell01">{i}</td>
        <td className="cell05">{created_at}</td>
        <td className="cell02">
          <Link to={`#`}>{name} </Link>
        </td>
        <td className="cell05">{amount}</td>
        <td className="cell05">{status}</td>
        <td className="cell05">{changed_at}</td>
      </tr>
    );
};

export default TableRow;
