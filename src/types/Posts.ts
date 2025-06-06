export interface Post {
    id: number;
    title: { rendered: string };
    content: { rendered: string };
    excerpt: { rendered: string };
    slug: string;
    featured_media: number; 
    featured_media_url?: string; 
}