import { type ClassValue, clsx } from "clsx"
import dayjs from "dayjs"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const ucfirst = (str: string) => {
	if(!str) return str
	return str.charAt(0).toUpperCase() + str.slice(1)
}

export const calculateAge = (birthDate: string) => {
	const maintenant = dayjs();
	const naissance = dayjs(birthDate);
	let age = maintenant.diff(naissance, 'year');
	
	if (maintenant.month() < naissance.month() || (maintenant.month() === naissance.month() && maintenant.date() < naissance.date())) {
		age--;
	}

	return age;
}

export const sortByDate = (data:{key:string, dir?:"ASC" | "DESC"}) => (a: any, b: any) => {
	if(data.dir === "ASC") {
		return dayjs(a[data.key]).unix() - dayjs(b[data.key]).unix()
	}
	return dayjs(b[data.key]).unix() - dayjs(a[data.key]).unix()
}