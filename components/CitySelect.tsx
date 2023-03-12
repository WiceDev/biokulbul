import React, {useState} from "react"

function SelectBox({selected, setSelected, options}) {
	const [box, setBox] = useState(false)

	return (
		<div className="relative select-none">
			<button
				onClick={() => {
					setBox(!box)
				}}
				id="actionsDropdownButton"
				data-dropdown-toggle="actionsDropdown"
				className="w-full px-4 py-2  font-medium whitespace-nowrap min-w-[200px] text-gray-800 text-left capitalize  bg-white rounded-full border hover:bg-gray-200"
				type="button">
				<svg
					className="absolute right-5 w-5 h-5"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true">
					<path
						clip-rule="evenodd"
						fill-rule="evenodd"
						d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
					/>
				</svg>
				{options[selected]}
			</button>
			<div className="absolute bg-white w-full rounded-xl overflow-hidden ">
				{options &&
					box &&
					options.map((option, i) => {
						return (
							<div
								className={`${
									selected == i && "bg-sky-500 text-white capitalize "
								}  border-b border-gray-200 cursor-pointer px-3 capitalize py-2 last:border-none`}
								onClick={() => {
									setBox(false)
									setSelected(i)
								}}>
								{option}
							</div>
						)
					})}
			</div>
		</div>
	)
}

export default SelectBox
