import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getRelatedArticles } from '@/data/allBlogPosts';
import { translateReadTimeToFr } from '@/data/blogI18n';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} - Insurial`,
    description: post.excerpt
  };
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  const related = getRelatedArticles(post.slug, post.category, 3);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-sm text-gray-500 mb-3">
            <Link href="/blog" className="hover:text-[#1E3A8A]">← Retour au blog</Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-archivo-black text-gray-900 mb-3">{post.title}</h1>
          <div className="text-gray-600 text-sm">
            <span>{formatDate(post.publishedAt)}</span>
            <span className="mx-2">•</span>
            <span>{translateReadTimeToFr(post.readTime)}</span>
            <span className="mx-2">•</span>
            <span>Par {post.author}</span>
          </div>
        </div>
      </section>

      <article className="container mx-auto px-4 max-w-3xl py-12">
        <div
          className="article-content"
          style={{ color: '#111827', opacity: 1 }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 p-6 rounded-xl border bg-blue-50 border-blue-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Envie d’un aperçu rapide ?</h3>
          <p className="text-gray-700 mb-4">Complétez votre questionnaire en quelques minutes. Sans obligation.</p>
          <Link href="/questionnaire" className="inline-block bg-[#1E3A8A] text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors">Commencer mon questionnaire</Link>
        </div>

        {related.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Pour aller plus loin</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map(r => (
                <div key={r.slug} className="border rounded-xl p-4 hover:shadow-sm transition-shadow">
                  <div className="text-sm text-gray-500 mb-1">{formatDate(r.publishedAt)}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    <Link href={`/blog/${r.slug}`} className="hover:text-[#1E3A8A]">{r.title}</Link>
                  </h4>
                  <p className="text-sm text-gray-600">{r.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
