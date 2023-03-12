import List from "@/components/List"
import React from "react"

function search({schools, url}) {
	return (
		<div>
			<List popular={schools} />
		</div>
	)
}

export default search

export async function getServerSideProps(context) {
	const url = `http://localhost:3000/api?city=${context.query.city}&district=${context.query.district}`
	const res = await fetch(url)
	const data = await res.json()

	return {
		props: {
			schools: data,
			url,
		},
	}
}
