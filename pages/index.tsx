import Head from "next/head";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome | ALX Project 2</title>
        <meta name="description" content="Starter Next.js project for ALX." />
      </Head>
      <Header />
      <main className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to ALX Project 2</h1>
        <p className="text-lg text-gray-600">
          This Next.js app is configured with TypeScript, ESLint, and Tailwind CSS. Start building by editing
          <code className="ml-2 rounded bg-gray-100 px-2 py-1 font-mono text-sm text-gray-800">pages/index.tsx</code>.
        </p>
      </main>
    </>
  );
}
