const {schools} = require("./data.json")
const fs = require("fs")
const filteredSchools = {
	schools: [],
}
schools.forEach((school) => {
	filteredSchools.schools.push({
		id: school.okulId,
		name: school.okulAdi,
		city: school.okulil.toLocaleLowerCase("tr"),
		district: school.okulilce.toLocaleLowerCase("tr"),
		address: school.adres,
		hours: {
			start: school.egitimBasSaati,
			end: school.egitimBitSaati,
		},
		level: +school.okulSeviyeId,
		type: +school.okulTuruId,
		phone: [school.telefon1, school.telefon2 || null],
	})
})

fs.writeFileSync("./filtered.json", JSON.stringify(filteredSchools))
