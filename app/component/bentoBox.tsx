export default function BentoBox() {
	return (
		<div className="p-4 md:p-8">
			<section className="grid grid-cols-1 grid-rows-5 md:grid-cols-3 md:grid-rows-1 gap-2">
				<BentoBoxStatCard
					title={5}
					value="KOs"
					colSpan={1}
					rowSpan={2}
					valueClass="text-[var(--voodoo-purple)]"
					background={bentoPatterns.burlap}
				/>
				<BentoBoxStatCard
					title={5}
					value="Wins"
					colSpan={1}
					rowSpan={2}
					valueClass="text-green-500"
					background={bentoPatterns.fabric}
				/>
				<BentoBoxStatCard
					title={0}
					value="Losses"
					colSpan={1}
					rowSpan={1}
					valueClass="text-[var(--voodoo-white)]"
					background={bentoPatterns.stitch}
				/>
				<BentoBoxInfoCard
					title={"Professional Boxer, USMC Infantry Veteran, Graduate Student"}
					value="Something something something..."
					colSpan={2}
					rowSpan={1}
					valueClass="text-gray-300"
					background={bentoPatterns.fabric}
				/>
				<BentoBoxInfoCard
					title={"Core Value or something"}
					value="Something something something, Something something something, Something something something..."
					colSpan={1}
					rowSpan={1}
					valueClass="text-gray-300"
					background={bentoPatterns.burlap}
				/>
			</section>
		</div>
	);
}

interface BentoBoxCardProps {
	title?: number | string;
	value?: number | string;
	valueClass?: string;
	colSpan: number;
	rowSpan: number;
	background: bentoPatterns;
}

enum bentoPatterns {
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
	title,
	value,
	valueClass,
	colSpan,
	rowSpan,
	background,
}: BentoBoxCardProps) {
	return (
		<div
			className={`p-8 sm:p-12 lg:p-24 rounded-2xl ${getSpanClasses(colSpan, rowSpan)} flex flex-col justify-center items-center stat-card-bg shadow voodoo-pulse hover:bg-zinc-900/15`}>
			{(title || title === 0) && (
				<h3 className="text-5xl font-bold text-[var(--voodoo-white)] z-1">{title}</h3>
			)}
			{value && <span className={`text-xl font-bold z-1 ${valueClass}`}>{value}</span>}
			<div className={background}></div>
			<div className="stat-card-vignette"></div>
		</div>
	);
}

function BentoBoxInfoCard({
	title,
	value,
	valueClass,
	colSpan,
	rowSpan,
	background,
}: BentoBoxCardProps) {
	return (
		<div
			className={`p-8 sm:p-12 lg:p-16 rounded-2xl ${getSpanClasses(colSpan, rowSpan)} flex flex-col stat-card-bg shadow voodoo-pulse hover:bg-zinc-900/15`}>
			{(title || title === 0) && (
				<h3 className="text-2xl font-bold text-[var(--voodoo-white)] z-1">{title}</h3>
			)}
			{value && <span className={`text-sm z-1 ${valueClass}`}>{value}</span>}
			<div className={background}></div>
			<div className="stat-card-vignette"></div>
		</div>
	);
}
