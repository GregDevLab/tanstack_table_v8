import { createContext, useContext, useReducer } from "react"


interface IState {
	menu: {
		open: boolean
	}
}

interface MenuContextType {
	state: IState
	dispatch: (data: any) => void
}

const INITIAL_STATE:IState = {
	menu: {
		open: true,
	},
}

const reducer = (state: IState, action: any) => {
	switch (action.type) {
		case "OPEN_MENU":
			return {...state,menu: {open: true,}}
		case "CLOSE_MENU":
			return {...state,menu: {open: false}}
		default:
			return state
	}
}



const MenuContext = createContext<MenuContextType>({state: INITIAL_STATE, dispatch: () => {}})

const MenuProvider = ({children}:{children: React.ReactNode}) => {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE)


	return (
		<MenuContext.Provider value={{state, dispatch}}>
			{children}
		</MenuContext.Provider>
	)
}

export { MenuContext, MenuProvider }

const useMenu = () => {
	const context = useContext(MenuContext)
	if (!context) {
		throw new Error("useMenu must be used within a MenuProvider")
	}
	return context
}

export default useMenu