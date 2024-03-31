import { ExtendedColumnDef } from "@/components/table/columns/columns-users"
import DebouncedInput from "@/components/table/filter/debounce-input"

type Props = {
	column: any
	columnFilterValue: string
}

const TextFilter = ({column,columnFilterValue}: Props) => {
	return (
		<div>
            <DebouncedInput
                type="text"
                value={columnFilterValue ?? ""}
                onChange={(value) => column.setFilterValue(value)}
                placeholder={`${(column.columnDef as ExtendedColumnDef).name}`}
                className="w-36 border-0 outline-0 px-1 py-2"
                list={column.id + "list"}
            />
            <div className="h-1" />
        </div>
	)
}

export default TextFilter