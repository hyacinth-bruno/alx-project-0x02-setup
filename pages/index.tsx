import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome | ALX Project 2</title>
        <meta name="description" content="Starter Next.js project for ALX." />
      </Head>
      <main className="mx-auto flex max-w-3xl flex-col gap-4 px-4 py-16 text-center">
        <h1 className="text-4xl font-semibold text-gray-900">Welcome to ALX Project 2</h1>
        <p className="text-lg text-gray-700">
          Your Next.js app is ready. Start building by editing this page or adding new components.
        </p>
      </main>
    </>
  );
}