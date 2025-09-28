import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home | ALX Project 2</title>
        <meta name="description" content="Home page for ALX Project 2." />
      </Head>
      <main className="mx-auto flex max-w-3xl flex-col gap-4 px-4 py-16 text-center">
        <h1 className="text-4xl font-semibold text-gray-900">Home Page</h1>
        <p className="text-lg text-gray-700">
          Welcome to the home page. Use the header navigation to explore more.
        </p>
      </main>
    </>
  );
}
