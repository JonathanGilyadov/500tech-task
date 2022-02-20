import React from "react";
import { genId } from "./utilities/id";

const Grid = ({ config, data }) => {
  return (
    <table>
      <thead>
        <tr>
          {config.map((headColumn) => (
            <th key={genId()}>{headColumn.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((column) => (
          <tr key={genId()}>
            {config.map(({ component, field }) =>
              component ? (
                component({ data: column[field] })
              ) : (
                <td key={genId()}>{column[field]}</td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Grid;
