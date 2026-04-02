export default function BentoBox() {
	return (
		<div className="px-4 py-8 md:px-8 md:py-12">
			<section
				id="team"
				className="mx-auto grid max-w-7xl grid-cols-1 gap-3 md:grid-cols-3 md:grid-rows-2">
				<BentoBoxInfoCard
					eyebrow="Service"
					title="United States Marine Corps Infantry Veteran"
					value="A foundation built on resilience, accountability, discipline, and performance when the pressure is highest."
					colSpan={2}
					rowSpan={1}
					valueClass="text-gray-200"
					background={BentoPatterns.stitch}
				/>

				<BentoBoxInfoCard
					eyebrow="Instruction"
					title="NRA Certified Firearms Instructor"
					value="Professional instruction rooted in safety, responsibility, technical skill, and real-world experience."
					colSpan={1}
					rowSpan={1}
					valueClass="text-gray-200"
					background={BentoPatterns.fabric}
				/>

				<BentoBoxInfoCard
					eyebrow="Leadership"
					title="President, Hofstra Student Veterans Association"
					value="Leading by example through advocacy, representation, and a commitment to building strong communities."
					colSpan={1}
					rowSpan={1}
					valueClass="text-gray-200"
					background={BentoPatterns.burlap}
				/>

				<BentoBoxInfoCard
					eyebrow="Mission"
					title="Clinical Rehabilitation in Mental Health Counseling, MS"
					value="A purpose that extends beyond competition through mental health leadership, growth, service, and impact."
					colSpan={2}
					rowSpan={1}
					valueClass="text-gray-200"
					background={BentoPatterns.fabric}
				/>
			</section>
		</div>
	);
}

interface BentoBoxCardProps {
	eyebrow?: string;
	title?: number | string;
	value?: number | string;
	valueClass?: string;
	colSpan: number;
	rowSpan: number;
	background: BentoPatterns;
}

enum BentoPatterns {
	burlap = "burlap-hypnotism",
	fabric = "fabric",
	stitch = "stitched",
}

function getSpanClasses(col: number, row: number) {
	const colMap: Record<number, string> = {
		1: "md:col-span-1",
		2: "md:col-span-2",
		3: "md:col-span-3",
	};

	const rowMap: Record<number, string> = {
		1: "md:row-span-1",
		2: "md:row-span-2",
		3: "md:row-span-3",
	};

	return `${colMap[col]} ${rowMap[row]}`;
}

function BentoBoxStatCard({
	eyebrow,
	title,
	value,
	valueClass,
	colSpan,
	rowSpan,
	background,
}: BentoBoxCardProps) {
	return (
		<div
			className={`${getSpanClasses(colSpan, rowSpan)} stat-card-bg shadow voodoo-pulse relative flex min-h-[220px] flex-col items-center justify-center overflow-hidden rounded-2xl p-8 text-center`}>
			{eyebrow ? (
				<p className="z-10 mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-400">
					{eyebrow}
				</p>
			) : null}

			{(title || title === 0) && (
				<h3 className="z-10 text-5xl font-bold tracking-tight text-[var(--voodoo-white)] md:text-6xl">
					{title}
				</h3>
			)}

			{value && (
				<span
					className={`z-10 mt-3 text-sm font-semibold uppercase tracking-[0.2em] ${valueClass}`}>
					{value}
				</span>
			)}

			<div className={background}></div>
			<div className="stat-card-vignette"></div>
		</div>
	);
}

function BentoBoxInfoCard({
	eyebrow,
	title,
	value,
	valueClass,
	colSpan,
	rowSpan,
	background,
}: BentoBoxCardProps) {
	return (
		<div
			className={`${getSpanClasses(colSpan, rowSpan)} stat-card-bg shadow voodoo-pulse relative flex min-h-[240px] flex-col overflow-hidden rounded-2xl p-8 sm:p-10`}>
			{eyebrow ? (
				<p className="z-10 text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-400">
					{eyebrow}
				</p>
			) : null}

			{title || title === 0 ? (
				<h3 className="z-10 mt-3 text-2xl font-bold leading-tight tracking-tight text-[var(--voodoo-white)]">
					{title}
				</h3>
			) : null}

			{value && (
				<span
					className={`z-10 mt-4 max-w-xl text-sm leading-7 ${valueClass ?? "text-gray-200"}`}>
					{value}
				</span>
			)}

			<div className={background}></div>
			<div className="stat-card-vignette"></div>
		</div>
	);
}
