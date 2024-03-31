import HeaderColumn from "@/components/table/button/header-column";
import CellContact from "@/components/table/cell/cell-contact";
import CellDate from "@/components/table/cell/cell-date";
import CellNumber from "@/components/table/cell/cell-number";
import CellUcfirst from "@/components/table/cell/cell-ucfirst";
import CellUppercase from "@/components/table/cell/cell-uppercase";
import { Checkbox } from "@/components/ui/checkbox";
import { dateFilter } from "@/lib/filter";
import { calculateAge, sortByDate } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import dayjs from "dayjs";

export type ExtendedColumnDef = ColumnDef<any, any> & {
	name?: string;
	filterType?: "text" | "date" | "number";
};

export const columns: ExtendedColumnDef[] = [
	{
		id: "select",
		name: "select",
		header: ({ table }) => (
			<div className="h-full flex items-center pt-3">
				<Checkbox
					className="cursor-pointer mr-2 "
					checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && "indeterminate")
					}
					onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
					aria-label="Select all"
				/>
			</div>
		),
		cell: ({ row }) => (
		<Checkbox
			className="cursor-pointer mr-2"
			checked={row.getIsSelected()}
			onCheckedChange={(value) => row.toggleSelected(!!value)}
			aria-label="Select row"
		/>
		),
		enableSorting: false,
		enableHiding: false,
		enablePinning: false,
	},
	{
		accessorKey: "id",
		name: "id",
		header: ({ column }) => HeaderColumn({ column, title: "Id" }),
		cell: ({ row }) => CellNumber({ row, key: "id" }),
		filterType: "number",
		enableColumnFilter: false,
		enablePinning: false,
	},
	{
		name: "Nom",
		accessorKey: "lastName",
		header: ({ column } ) => HeaderColumn({ column, title: "Nom" }),
		cell: ({ row }) => CellUcfirst({ row, key: "lastName" }),
		filterType: "text",
	},
	{
		name: "Prénom",
		accessorKey: "firstName",
		header: ({ column } ) => HeaderColumn({ column, title: "Prénom" }),
		cell: ({ row }) => CellUcfirst({ row, key: "firstName" }),
		filterType: "text",
	},
	{
		name: "Email",
		accessorKey: "email",
		header: ({ column } ) => HeaderColumn({ column, title: "Email" }),
		cell: ({ row }) => CellUcfirst({ row, key: "email" }),
		filterType: "text",
	},
	{
		name: "Rôle",
		accessorKey: "role",
		header: ({ column } ) => HeaderColumn({ column, title: "Rôle" }),
		cell: ({ row }) => CellUppercase({ row, key: "role" }),
		filterType: "text",
	},
	{
		id: "birthday",
		name: "Date de naissance",
		accessorFn: (row) => dayjs(row.birthday),
		header: ({ column }) => HeaderColumn({ column, title: "Date de naissance" }),
		cell: ({row}) => {
			return CellDate({ row, key: "birthday" })
		},
		filterFn: dateFilter,
		filterType: "date",
	},
	{
		id: "Téléphone",
		name: "Téléphone",
		accessorFn: (row) => row.phone.number,
		header: ({ column }) => HeaderColumn({ column, title: "Téléphone" }),
		cell: (props) => {
			const indicatif = props.row.original.phone.indicatif
			return CellContact({ row: props.row, value: props, type: "phone", indicatif: indicatif })
		},
		enableSorting: false,
		filterType: "text",
	},
	{
		name: "Age",
		id: "age",
		accessorFn: (row) => calculateAge(row.birthday),
		header: ({ column }) => HeaderColumn({ column, title: "Age" }),
		cell: (props) => CellNumber({ row : props.row, value: props }),
		filterType: "number",
	},
	{
		name: "1 ere voiture",
		id: "car1",
		accessorFn: (row) => {
			const data = row.cars.sort(sortByDate({key:"buyAt", dir: "ASC"}))[0]?.brand		
			return `${data || ''}`
		},
		header: ({ column }) => HeaderColumn({ column, title: "1 ere voiture" }),
		cell: (props) => CellUcfirst({ row: props.row , value: props }),
		filterType: "text",
	},
	{
		name: "2eme voiture",
		id: "car2",
		accessorFn: (row) => {
			const data = row.cars.sort(sortByDate({key:"buyAt", dir: "DESC"}))[0]?.brand		
			return `${data || ''}`
		},
		header: ({ column }) => HeaderColumn({ column, title: "2eme voiture" }),
		cell: (props) => CellUcfirst({ row: props.row , value: props }),
		filterType: "text",
	},
];