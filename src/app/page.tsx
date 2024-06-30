import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex h-screen items-center justify-center px-5">
      <div className="grid gap-8">
        <div className="text-center text-lg leading-10 tracking-widest">
          <p>
            <span className="inline-block">「Frontend Book」は、</span>
            <span className="inline-block">プログラミング未経験から</span>
          </p>
          <p>
            <span className="inline-block">
              webフロントエンドの案件を獲得するのに
            </span>
            <span className="inline-block">必要な技術を学習するための</span>
            <span className="inline-block">学習ロードマップです</span>
          </p>
        </div>
        <Link
          href="/introduction"
          className="mx-auto w-fit rounded-md bg-blue-600 px-8 py-2 font-bold text-white hover:bg-blue-800 active:bg-blue-950"
        >
          はじめる
        </Link>
      </div>
    </div>
  );
}
