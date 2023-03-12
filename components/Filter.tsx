import {useRouter} from "next/router"
import React, {useState} from "react"
import SelectBox from "./CitySelect"
import {TrToEn} from "@/utils/trtoen"
const ilceler = require("../ilceler.json")

function Filter() {
	const [city, setCity] = useState("istanbul")
	const [district, setDistrict] = useState(ilceler[city][0])
	const router = useRouter()
	React.useEffect(() => {
		setDistrict(ilceler[city][0])
	}, [city])

	return (
		<div className="max-w-7xl w-full mt-10">
			<div className="relative bg-white shadow-md">
				<div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
					{/* <form className="flex items-center">
							<label htmlFor="simple-search" className="sr-only">
								Search
							</label>
							<div className="relative w-full">
								<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
								
								</div>
								<input
									type="text"
									id="simple-search"
									className="block w-full p-2 pl-10 text-sm border rounded-lg focus:outline outline-gray-500"
									placeholder="Search"
								/>
							</div>
						</form> */}
					<SelectBox setSelected={setCity} selected={city} options={Object.keys(ilceler)} />
					<SelectBox setSelected={setDistrict} selected={district} options={ilceler[city]} />

					<div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
						<div className="flex items-center w-full space-x-3 md:w-auto">
							<button
								type="button"
								onClick={() => {
									router.push(`/search?city=${TrToEn(city)}&district=${TrToEn(district)}`)
								}}
								className="flex items-center justify-center w-full  px-6 py-2 text-sm font-medium text-white  bg-sky-400 rounded-full dark:hover:bg-sky-900 ">
								Ara
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Filter
