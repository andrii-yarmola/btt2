import React from 'react';
import TableRow from './tableRow';

const TableBody = ({tableData}) => {
    return (
      <tbody>
        <tr>
          <td className="cell01">1</td>
          <td className="cell02"><a href="#">Aqorn</a></td>
          <td className="cell03"><a href="mailto:adam@aqorn.com">adam@aqorn.com</a></td>
          <td className="cell04"><a href="callto:+010012340056700">+01 00 12340056700</a></td>
          <td className="cell05">Feb 01 2016</td>
          <td className="cell06">Request</td>
        </tr>
        <tr>
          <td className="cell01">2</td>
          <td className="cell02"><a href="#">Batelco</a></td>
          <td className="cell03"><a href="mailto:long.name.batelco.client.email@batelco.com">long.name.batelco.client.email@batelco.com</a></td>
          <td className="cell04"><a href="callto:+010012340056700">+01 00 12340056700</a></td>
          <td className="cell05">Feb 04 2016</td>
          <td className="cell06">Schedule</td>
        </tr>
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
