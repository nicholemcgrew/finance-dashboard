import { useFinancialRecords } from "../../contexts/financial-record-context";
import { useTable, Column, CellProps, Row } from "react-table";

export const FinancialRecordList = () => {
	const { records } = useFinancialRecords();

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({ columns, data: records });
	return (
		<div className="table-container">
			<table {...getTableProps()} className="table">
				<thead>
          {headerGroups.map((hg) => (
            <tr {...hg.getHeaderGroupProps()}>
              {hg.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
				<tbody {...getTableBodyProps()}>
          {rows.map((row, idx) => {
            prepareRow(row)
            return <tr {...row.getRowProps()}></tr>
          })}
        </tbody>
			</table>
		</div>
	);
};
