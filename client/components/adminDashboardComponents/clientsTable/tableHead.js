import React from 'react';
import classnames from 'classnames';

const TableHead = ({ activeFilter, filterChanged, filterDirectionUp }) => {
    return (
      <thead>
        <tr>
          <th className="cell01">...</th>
          <th
            className={classnames("cell02", {"active" : activeFilter==="name"})}
            onClick={filterChanged}
            data-filter="name">
            Client Name
            <span className={classnames("sort-desc", {"active" : filterDirectionUp && activeFilter==="name"})}>&#9650;</span>
            <span className={classnames("sort-asc", {"active" : !filterDirectionUp && activeFilter==="name"})}>&#9660;</span>
          </th>
          <th
            className={classnames("cell03", {"active" : activeFilter==="email"})}
            onClick={filterChanged}
            data-filter="email">
            Email 
            <span className={classnames("sort-desc", {"active" : filterDirectionUp && activeFilter==="email"})}>&#9650;</span>
            <span className={classnames("sort-asc", {"active" : !filterDirectionUp && activeFilter==="email"})}>&#9660;</span>
          </th>
          <th
            className={classnames("cell04", {"active" : activeFilter==="phone"})}
            onClick={filterChanged}
            data-filter="phone">
            Phone
            <span className={classnames("sort-desc", {"active" : filterDirectionUp && activeFilter==="phone"})}>&#9650;</span>
            <span className={classnames("sort-asc", {"active" : !filterDirectionUp && activeFilter==="phone"})}>&#9660;</span>
          </th>
          <th
            className={classnames("cell05", {"active" : activeFilter==="date"})}
            onClick={filterChanged}
            data-filter="date">
            Date added
            <span className={classnames("sort-desc", {"active" : filterDirectionUp && activeFilter==="date"})}>&#9650;</span>
            <span className={classnames("sort-asc", {"active" : !filterDirectionUp && activeFilter==="date"})}>&#9660;</span>
          </th>
           <th
            className={classnames("cell06", {"active" : activeFilter==="type"})}
            onClick={filterChanged}
            data-filter="type">
            Type
            <span className={classnames("sort-desc", {"active" : filterDirectionUp && activeFilter==="type"})}>&#9650;</span>
            <span className={classnames("sort-asc", {"active" : !filterDirectionUp && activeFilter==="type"})}>&#9660;</span>
          </th>
        </tr>
      </thead>
    );
};

export default TableHead;
