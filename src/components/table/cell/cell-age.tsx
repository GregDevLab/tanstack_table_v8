import { calculateAge } from "@/lib/utils"

type Props = {
	row: any
	key: string
}

const CellAge = ({row, key}: Props) => {
	const birthday = row.getValue(key)
	const age = calculateAge(birthday)
	return Number(age) || ""
}

export default CellAge