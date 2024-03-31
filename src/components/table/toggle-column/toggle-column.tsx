import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type Props = {
	table: any
}

const ToggleColumn = ({table}: Props) => {
	// const [search, setSearch] = useState("")
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" className="ml-auto mr-1">
					Gérer la visibilité des colonnes
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="max-h-96 overflow-scroll hide-scrollbar relative mt-0 pt-0 w-[225px]">
				{table
				.getAllColumns()
				.filter(
					(column: any) => column.getCanHide && !column.getIsVisible() 
				)
				.sort((a: any, b: any) => {
					return a.id.localeCompare(b.id)
				})
				.map((column: any) => {
					return (
					<DropdownMenuCheckboxItem
						key={column.id}
						className="capitalize"
						checked={column.getIsVisible()}
						onCheckedChange={(value) =>
							column.toggleVisibility(!!value)
						}
					>
						{column?.columnDef.name}
					</DropdownMenuCheckboxItem>
					)
				})}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default ToggleColumn