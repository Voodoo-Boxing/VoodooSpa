import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, ShoppingBagIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { NAVIGATION, SHOP_URL } from "~/lib/constants";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
	const shopIsDisabled = !SHOP_URL;

	return (
		<Disclosure
			as="nav"
			className="sticky top-0 z-50 border-b border-white/10 bg-[var(--voodoo-black)]/90 backdrop-blur-md">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="relative flex h-18 items-center justify-between">
					<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
						<DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-[var(--voodoo-purple)]">
							<span className="absolute -inset-0.5" />
							<span className="sr-only">Open main menu</span>
							<Bars3Icon
								aria-hidden="true"
								className="block size-6 group-data-open:hidden"
							/>
							<XMarkIcon
								aria-hidden="true"
								className="hidden size-6 group-data-open:block"
							/>
						</DisclosureButton>
					</div>

					<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
						<div className="flex shrink-0 items-center gap-3">
							<a href="#top" className="flex items-center gap-3">
								<img
									alt="Team Voodoo Pete Logo"
									src="/logo.png"
									className="h-12 w-auto"
								/>
								<div className="hidden sm:block">
									<p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
										Team Voodoo
									</p>
									<p className="text-base font-semibold text-white">
										Voodoo Pete
									</p>
								</div>
							</a>
						</div>

						<div className="hidden sm:flex sm:items-center">
							<div className="flex items-center space-x-2 rounded-full border border-white/10 bg-white/5 px-2 py-2">
								{NAVIGATION.map((item) => (
									<a
										key={item.name}
										href={item.href}
										aria-current={item.current ? "page" : undefined}
										className={classNames(
											item.current
												? "bg-[var(--voodoo-purple-05)] text-white shadow"
												: "text-gray-300 hover:bg-white/5 hover:text-white",
											"rounded-full px-4 py-2 text-sm font-medium transition",
										)}>
										{item.name}
									</a>
								))}
							</div>
						</div>
					</div>

					<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:ml-6 sm:pr-0">
						<a
							href={shopIsDisabled ? undefined : SHOP_URL}
							aria-disabled={shopIsDisabled}
							className={classNames(
								shopIsDisabled
									? "cursor-default text-gray-500/30"
									: "text-gray-400 hover:text-white",
								"relative rounded-full p-2 transition focus:outline-2 focus:outline-offset-2 focus:outline-[var(--voodoo-purple)]",
							)}>
							<span className="absolute -inset-1.5" />
							<span className="sr-only">Navigate to shop</span>
							<ShoppingBagIcon aria-hidden="true" className="size-6" />
						</a>
					</div>
				</div>
			</div>

			<DisclosurePanel className="border-t border-white/10 bg-[var(--voodoo-black)] sm:hidden">
				<div className="space-y-1 px-4 py-4">
					{NAVIGATION.map((item) => (
						<DisclosureButton
							key={item.name}
							as="a"
							href={item.href}
							aria-current={item.current ? "page" : undefined}
							className={classNames(
								item.current
									? "bg-[var(--voodoo-purple-05)] text-white"
									: "text-gray-300 hover:bg-white/5 hover:text-white",
								"block rounded-md px-3 py-3 text-base font-medium transition",
							)}>
							{item.name}
						</DisclosureButton>
					))}
				</div>
			</DisclosurePanel>
		</Disclosure>
	);
}
