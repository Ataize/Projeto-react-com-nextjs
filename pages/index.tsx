import Link from "next/link";

export default function Home() {
  const postSlug = "criando-uma-aplicacao";
  return (
    <div>
      <h1>Hello</h1>
      <Link href={`/blog/${postSlug}?id=1`}>Link para o Post</Link>
    </div>
  );
}
