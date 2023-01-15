import type { GatsbyConfig } from "gatsby";
import * as dotenv from "dotenv";
dotenv.config();

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Artur Lindströms Portfolio",
    siteUrl: "https://arturlindstrom.netlify.app/",
    description: "Artur Lindströms Portfolio",
    image: "https://i.imgur.com/bCWUksE.png",
    keywords:
      "Artur Lindström, Portfolio, Frontend, Developer, Web, Developer, Stockholm, Sweden, JavaScript, React, Gatsby, TypeScript, GraphQL, Node, HTML, CSS, SASS, PostCSS, Contentful, Netlify, Git, GitHub, GitLab, Bitbucket, Visual Studio Code, VSCode, WebStorm, IntelliJ, PHP, MySQL, MongoDB, Docker, Linux, Ubuntu, Windows, macOS, Mac, Apple, iPhone, iPad, Android, Mobile, Responsive, Design, UI, UX, User Interface, User Experience, Accessibility",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true, // defaults to false
        jsxPragma: "jsx", // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/pixelArt.svg",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};

export default config;
