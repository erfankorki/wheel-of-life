import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wheel Of Life",
};

export default function Home() {
  return (
    <main className="h-screen w-screen flex items-center justify-center bg-neutral-900">
      <h1 className="text-2xl text-neutral-50">WHEEL OF LIFE</h1>
    </main>
  );
}
