import clsx from "clsx"
import React from 'react'

type Props = {
	children: React.ReactNode
	className?: string
}

const Header = ({children, className}: Props) => {
	return (
		<header className={clsx("p-5 bg-white shadow-md", className)}>
			{children}
		</header>
	)
}

export default Header