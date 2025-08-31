import { FOOTER_NAVIGATION } from "~/lib/constants";

export default function Footer() {
  return (
    <footer className="shadow-sm border-t border-solid border-(--voodoo-white-1)">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex md:flex-row items-center justify-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src="/logo.png" className="h-20" alt="Team Voodoo Pete Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Team Voodoo Pete
            </span>
          </a>
          <ul className="flex flex-wrap flex-col md:flex-row gap-4 items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400">
            {FOOTER_NAVIGATION.map((item, index) => {
              return (
                <li key={index} className="flex">
                  <a
                    href={item.href}
                    className="text-gray-300 rounded-md px-3 py-2 text-sm font-medium hover:bg-white/5 hover:text-white"
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto border-(--voodoo-white-1) lg:my-8" />
        <span className="block text-sm sm:text-center text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Team Voodoo Pete™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
