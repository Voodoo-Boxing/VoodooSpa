import type { Route } from "./+types/home";
import MainLayout from "~/layout/mainLayout";
import Hero from "~/component/hero";
import BentoBox from "~/component/bentoBox";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Team Voodoo Boxing | Peter "Voodoo Pete" Latorre' },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function Home() {
	return (
		<MainLayout includePadding={false}>
			<Hero />
			<BentoBox />
		</MainLayout>
	);
}
