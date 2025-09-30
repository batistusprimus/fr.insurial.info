import Link from 'next/link';
import { blogPosts } from '@/data/allBlogPosts';

export const metadata = {
  title: 'Blog - Insurial',
  description: "Clear guides on commercial insurance, trends, and risk management. Get your free Business Insurance Risk Score."
};

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function BlogIndexPage() {
  const posts = [...blogPosts].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-archivo-black text-gray-900 mb-4">Insurial Blog</h1>
          <p className="text-lg text-gray-600">Education first. Plain‑English guidance on business insurance, trends, and risk management.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-5xl py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map(post => (
            <article key={post.slug} className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="text-sm text-gray-500 mb-2">
                <span>{formatDate(post.publishedAt)}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-[#1E3A8A] transition-colors">
                  {post.title}
                </Link>
              </h2>
              <div className="text-sm text-[#1E3A8A] font-medium mb-3">{post.category}</div>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <Link href={`/blog/${post.slug}`} className="text-[#1E3A8A] hover:text-blue-800 font-semibold">
                  Read article →
                </Link>
                <div className="text-sm text-gray-500">By {post.author}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
