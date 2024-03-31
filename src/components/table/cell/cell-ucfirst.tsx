import { ucfirst } from "@/lib/utils"

type Props = {
	row: any
	key?: string
	value?: any
}

const CellUcfirst = ({row, key, value}: Props) => {
	const data = key ? row.getValue(key) : value.getValue() as string
	return ucfirst(data)
}

export default CellUcfirst