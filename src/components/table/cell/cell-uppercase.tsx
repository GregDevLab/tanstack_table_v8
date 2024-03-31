
type Props = {
	row: any
	key?: string
	value?: any
}

const CellUppercase = ({row, key, value}: Props) => {
	const data = key ? row.getValue(key) : value.getValue() as string
	return data?.toUpperCase()
}

export default CellUppercase