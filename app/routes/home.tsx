import type { Route } from "./+types/home";
import { Welcome } from "../content/welcome/welcome";
import MainLayout from "~/layout/mainLayout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Team Voodoo Boxing | Peter "Voodoo Pete" Latorre' },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <MainLayout>
      <Welcome />
    </MainLayout>
  );
}
