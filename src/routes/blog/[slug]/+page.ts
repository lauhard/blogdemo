import type { PageLoad } from "./$types";

export const load: PageLoad = async (event) => {
    console.log("slug:", event.params.slug)
    const post = await import(`../../../lib/blogposts/${event.params.slug}.md`);
    const { title, date } = post.metadata
    const content = post.default
    console.log("content",content)
  
    return {
        content,
        title,
        date,
    }
    
};