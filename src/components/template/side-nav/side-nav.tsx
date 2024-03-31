import useMenu from "@/context/menu-context"
import { cn } from "@/lib/utils"

type Props = {
	children: React.ReactNode
}

const SideNav = ({children}: Props) => {
	const {state} = useMenu()
	const isOpen = state.menu.open
	return (
		<aside className={cn("grow p-5 px-10 w-40 bg-red-500 transition-all duration-200",!isOpen && "w-0" )}>
			{children}
		</aside>
	)
}

export default SideNav