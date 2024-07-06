import { notFound } from "next/navigation";
import { FooterLink } from "@/components/footer-link";
import { loadArticleParams } from "@/libs/load-article-params";
import { loadArticles } from "@/libs/load-articles";

export async function generateStaticParams() {
  return await loadArticleParams();
}

type Props = {
  params: { slug: string[] };
};

export async function generateMetadata({ params }: Props) {
  const slug = params.slug.pop();
  if (!slug) return notFound();

  const articles = await loadArticles();
  const mdx = articles.find((article) => article.slug === slug)?.mdx;
  if (!mdx) return notFound();

  return mdx.metadata;
}

export default async function ArticlePage({ params }: Props) {
  const slug = params.slug.pop();
  if (!slug) return notFound();

  const articles = await loadArticles();
  const currentIndex = articles.findIndex((article) => article.slug === slug);
  if (currentIndex === -1) return notFound();

  const MDX = articles[currentIndex].mdx.default;
  const prevArticle = articles[currentIndex - 1];
  const nextArticle = articles[currentIndex + 1];

  return (
    <>
      <article className="prose prose-neutral max-w-5xl break-all">
        <MDX />
      </article>
      <footer>
        <nav className="mt-16 grid grid-cols-2">
          {prevArticle ? (
            <FooterLink
              type="prev"
              href={prevArticle.href}
              title={prevArticle.mdx.metadata.title}
            />
          ) : (
            <span></span>
          )}
          {nextArticle ? (
            <FooterLink
              type="next"
              href={nextArticle.href}
              title={nextArticle.mdx.metadata.title}
            />
          ) : (
            <span></span>
          )}
        </nav>
      </footer>
    </>
  );
}
