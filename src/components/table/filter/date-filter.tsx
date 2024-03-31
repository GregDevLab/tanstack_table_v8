import DebouncedInput from "@/components/table/filter/debounce-input"


type Props = {
	column: any
	columnFilterValue: [string, string]
}

const DateFilter = ({column, columnFilterValue}: Props) => {
	return (
		<div className="flex flex-col gap-2">
			<div className="  pt-2">
				<p className="text-xs px-2 pb-1 font-semibold text-gray-500">Apres le :</p>
				<DebouncedInput
					type="date"
					value={columnFilterValue?.[0] ?? ""}
					onChange={(value) => column.setFilterValue((old: [number, number]) => [
							value,
							old?.[1],
						])}
					className="w-36 border-0 rounded-none"
				/>
			</div>
			<div className="  pt-2">
				<p className="text-xs px-2 pb-1 font-semibold text-gray-500">Avant le :</p>
				<DebouncedInput
					type="date"
					value={columnFilterValue?.[1] ?? ""}
					onChange={(value) =>
						column.setFilterValue((old: [number, number]) => [
							old?.[0],
							value,
						])}
					className="w-36 border-0 rounded-none"
				/>
			</div>

			<div className="h-1" />
		</div>
	)
}

export default DateFilter