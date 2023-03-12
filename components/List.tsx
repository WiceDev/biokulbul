import {useRouter} from "next/router"
import React from "react"
import {Location} from "./Icons"
const {school_review} = require("./reviews.json")

interface item {
	id: number
	name: string
	location: string
	city: string
	district: string
	type: number
}

function List({popular}) {
	const router = useRouter()
	return (
		<div className="w-full flex p-5 xl:p-0 items-center justify-center mt-20">
			<div className="max-w-7xl">
				<h1 className="xl:text-5xl  text-3xl font-extrabold mb-10 ">Popüler Okullar</h1>
				<div className="gap-7 grid xl:grid-cols-4  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
					{popular.map((item: item, idx) => {
						return (
							<div
								key={idx}
								onClick={() => {
									router.push("/" + item.id)
								}}
								className=" w-full bg-white border 
              border-gray-200 rounded-lg relative shadow-lg ">
								<img className="rounded-t-lg h-2/5 w-full object-cover" src="/school.jpeg" alt="" />
								<div className="absolute top-3 right-3 rounded-full text-sm py-1 px-2 shadow-2xl bg-sky-600 text-white">
									{item.type === 1 ? "Devlet" : "Özel"}{" "}
								</div>
								<div className="p-5  h-3/5 flex flex-col justify-between">
									<p className="flex text-sm">
										<Location className="w-4 " />
										<span className="ml-1 capitalize text-gray-600 ">
											{item.city} / {item.district}
										</span>
									</p>
									<h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 line-clamp-2">{item.name}</h5>
									<div className="mb-3 font-normal text-xs text-gray-600 ">
										<h3 className="font-medium my-1">Misafir Yorumu</h3>
										{/* {school_review[idx].content} */}
									</div>
									<a
										href="#"
										className="w-fit inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-600 rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300">
										Hemen İncele
										<svg
											aria-hidden="true"
											className="w-4 h-4 ml-2 -mr-1"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg">
											<path
												fillRule="evenodd"
												d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
												clipRule="evenodd"></path>
										</svg>
									</a>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default List
