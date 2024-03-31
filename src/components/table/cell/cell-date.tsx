import dayjs from "dayjs"
import 'dayjs/locale/fr'

type Props = {
	row: any
	key?: string
	value?: any
	format?: string
}

const CellDate = ({row, key, format="DD/MM/YYYY", value}: Props) => {
	const data = key ? row.getValue(key) : value.getValue() as string 
	return dayjs(data).isValid() ? dayjs(data).format(format) : ""
}

export default CellDate