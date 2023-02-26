import React, {useState} from "react"
import Logo from "./Logo"
import useScroll from "./useScroll"
function Header() {
	const scroll = useScroll()
	const links = ["Anaokulu & Kreş", "İlkokul", "Ortaokul", "Lise", "Kolej"]
	const [side, setSide] = useState(true)
	return (
		<nav
			className={`flex  fixed ${
				scroll > 1 ? "bg-white text-black" : " text-white bg-transparent"
			}  z-[2000]  w-screen flex justify-center transition-all  py-3 px-5 `}>
			<div class="max-w-7xl w-full  flex flex-wrap items-center justify-between ">
				<a href="https://flowbite.com/" class="flex items-center">
					<Logo className={"h-6"} />
				</a>
				<button
					onClick={() => {
						setSide(!side)
					}}
					data-collapse-toggle="navbar-default"
					type="button"
					class="text-sky-500 block md:hidden"
					aria-controls="navbar-default"
					aria-expanded="false">
					<span class="sr-only">Open main menu</span>
					<svg
						class="w-6 h-6"
						aria-hidden="true"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fill-rule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clip-rule="evenodd"></path>
					</svg>
				</button>
				<div class="w-full md:block md:w-auto" id="navbar-default">
					<ul
						class={` ${
							side ? "flex" : "hidden"
						}   flex-col p-4 mt-4   rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium `}>
						{links.map((link) => {
							return (
								<li key={link + "1"}>
									<a
										href="#"
										class="block py-2 pl-3 pr-4 text-lg hover:text-sky-400  rounded transition-all   md:p-0 "
										aria-current="page">
										{link}
									</a>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Header
