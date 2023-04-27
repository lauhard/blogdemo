


export const getPosts = async () => {
    const dataRecord:Record<string, any> = import.meta.glob('$lib/blogposts/*.md', {eager:true});
    const metaData = Object.entries(dataRecord);
    const posts = Promise.all(
        metaData.map(async (value) => {
            const [path, meta] = value;
            const relativePath = path.slice(19, -3);
            const { metadata } = meta;
            const blogData:string = await meta.default.$$render();
            console.log("reading time", (await readingTime(blogData)).readingTime)
            return {
                path: relativePath,
                metadata: metadata
            };
        })
    )
    return posts
}

export const readingTime = async (post: string)=> {
    const WORDS_PER_MINUTE = 200;
    const result = {
        wordCount:0,
        readingTime:0
    };
    //Matches words
    //See
    //https://regex101.com/r/q2Kqjg/6
    const regex=/\w+/g;
    result.wordCount = post.match(regex)?.length as number;
    result.readingTime = 
    Math.ceil(
       result.wordCount / 
       WORDS_PER_MINUTE);
    return result;
}