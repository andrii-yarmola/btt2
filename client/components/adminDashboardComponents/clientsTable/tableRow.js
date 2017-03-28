import React from 'react';
import { Link } from 'react-router';

const TableRow = ({i, name, email, phone, created_at, type, id}) => {
    const typeView = {
      'request-proposal' : 'Request',
      'request-call' : 'Schedule'
    }
    return (
      <tr>
        <td className="cell01">{i}</td>
        <td className="cell02">
          <Link to={`/server/clients/${id}`}>{name} </Link>
        </td>
        <td className="cell03"><a href={`mailto:${email}`}>{email}</a></td>
        <td className="cell04"><a href={`callto:${phone}`}>{phone}</a></td>
        <td className="cell05">{created_at}</td>
        <td className="cell06">{typeView[type]}</td>
      </tr>
    );
};

export default TableRow;
