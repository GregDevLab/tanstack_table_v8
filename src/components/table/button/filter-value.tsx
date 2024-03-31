import Filter from "@/components/table/filter/filter"
import { DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"

type Props = {
	column: any
}

const FilterValue = ({column}: Props) => {
	return (
		<>
			{column.getCanFilter() ? (
				<>
					<DropdownMenuLabel>Filtrer</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<Filter column={column}/>
				</>
				) : null
			}
		</>
	)
}

export default FilterValue