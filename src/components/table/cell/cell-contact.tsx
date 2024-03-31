
type Props = {
	row: any
	key?: string
	type: "mail" | "phone",
	indicatif?: string
	value?: any
}

const CellContact = ({row, key, type,value, indicatif}: Props) => {
	const data = key ? row.getValue(key) : value.getValue() as string 
	const phoneIndicatif = indicatif ? indicatif : ""
	const prefix = type === "mail" ? "mailto:" : "tel:"
	const formattedData = type === "phone" ? `0${data}` : data
	return (
		<a href={`${prefix}${phoneIndicatif+data}`} className="cursor-pointer text-blue-400">{formattedData}</a>
	)
}

export default CellContact