import { defineConfig } from "astro/config";
import { remarkModifiedTime } from "./remark-modified-time.mjs";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://knowsex.net",
  integrations: [mdx(), sitemap()],
  server: {
    host: true, // Allow LAN
  },

  //文章修改时间插件
  markdown: {
    remarkPlugins: [remarkModifiedTime],
    remarkRehype: { footnoteLabel: "参考资料", footnoteBackLabel: "返回引用" },
  },
  //重定向之前的链接风格更换导致的链接移动
  redirects: {
    "/About.html": "/general/about/",
    "/sub/Communicate_with_KnowSex.html": "/general/communicate/",
    "/sub/Contraception.html": "/main/contraception/",
    "/sub/Encourage.html": "/general/encourage/",
    "/sub/Human_Reproductive_System.html": "/main/human-reproductive-system/",
    "/sub/Sexual_Activity.html": "/main/sexual-activity/",
    "/sub/Sexual_Orientation.html": "/main/sexual-orientation/",
    "/sub/expend-reading": "/",
    "/sub/extended-reading/contraception-and-prevention-of-STD.html":
      "/main/contraception/",
    "/sub/extended-reading": "/",
    "/sub/expend-reading/contraception-and-prevention-of-STD.html":
      "/main/contraception/",
    "/sub/fund": "/general/fund/",
    "/sub/other-media": "main/other-media/",
    "/sub/STD": "/main/std/",
    "/sub/STD/Gonorrhea.html": "/main/std/gonorrhea/",
    "/sub/STD/Syphilis.html": "/main/std/syphilis/",
    "/main/sexual-ph": "/main/sexual-physiology/",
  },
});
