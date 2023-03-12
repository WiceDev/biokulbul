const {schools} = require("../../filtered.json")
const TrToEn = (text) => {
	return text
		.replaceAll("Ğ", "g")
		.replaceAll("Ü", "u")
		.replaceAll("Ş", "s")
		.replaceAll("I", "i")
		.replaceAll("İ", "i")
		.replaceAll("Ö", "o")
		.replaceAll("Ç", "c")
		.replaceAll("ğ", "g")
		.replaceAll("ü", "u")
		.replaceAll("ş", "s")
		.replaceAll("ı", "i")
		.replaceAll("ö", "o")
		.replaceAll("ç", "c")
}
export default (req, res) => {
	let data = schools
	const {city, district, type, level} = req.query
	if (city) {
		data = schools.filter((school) => school.city === city)
	}
	if (district) {
		data = data.filter((school) => {
			return TrToEn(school.district) === district
		})
	}
	if (level) {
		data = data.filter((school) => school.level === +level)
	}

	if (type) {
		data = data.filter((school) => school.type === +type)
	}

	res.status(200).json(data)
}
