import React from 'react';
import classnames from 'classnames';

const TableHead = ({ activeFiler, filterChanged, filerDirectionUp }) => {
    return (
      <thead>
        <tr>
          <th className="cell01">...</th>
          <th
            className={classnames("cell02", {"active" : activeFiler==="name"})}
            onClick={filterChanged}
            data-filter="name">
            Client Name
            <span className={classnames("sort-desc", {"active" : filerDirectionUp && activeFiler==="name"})}>&#9650;</span>
            <span className={classnames("sort-asc", {"active" : !filerDirectionUp && activeFiler==="name"})}>&#9660;</span>
          </th>
          <th
            className={classnames("cell03", {"active" : activeFiler==="email"})}
            onClick={filterChanged}
            data-filter="email">
            Email 
            <span className={classnames("sort-desc", {"active" : filerDirectionUp && activeFiler==="email"})}>&#9650;</span>
            <span className={classnames("sort-asc", {"active" : !filerDirectionUp && activeFiler==="email"})}>&#9660;</span>
          </th>
          <th
            className={classnames("cell04", {"active" : activeFiler==="phone"})}
            onClick={filterChanged}
            data-filter="phone">
            Phone
            <span className={classnames("sort-desc", {"active" : filerDirectionUp && activeFiler==="phone"})}>&#9650;</span>
            <span className={classnames("sort-asc", {"active" : !filerDirectionUp && activeFiler==="phone"})}>&#9660;</span>
          </th>
          <th
            className={classnames("cell05", {"active" : activeFiler==="date"})}
            onClick={filterChanged}
            data-filter="date">
            Date added
            <span className={classnames("sort-desc", {"active" : filerDirectionUp && activeFiler==="date"})}>&#9650;</span>
            <span className={classnames("sort-asc", {"active" : !filerDirectionUp && activeFiler==="date"})}>&#9660;</span>
          </th>
           <th
            className={classnames("cell06", {"active" : activeFiler==="type"})}
            onClick={filterChanged}
            data-filter="type">
            Type
            <span className={classnames("sort-desc", {"active" : filerDirectionUp && activeFiler==="type"})}>&#9650;</span>
            <span className={classnames("sort-asc", {"active" : !filerDirectionUp && activeFiler==="type"})}>&#9660;</span>
          </th>
        </tr>
      </thead>
    );
};

export default TableHead;
