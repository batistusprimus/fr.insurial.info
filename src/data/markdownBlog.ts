import fs from 'fs';
import path from 'path';

export interface MarkdownPost {
  slug: string;
  title: string;
  excerpt: string;
  contentHtml: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author: string;
  tags: string[];
}

function removeAccents(input: string): string {
  return input.normalize('NFD').replace(/\p{Diacritic}+/gu, '');
}

function slugify(input: string): string {
  return removeAccents(input)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function simpleMarkdownToHtml(md: string): string {
  let html = md.trim();
  // Headings
  html = html.replace(/^###\s+(.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^##\s+(.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^#\s+(.+)$/gm, '<h1>$1</h1>');
  // Bold/italic
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  // Lists (very simple)
  html = html.replace(/(^|\n)-\s+(.+)(?=\n|$)/g, '$1<li>$2</li>');
  html = html.replace(/(<li>[\s\S]*?<\/li>)(\s*(<li>[\s\S]*?<\/li>))+?/g, match => `<ul>${match}</ul>`);
  // Paragraphs: wrap double line breaks
  html = html.split(/\n\n+/).map(block => {
    if (block.match(/^<h[1-3]>/)) return block; // leave headings
    if (block.match(/^<ul>/) || block.match(/^<li>/)) return block; // lists already wrapped
    return `<p>${block.replace(/\n/g, ' ')}</p>`;
  }).join('\n');
  return html;
}

function estimateReadTime(text: string): string {
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(4, Math.round(words / 200));
  return `${minutes} min de lecture`;
}

function inferCategoryFromFilename(name: string): string {
  const n = name.toLowerCase();
  if (n.includes('general') || n.includes('responsabilite') && n.includes('generale')) return 'General Liability';
  if (n.includes('travailleur') || n.includes('workers')) return "Workers' Compensation";
  if (n.includes('biens') || n.includes('property')) return 'Commercial Property';
  if (n.includes('auto')) return 'Commercial Auto';
  if (n.includes('bop') || n.includes('proprietaire')) return 'Business Owner Policy';
  if (n.includes('cyber')) return 'Cyber Liability';
  if (n.includes('professionnelle') || n.includes('eo')) return 'Professional Liability';
  if (n.includes('produits')) return 'Product Liability';
  if (n.includes('emploi') || n.includes('epli')) return 'Employment Practices';
  if (n.includes('cout') || n.includes('franchise') || n.includes('limites')) return 'Risk Management';
  if (n.includes('renouvellement') || n.includes('checklist') || n.includes('mistakes')) return 'Risk Management';
  if (n.includes('sinistre') || n.includes('claim')) return 'Claims Management';
  return 'Commercial Insurance Basics';
}

function computeDistributedDates(count: number): string[] {
  const start = new Date('2024-01-15T00:00:00Z').getTime();
  const end = new Date('2025-09-25T00:00:00Z').getTime();
  const step = (end - start) / Math.max(1, count - 1);
  return Array.from({ length: count }, (_, i) => new Date(start + step * i).toISOString().slice(0, 10));
}

export function loadMarkdownPosts(): MarkdownPost[] {
  const root = process.cwd();
  const dir = path.join(root, 'public', 'BlogPosts');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md')).sort();

  const dates = computeDistributedDates(files.length);

  const posts: MarkdownPost[] = files.map((file, idx) => {
    const full = path.join(dir, file);
    const raw = fs.readFileSync(full, 'utf8');

    // Title: first H1 or fallback to filename without index
    const h1Match = raw.match(/^#\s+(.+)$/m);
    let title = h1Match ? h1Match[1].trim() : file.replace(/^\d+_/, '').replace(/_/g, ' ').replace(/\.md$/, '');
    title = title.charAt(0).toUpperCase() + title.slice(1);

    const slug = slugify(title);

    // Excerpt: first non-empty paragraph (after heading lines)
    const blocks = raw.split(/\n\n+/).map(b => b.trim()).filter(Boolean);
    const firstPara = blocks.find(b => !b.startsWith('#')) || '';
    const excerpt = firstPara.replace(/\n/g, ' ').slice(0, 240) + (firstPara.length > 240 ? '…' : '');

    const contentHtml = simpleMarkdownToHtml(raw);
    const readTime = estimateReadTime(raw);
    const category = inferCategoryFromFilename(file);

    return {
      slug,
      title,
      excerpt,
      contentHtml,
      category,
      readTime,
      publishedAt: dates[idx],
      author: 'Insurial Team',
      tags: []
    };
  });

  // Newest first
  return posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getMarkdownPostBySlug(slug: string): MarkdownPost | undefined {
  const posts = loadMarkdownPosts();
  return posts.find(p => p.slug === slug);
}

export function getMarkdownRelatedArticles(
  currentSlug: string,
  currentCategory: string,
  limit: number = 3
): MarkdownPost[] {
  const posts = loadMarkdownPosts();
  return posts
    .filter(p => p.slug !== currentSlug && p.category === currentCategory)
    .slice(0, limit);
}
