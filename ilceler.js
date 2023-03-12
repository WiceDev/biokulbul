const {schools} = require("./data.json")
const fs = require("fs")
const ilceler = {
	ankara: [],
	istanbul: [],
	izmir: [],
}
schools.forEach((school) => {
	if (school.okulil.toLocaleLowerCase("tr") == "ankara") {
		ilceler.ankara.push(school.okulilce.toLocaleLowerCase("tr"))
	} else if (school.okulil.toLocaleLowerCase("tr") == "istanbul") {
		ilceler.istanbul.push(school.okulilce.toLocaleLowerCase("tr"))
	} else if (school.okulil.toLocaleLowerCase("tr") == "izmir") {
		ilceler.izmir.push(school.okulilce.toLocaleLowerCase("tr"))
	}
})

Object.keys(ilceler).forEach((ilce) => {
	ilceler[ilce] = [...new Set(ilceler[ilce])]
})
console.log(ilceler)
fs.writeFileSync("./ilceler.json", JSON.stringify(ilceler))
