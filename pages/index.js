import Cards from "@/components/Cards"
import Filter from "@/components/Filter"
import Hero from "@/components/Hero"
import Popular from "@/components/Popular"
import PopUp from "@/components/PopUp"
import React from "react"
import Dropdown from "./Dropdown"

function index({schools}) {
	return (
		<div className="bg-slate-100">
			<PopUp />
			<Popular popular={schools.slice(0, 20)} />
			<Cards />
		</div>
	)
}

export default index

export async function getStaticProps() {
	const res = await fetch("http://localhost:3000/api?city=istanbul")
	const data = await res.json()

	return {
		props: {
			schools: data,
		},
	}
}
