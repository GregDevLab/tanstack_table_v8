import DebouncedInput from "@/components/table/filter/debounce-input"

type Props = {
	column: any
	columnFilterValue: [number, number]
}

const NumberFilter = ({column, columnFilterValue}: Props) => {
	return (
		<div>
			<div className="flex space-x-2">
				<DebouncedInput
					type="number"
					min={0}
					value={columnFilterValue?.[0] ?? ""}
					onChange={(value) =>
						column.setFilterValue((old: [number, number]) => [
							value,
							old?.[1],
						])
					}
					placeholder={`Min ${
						column.getFacetedMinMaxValues()?.[0]
							? `(${column.getFacetedMinMaxValues()?.[0]})`
							: ""
					}`}
					className="w-24 border-0 rounded"
				/>
				<DebouncedInput
					type="number"
					min={0}
					value={columnFilterValue?.[1] ?? ""}
					onChange={(value) =>
						column.setFilterValue((old: [number, number]) => [
							old?.[0],
							value,
						])
					}
					placeholder={`Max ${
						column.getFacetedMinMaxValues()?.[1]
							? `(${column.getFacetedMinMaxValues()?.[1]})`
							: ""
					}`}
					className="w-24 border-0 rounded"
				/>
			</div>
			<div className="h-1" />
		</div>
	)
}

export default NumberFilter