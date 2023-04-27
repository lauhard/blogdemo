import type { PageLoad } from "./$types";

export const load: PageLoad = async (event) => {
    const post = await import(`../../../lib/blogposts/${event.params.slug}.md`);
    const { title, date } = post.metadata
    const content = post.default
    return {
        content,
        title,
        date,
    }
};