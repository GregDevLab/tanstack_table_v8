
import {
	Column,
	ColumnDef,
	ColumnFiltersState,
	SortingState,
	VisibilityState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";

import { CSSProperties, useEffect, useLayoutEffect } from "react";


import { TablePagination } from "@/components/table/pagination/table-pagination";
import ToggleColumn from "@/components/table/toggle-column/toggle-column";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { dateFilter } from "@/lib/filter";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface DataTableProps<TData, TValue> {
    defaultColumns: ColumnDef<TData, TValue>[];
    data: TData[];
}

const getCommonPinningStyles = (column: Column<any>): CSSProperties => {
	console.log("column",column.id)
    const isPinned = column.getIsPinned();
    const isLastLeftPinnedColumn =
        isPinned === "left" && column.getIsLastColumn("left");
    const isFirstRightPinnedColumn =
        isPinned === "right" && column.getIsFirstColumn("right");

    return {
        boxShadow: isLastLeftPinnedColumn
            ? "-4px 0 4px -4px gray inset"
            : isFirstRightPinnedColumn
            ? "4px 0 4px -4px gray inset"
            : undefined,
        left:
            isPinned === "left"
                ? `${column.getStart("left") - 1}px`
                : undefined,
        right:
            isPinned === "right"
                ? `${column.getAfter("right") - 1}px`
                : undefined,
        opacity: isPinned ? 0.95 : 1,
        position: isPinned ? "sticky" : "relative",
        width: column.getSize(),
        zIndex: isPinned ? 1 : 0,
    };
};

const getClassNames = (column: Column<any>, columnPinning:any) => {
    const isPinned = column.getIsPinned();

    if (isPinned && columnPinning.left.length > 1) {
        return "min-w-40";
    } else {
		return "min-w-0"
	}
};


export function DataTable<TData, TValue>({
    defaultColumns,
    data,
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [rowSelection, setRowSelection] = useState({});
    const [columns] = useState(() => [...defaultColumns]);
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
    const [columnPinning, setColumnPinning] = useState({})
	
	useEffect(() => {
		console.log("pinnnig", columnPinning)
	}, [columnPinning])

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onRowSelectionChange: setRowSelection,
		onColumnVisibilityChange: setColumnVisibility,
        onColumnPinningChange: setColumnPinning,
		filterFns: {
			dateFilter
		},
        state: {
            sorting,
            columnFilters,
            rowSelection,
			columnVisibility,
            columnPinning,
        },
    });
	useLayoutEffect(() => {
		table.getColumn('select')?.pin('left')
	}, [table])
    return (
        <div>
            <div className="flex items-center py-4">
                {/* <Input
                    placeholder="Filter localisation"
                    value={
                        (table.getColumn("city")?.getFilterValue() as string) ??
                        ""
                    }
                    onChange={(event) =>
                        table
                            .getColumn("city")
                            ?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                /> */}
				<ToggleColumn table={table}/>
            </div>
            <div className="rounded-md overflow-hidden table-container">
                <Table
                    style={{
                        width: table.getTotalSize(),
                    }}
                >
                    <TableHeader className="bg-gray-500">
                        {table.getHeaderGroups().map((headerGroup, index) => (
                            <TableRow key={headerGroup.id + "-" + index}>
                                {headerGroup.headers.map((header, index) => {
                                    return (
                                        <TableHead
                                            key={header.id + "-" + index}
                                            style={{
                                                ...getCommonPinningStyles(
                                                    header.column
                                                ),
                                            }}
                                            className="whitespace-nowrap"
                                        >
                                            <div
                                                className={cn(
                                                    "h-full flex flex-col gap-5 justify-between",
                                                    getClassNames(header.column, columnPinning)
                                                )}
                                            >
                                                <div>
                                                    {header.isPlaceholder
                                                        ? null
                                                        : flexRender(
                                                              header.column.columnDef.header,
                                                              header.getContext()
                                                          )}{" "}
                                                </div>
                                            </div>
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row, index) => (
                                <TableRow
                                    key={row.id + "-" + index}
                                    data-state={
                                        row.getIsSelected() && "selected"
                                    }
                                >
                                    {row
                                        .getVisibleCells()
                                        .map((cell, index) => (
                                            <TableCell
                                                key={cell.id + "-" + index}
                                                style={{
                                                    ...getCommonPinningStyles(
                                                        cell.column
                                                    ),
                                                }}
                                            >
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </TableCell>
                                        ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    Aucun résultat
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <TablePagination table={table} />
            {/* {JSON.stringify(table.getFilteredSelectedRowModel().rows.map((row) => row.getValue("link")))} */}
        </div>
    );
}
