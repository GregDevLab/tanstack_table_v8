import { ExtendedColumnDef } from "@/components/table/columns/columns-users";
import DateFilter from "@/components/table/filter/date-filter";
import NumberFilter from "@/components/table/filter/number-filter";
import TextFilter from "@/components/table/filter/text-filter";
import { Column } from "@tanstack/react-table";

interface Props {
	column: Column<any, unknown>;
}

const componentMap = {
	date: DateFilter,
	number: NumberFilter,
	text: TextFilter,
};

const Filter = ({column}: Props) => {

	const filterType = (column.columnDef as ExtendedColumnDef).filterType || "text";
    const columnFilterValue = column.getFilterValue() as any;
	
	const Component = componentMap[filterType]

	return (
		<div className="py-0">
			<Component column={column} columnFilterValue={columnFilterValue} />
		</div>
	);
}

export default Filter;
