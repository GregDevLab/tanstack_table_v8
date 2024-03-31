
import FilterValue from "@/components/table/button/filter-value"
import HideColumn from "@/components/table/button/hide-column"
import PinColumn from "@/components/table/button/pin-column"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ucfirst } from "@/lib/utils"
import { Ellipsis } from "lucide-react"

type Props = {
	column: any
	title: string
	table?: any
}

const HeaderColumn = ({column, title}: Props) => {

		const formatedTitle =  title === title.toLowerCase() ? ucfirst(title) : title
		return (
			<div className="flex gap-2 items-center justify-between">
				<p
					className="p-0"
				>
					{formatedTitle}
				</p>
				<DropdownMenu>
					<DropdownMenuTrigger>
						<Ellipsis />
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<PinColumn column={column}/>
						<HideColumn column={column}/>
						<FilterValue column={column}/>
					</DropdownMenuContent>
				</DropdownMenu>
				
			</div>
		)
}


export default HeaderColumn