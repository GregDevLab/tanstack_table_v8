import { MenuProvider } from "@/context/menu-context"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<MenuProvider>
			<App />
		</MenuProvider>
	</React.StrictMode>,
)
