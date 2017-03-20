import React from 'react';

const TableRow = ({i, name, email, phone, created_at, type}) => {
    const typeView = {
      'request-proposal' : 'Request',
      'request-call' : 'Schedule'
    }
    return (
      <tr>
        <td className="cell01">{i}</td>
        <td className="cell02"><a href="#">{name}</a></td>
        <td className="cell03"><a href={`mailto:${email}`}>{email}</a></td>
        <td className="cell04"><a href={`callto:${phone}`}>{phone}</a></td>
        <td className="cell05">{created_at}</td>
        <td className="cell06">
          {typeView[type]}
        </td>
      </tr>
    );
};

export default TableRow;
