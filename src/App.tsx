import { columns } from "@/components/table/columns/columns-users"
import { DataTable } from "@/components/table/data-table"
import Header from "@/components/template/header/header"
import ToggleNav from "@/components/template/header/toggle-nav"
import SideNav from "@/components/template/side-nav/side-nav"
import useMenu from "@/context/menu-context"
import { users } from "@/datas/users"
import { cn } from "@/lib/utils"



const App = () => {
	const {state} = useMenu()
	const isOpenMenu = state.menu.open
	return (

		<div className="flex  h-screen">
			<SideNav>
				<div className="h-full">
					SideNav
				</div>
			</SideNav>
			<div className="w-full flex flex-col">
				<Header>
					<ToggleNav />
				</Header>
				<div className={cn("w-full h-full p-2 overflow-hidden transition-all duration-200",isOpenMenu ? "menu-open" : "menu-closed")}>
					<div className={cn("max-h-full relative overflow-scroll hide-scrollbar")}>
						<DataTable 
							defaultColumns={columns} 
							data={users} 
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
