import React from "react"

function school({school}) {
	return (
		<div className="w-full flex items-center justify-center">
			<div className="max-w-7xl w-full pt-10">
				<h1 className="text-2xl font-semibold">{school.name}</h1>
				<div className="flex">
					<div className="">
						<div className="font-semibold">Okul Saatleri</div>
						{school.hours.start} / {school.hours.end}
					</div>
				</div>
			</div>
		</div>
	)
}

export default school

export async function getServerSideProps(context) {
	const res = await fetch("http://localhost:3000/api/" + context.query.school)
	const data = await res.json()
	return {
		props: {
			school: data,
		},
	}
}
