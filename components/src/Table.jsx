import React from "react";
import Button from "./Button";
import "./Table.css";

const Table = (props) => {
  const {
    allowCreate,
    allowDelete,
    allowUpdate,
    columns,
    data,
    ...otherProps
  } = props;

  const hasActions = allowDelete || allowUpdate;
  const totalColumns = columns.length + (hasActions ? 1 : 0);

  const renderRows = () => {
    if (!data?.length) {
      return (
        <tr>
          <td colSpan={totalColumns}>
            No data
          </td>
        </tr>
      );
    }

    return (
      <>
        {data.map((rowData) => (
          <tr>
            {hasActions && (
              <td>
                {allowUpdate && (
                  <Button type="link">Update</Button>
                )}
                {allowDelete && (
                  <Button type="link">Delete</Button>
                )}
              </td>
            )}
            {columns.map((column) => (
              <td className={column.align}>
                {rowData[column.propertyName]}
              </td>
            ))}
          </tr>
        ))}
      </>
    );
  };

  return (
    <>
      {allowCreate && (
        <div role="toolbar">
          <Button>
            Add New
          </Button>
        </div>
      )}
      <table
        {...otherProps}
        className="component-table"
      >
        <thead>
          <tr>
            {hasActions && (
              <th>Actions</th>
            )}
            {columns.map((column) => (
              <th className={column.align}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
      </table>
    </>
  );
};

export default Table;
