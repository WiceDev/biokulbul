import React, {useState} from "react"
import SelectBox from "./CitySelect"
const ilceler = require("../ilceler.json")
function Filter() {
	const data = Object.keys(ilceler)
	const [city, setCity] = useState(null)
	const [district, setDistrict] = useState(null)
	React.useEffect(() => {
		console.log(data[Object.keys(data)[city]])
	}, [city])

	return (
		<div className="max-w-7xl w-full mt-10">
			<div className="relative bg-white shadow-md">
				<div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
					<div className="w-full md:w-1/2">
						<form className="flex items-center">
							<label htmlFor="simple-search" className="sr-only">
								Search
							</label>
							<div className="relative w-full">
								<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
									<svg
										aria-hidden="true"
										className="w-5 h-5 text-gray-500 "
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg">
										<path
											fill-rule="evenodd"
											d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
											clip-rule="evenodd"
										/>
									</svg>
								</div>
								<input
									type="text"
									id="simple-search"
									className="block w-full p-2 pl-10 text-sm border rounded-lg focus:outline outline-gray-500"
									placeholder="Search"
								/>
							</div>
						</form>
					</div>
					<SelectBox options={data} selected={city} setSelected={setCity} />
					{/* <SelectBox options={Object.keys(data)[city]} selected={district} setSelected={setDistrict} /> */}
					<div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
						<div className="flex items-center w-full space-x-3 md:w-auto">
							<button
								type="button"
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
