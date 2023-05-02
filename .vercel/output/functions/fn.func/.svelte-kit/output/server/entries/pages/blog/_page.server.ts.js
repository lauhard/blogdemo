import { _ as __vite_glob_0_0 } from "../../../chunks/demo-copy.js";
import { _ as __vite_glob_0_1 } from "../../../chunks/demo.js";
const getPosts = async () => {
  const dataRecord = /* @__PURE__ */ Object.assign({ "/src/lib/blogposts/demo-copy.md": __vite_glob_0_0, "/src/lib/blogposts/demo.md": __vite_glob_0_1 });
  const metaData = Object.entries(dataRecord);
  const posts = Promise.all(
    metaData.map(async (value) => {
      const [path, meta] = value;
      const relativePath = path.slice(19, -3);
      const { metadata } = meta;
      const blogData = await meta.default.$$render();
      console.log("reading time", (await readingTime(blogData)).readingTime);
      return {
        path: relativePath,
        metadata
      };
    })
  );
  return posts;
};
const readingTime = async (post) => {
  const WORDS_PER_MINUTE = 200;
  const result = {
    wordCount: 0,
    readingTime: 0
  };
  const regex = /\w+/g;
  result.wordCount = post.match(regex)?.length;
  result.readingTime = Math.ceil(
    result.wordCount / WORDS_PER_MINUTE
  );
  return result;
};
const load = async (event) => {
  const files = await getPosts();
  return {
    files
  };
};
const actions = {
  setTheme: async (event) => {
    const response = {
      success: false,
      zodError: {},
      prismaError: ""
    };
    const { url, cookies } = event;
    const theme = url.searchParams.get("theme");
    console.log("actions setTheme theme: ", theme);
    const opts = {
      path: "/",
      maxAge: 60 * 60 * 24 * 365
    };
    if (theme) {
      cookies.set("color-theme", theme, opts);
    }
    return response;
  }
};
export {
  actions,
  load
};
