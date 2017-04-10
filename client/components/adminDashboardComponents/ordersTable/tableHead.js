import React from 'react';
import classnames from 'classnames';

const TableHead = ({ activeFilter, filterChanged, filterDirectionUp }) => {
    return (
      <thead>
        <tr>
          <th className="cell01">...</th>
          <th
            className={classnames("cell02", {"active" : activeFilter==="created_at"})}
            onClick={filterChanged}
            data-filter="created_at">
            Date Generated
            <span className={classnames("sort-desc", {"active" : filterDirectionUp && activeFilter==="created_at"})}>&#9650;</span>
            <span className={classnames("sort-asc", {"active" : !filterDirectionUp && activeFilter==="created_at"})}>&#9660;</span>
          </th>
          <th
            className={classnames("cell02", {"active" : activeFilter==="name"})}
            onClick={filterChanged}
            data-filter="name">
            Order Name
            <span className={classnames("sort-desc", {"active" : filterDirectionUp && activeFilter==="name"})}>&#9650;</span>
            <span className={classnames("sort-asc", {"active" : !filterDirectionUp && activeFilter==="name"})}>&#9660;</span>
          </th>
          <th
            className={classnames("cell02", {"active" : activeFilter==="amount"})}
            onClick={filterChanged}
            data-filter="amount">
            sum
            <span className={classnames("sort-desc", {"active" : filterDirectionUp && activeFilter==="amount"})}>&#9650;</span>
            <span className={classnames("sort-asc", {"active" : !filterDirectionUp && activeFilter==="amount"})}>&#9660;</span>
          </th>
          <th
            className={classnames("cell02", {"active" : activeFilter==="status"})}
            onClick={filterChanged}
            data-filter="status">
            status
            <span className={classnames("sort-desc", {"active" : filterDirectionUp && activeFilter==="status"})}>&#9650;</span>
            <span className={classnames("sort-asc", {"active" : !filterDirectionUp && activeFilter==="status"})}>&#9660;</span>
          </th>
          <th
            className={classnames("cell06", {"active" : activeFilter==="updated_at"})}
            onClick={filterChanged}
            data-filter="updated_at">
            Status changed
            <span className={classnames("sort-desc", {"active" : filterDirectionUp && activeFilter==="updated_at"})}>&#9650;</span>
            <span className={classnames("sort-asc", {"active" : !filterDirectionUp && activeFilter==="updated_at"})}>&#9660;</span>
          </th>
        </tr>
      </thead>
    );
};

export default TableHead;
