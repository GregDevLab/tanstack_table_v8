import { Button } from "@/components/ui/button"
import { DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"

type Props = {
	column: any
}

const PinColumn = ({column}: Props) => {
	return (
		<>
		{
			column.getCanPin() ? (
				<div className="flex flex-col gap-1">
					<div>
						<DropdownMenuLabel>Epingler</DropdownMenuLabel>
						<DropdownMenuSeparator />
					</div>
					<div className="flex flex-col">
						{column.getIsPinned() !==
						"left" ? (
							<Button
								variant="simple"
								onClick={() => column.pin("left")}
								className="pl-2 text-left hover:bg-gray-100 w-36 flex justify-start text-gray-500"
							>
								Attacher a gauche
							</Button>
						) : null}
						{column.getIsPinned() ? (
							<Button
								variant="simple"
								onClick={() => column.pin(false)}
								className="pl-2 text-left hover:bg-gray-100 w-36 flex justify-start text-gray-500">
									Détacher
								</Button>
						) : null}
						{column.getIsPinned() !==
						"right" ? (
							<Button
								variant="simple"
								onClick={() => column.pin("right")}
								className="pl-2 text-left hover:bg-gray-100 w-36 flex justify-start text-gray-500">
									Attacher a droite
							</Button>
						) : null}
					</div>
					<DropdownMenuSeparator />
				</div>
			) : null
		}
		</>
	)
}

export default PinColumn