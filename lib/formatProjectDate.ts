type ProjectDateFormat = 'year' | 'month-year'

export const formatProjectDate = (date: string, format: ProjectDateFormat = 'year') => {
	const [year, month] = date.split('-')

	if (format === 'year') return year

	if (format === 'month-year') {
		return new Date(Number(year), Number(month) - 1).toLocaleDateString('en-US', {
			month: 'short',
			year: 'numeric'
		})
	}

	throw new Error('Invalid date format')
}
