import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | ALX Project 2</title>
        <meta name="description" content="About page for ALX Project 2." />
      </Head>
      <main className="mx-auto flex max-w-3xl flex-col gap-4 px-4 py-16 text-center">
        <h1 className="text-4xl font-semibold text-gray-900">About Us</h1>
        <p className="text-lg text-gray-700">
          Learn more about this project and the ideas behind it on this page.
        </p>
      </main>
    </>
  );
}
