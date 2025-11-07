import type { ReactNode } from "react";
import Footer from "~/component/footer";
import NavBar from "~/component/navbar";

interface LayoutProps {
	children: ReactNode;
}

export default function MainLayout({ children }: LayoutProps) {
  return (
    <main className="min-h-screen flex flex-col bg-[var(--voodoo-black)]">
      {/* Header */}
      <NavBar />

			{/* Main Content */}
			<section className="flex-1 flex justify-center align-center p-4">{children}</section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
