import type { ReactNode } from "react";
import Footer from "~/component/footer";
import NavBar from "~/component/navbar";

interface LayoutProps {
	children: ReactNode;
	includePadding?: boolean;
}

export default function MainLayout({ children, includePadding = true }: LayoutProps) {
	return (
		<main className="min-h-screen bg-[var(--voodoo-black)] text-white">
			<NavBar />

			<section
				className={`flex min-h-[calc(100vh-72px)] flex-col ${includePadding ? "p-4" : ""}`}>
				{children}
			</section>

			<Footer />
		</main>
	);
}
