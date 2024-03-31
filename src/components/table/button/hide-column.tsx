import { Button } from "@/components/ui/button"
import { DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"

type Props = {
	column: any
}

const HideColumn = ({column}: Props) => {
	return (
		<>
			{
				column.getCanHide() ? (
					<>
						<DropdownMenuLabel>Cacher</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<Button
							variant="simple"
							onClick={() => column.toggleVisibility(false)}
							className="pl-2 text-left hover:bg-gray-100 w-36 flex justify-start text-gray-500"
						>
							Masquer la colonne
						</Button>
						<DropdownMenuSeparator />
					</>
				) : null
			}
		</>
	)
}

export default HideColumn