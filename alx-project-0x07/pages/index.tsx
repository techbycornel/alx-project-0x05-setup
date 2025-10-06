import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <Head>
        <title>HookMastery | ALX Project 0x07</title>
      </Head>
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        HookMastery: Unleashing the Power of Hooks
      </h1>
      <p className="text-gray-500">ALX Project 0x07 — Base Layout Setup</p>
    </div>
  );
}
