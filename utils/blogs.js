const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchAllBlogs() {
    try {
        const res = await fetch(`${BASE_URL}/blogs/articles/`);
        if (!res.ok) return [];
        return await res.json();
    } catch {
        return [];
    }
}

export async function fetchBlogBySlug(slug) {
    try {
        const res = await fetch(`${BASE_URL}/blogs/${slug}/`);
        if (!res.ok) return null;
        return await res.json();
    } catch {
        return null;
    }
}