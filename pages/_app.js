import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import "@/styles/globals.css"

export default function App({Component, pageProps}) {
	return (
		<>
			<Header />
			<Hero />
			<Component {...pageProps} />
			<Footer />
		</>
	)
}
