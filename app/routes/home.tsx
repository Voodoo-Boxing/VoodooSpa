import type { Route } from "./+types/home";
import MainLayout from "~/layout/mainLayout";
import Hero from "~/component/hero";
import BentoBox from "~/component/bentoBox";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Team Voodoo Boxing | Peter "Voodoo Pete" Latorre' },
		{
			name: "description",
			content: 'Official website for Team Voodoo Boxing | Peter "Voodoo Pete" Latorre.',
		},
	];
}

export default function Home() {
	return (
		<MainLayout includePadding={false}>
			<Hero />
			<BentoBox />

			<section id="calendar" className="px-4 py-8 md:px-8 md:py-12">
				<div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow">
					<div className="max-w-3xl">
						<p className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-400">
							Calendar
						</p>
						<h2 className="mt-3 text-3xl font-bold text-white">
							Upcoming Fights, Appearances, and Events
						</h2>
						<p className="mt-4 text-sm leading-7 text-gray-300">
							Stay locked in for upcoming fight announcements, team appearances,
							public events, and media opportunities involving Voodoo Pete and Team
							Voodoo.
						</p>
						<div className="mt-6 inline-flex rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-gray-200">
							Official scheduling updates coming soon
						</div>
					</div>
				</div>
			</section>

			<section id="sponsorship" className="px-4 pb-12 md:px-8 md:pb-16">
				<div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[1.1fr_0.9fr]">
					<div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow">
						<p className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-400">
							Sponsorship Inquiries
						</p>
						<h2 className="mt-3 text-3xl font-bold text-white">
							Partner With Team Voodoo
						</h2>
						<p className="mt-4 max-w-2xl text-sm leading-7 text-gray-300">
							Team Voodoo offers partnership opportunities for brands seeking
							alignment with discipline, performance, resilience, leadership, and
							community presence. Sponsorship opportunities may include event
							promotion, apparel/gear visibility, digital exposure, and select
							campaign collaboration.
						</p>

						<div className="mt-8 grid gap-3 sm:grid-cols-3">
							<div className="rounded-2xl border border-white/10 bg-black/20 p-5">
								<p className="text-sm font-semibold text-white">Silver</p>
								<p className="mt-2 text-sm text-gray-400">
									Entry-level brand visibility and promotional recognition.
								</p>
							</div>
							<div className="rounded-2xl border border-white/10 bg-black/20 p-5">
								<p className="text-sm font-semibold text-white">Gold</p>
								<p className="mt-2 text-sm text-gray-400">
									Expanded featured presence and stronger campaign alignment.
								</p>
							</div>
							<div className="rounded-2xl border border-white/10 bg-black/20 p-5">
								<p className="text-sm font-semibold text-white">Platinum</p>
								<p className="mt-2 text-sm text-gray-400">
									Top-tier partnership visibility for premier opportunities.
								</p>
							</div>
						</div>
					</div>

					<div className="rounded-3xl border border-white/10 bg-[var(--voodoo-purple-05)] p-8 shadow">
						<p className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-400">
							Contact
						</p>
						<h3 className="mt-3 text-2xl font-bold text-white">
							Ready to work with Team Voodoo?
						</h3>
						<p className="mt-4 text-sm leading-7 text-gray-300">
							Use this section for management contact details, partnership inquiries,
							media requests, or event booking.
						</p>

						<div className="mt-8 space-y-4">
							<div className="rounded-2xl border border-white/10 bg-black/20 p-4">
								<p className="text-xs uppercase tracking-[0.2em] text-gray-400">
									Email
								</p>
								<p className="mt-2 text-sm font-medium text-white">
									contact@teamvoodooboxing.com
								</p>
							</div>

							<div className="rounded-2xl border border-white/10 bg-black/20 p-4">
								<p className="text-xs uppercase tracking-[0.2em] text-gray-400">
									Inquiries
								</p>
								<p className="mt-2 text-sm font-medium text-white">
									Sponsorships • Events • Media • Partnerships
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</MainLayout>
	);
}
