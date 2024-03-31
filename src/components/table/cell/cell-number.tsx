
interface Props {
	row: any
	key?: string
	value?: any
}

const CellNumber = ({row,key, value}: Props) => {
	const data = key ? row.getValue(key) : value.getValue() as string
	if(!data) return ""
	return Number(data) 
}

export default CellNumber