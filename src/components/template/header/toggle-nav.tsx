import useMenu from "@/context/menu-context"
import { cn } from "@/lib/utils"
import { PanelRightOpen } from "lucide-react"


const ToggleNav = () => {
	const {state, dispatch} = useMenu()

	const toggleMenu = () => {
		console.log("🚀 ~ toggleMenu ~ state.menu.open:", state.menu.open)
		if (state.menu.open) {
			dispatch({type: "CLOSE_MENU"})
		} else {
			dispatch({type: "OPEN_MENU"})
		}
	}

	return (
		<PanelRightOpen 
			className={cn("text-gray-500 rotate-0 transition-all duration-200",!state.menu.open && "rotate-180")} 
			size={30}
			onClick={() => toggleMenu()}/>
	)
}

export default ToggleNav