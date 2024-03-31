
type Props = {
	row: any
	key?: string
	value?: any
}

const CellEuro = ({row, key, value}: Props) => {

	const amount = key ? parseFloat(row.getValue(key)) : parseFloat(value.getValue()) as number
	const formatted = new Intl.NumberFormat("fr-FR", {
		style: "currency",
		currency: "EUR",
	}).format(amount)

	return <div className="text-right font-medium">{formatted}</div>
}

export default CellEuro