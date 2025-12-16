import React from "react";

interface DataTableProps {
  columns: string[];
  data: string[][];
}

export const DataTable: React.FC<DataTableProps> = ({ columns, data }) => {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col} className="border-b p-2 text-left font-medium">
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="hover:bg-slate-50">
            {row.map((cell, j) => (
              <td key={j} className="p-2 border-b">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
