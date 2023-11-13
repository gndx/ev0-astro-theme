# 🚀 EV0 Astro Theme - Blog Template

EV0 Astro Theme is a free and open-source serverless blog template, built with Astro, Tailwind CSS, and TypeScript. It serves as a starting point for creating your personal portfolio website or showcasing your projects online. The template is open-source and released under the MIT license, meaning you are free to use, modify, and distribute it for personal or commercial purposes.

<p align="center">
  <img align="center" alt="EV0 Astro Theme" src="https://s3.amazonaws.com/gndx.dev/ev0-astro-theme.png"/>
</p>

<a href="https://astro.build"><img src="https://astro.badg.es/v2/built-with-astro/tiny.svg" alt="Built with Astro" width="120" height="20"></a>

## 🔥 DEMOS

- [EV0 Astro Theme - DEMO](https://ev0.gndx.io/)
- [GNDX - My Personal Blog (ES)](https://gndx.dev)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gndx/ev0-astro-theme#NODE_VERSION=18)

## 🔥 Features

- ✅ Minimal styling (Tailwind CSS)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Dark Mode
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support
- ✅ View Transitions
- ✅ PWA-ready
- ✅ Fully responsive
- ✅ Robots.txt & Humans.txt
- ✅ TypeScript support
- ✅ Syntax highlighting
- ✅ YouTube Integration
- ✅ CLI for adding new posts

## ⚓ Lighthouse Score - PWA Ready

<p align="center">
  <img align="center" alt="Lighthouse Score" src="https://s3.amazonaws.com/gndx.dev/EV0-astro-theme-lighthouse.png"/>
</p>

## 🚀 Getting Started

Clone this repository to your local machine using Git.

```scheme
git clone https://github.com/gndx/ev0-astro-theme.git your-project-name
```

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |
| `npm run youtube` | Fetches the Latest YouTube Channel Videos    |
| `npm run newpost` | Generate a New Blogpost Markdown Entry       |

Edit the HTML files in the `src/pages` directory to add your projects, experiences, and personal information.

## 📝 Configuration Blog

To configure your blog, edit the `src/config/config.json` file. This file contains the following options:

```scheme
{
  "site": {
    "title": "EV0 Astro Theme",
    "base_url": "https://ev0.gndx.io",
    "base_path": "/",
    "favicon": "/favicon.png",
    "logo": "https://s3.amazonaws.com/gndx.dev/ev0-astro-logo.png",
    "lang": "en",
    "description": "EV0 is a free and open-source serverless blog template, built with Astro, Tailwind CSS, and TypeScript.",
    "pageSize": 6
  },
  "features": {
    "youtube": true,
    "dark_mode": true
  },
  "metadata": {
    "meta_author": "Oscar Barajas @gndx",
    "meta_description": "EV0 is a free and open-source serverless blog template, built with Astro, Tailwind CSS, and TypeScript."
  },
  "author": {
    "name": "Oscar Barajas Tavares @gndx",
    "avatar": "https://s3.amazonaws.com/gndx.dev/gndx-astro-avatar.png",
    "bio": "EV0 is a free and open-source serverless blog template, built with Astro, Tailwind CSS, and TypeScript."
  }
}
```

The menu is configured in the `src/config/menu.json` file. This file contains the following options:

```scheme
[
  {
    "name": "Home",
    "url": "/"
  },
  {
    "name": "Blog",
    "url": "/blog"
  },
]
```

Social networks are configured in the `src/config/social.json` file. This file contains the following options:

```scheme
  {
    "name": "Instagram",
    "url": "https://instagram.com/gndx"
    "svg": "...."
  }
```

## 🎥 YouTube Integration

To integrate your YouTube channel, you need to create a new file called `.env` in the root directory of your project. Then add the `CHANNEL_ID` and `API_KEY` to get the latest videos from your YouTube channel in `src/config/youtube.json`.

```scheme
npm run youtube
```

Your YouTube API is not used in production.

Requires an API KEY for YouTube API V3 - [Google Console](https://console.cloud.google.com/)

You can disable the youtube integration by modifying the `src/config/config.json`.

```json
  "features": {
    "youtube": false
  },
```

## 📝 Adding New Posts

To add a new post, run the following command:

```scheme
npm run newpost
```

Follow the instructions and this will generate a new markdown file in the `src/content/blog` directory. Edit the file to add your post content.

## 📂 Project Structure

```
/
├── public/
│   └── favicons/
│   └── fonts/
│   └── blog-placeholder.jpg
│   └── favicon.png
│   └── humans.txt
├── scripts/
│   └── youtube.cjs
├── src/
│   ├── components/
│   ├── config/
│   ├── content/
│   ├── layouts/
│   └── pages/
│   └── styles/
│   └── env.d.ts
└── package.json
└── astro.config.mjs
└── tailwind.config.js
└── tsconfig.json
└── .gitignore
```

## 💻 Contributing

Contributions to this project are welcome. If you find a bug or have a suggestion for improvement, please open an issue or submit a pull request.

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://gndx.io"><img src="https://avatars.githubusercontent.com/u/10554486?v=4?s=100" width="100px;" alt="Oscar Barajas Tavares"/><br /><sub><b>Oscar Barajas Tavares</b></sub></a><br /><a href="#doc-gndx" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://jhonachata.dev/"><img src="https://avatars.githubusercontent.com/u/7337141?v=4?s=100" width="100px;" alt="Jhon Achata Limachi"/><br /><sub><b>Jhon Achata Limachi</b></sub></a><br /><a href="#bug-dcyar" title="Bug reports">🐛</a> <a href="#ideas-dcyar" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://erasmoh.dev"><img src="https://avatars.githubusercontent.com/u/12125288?v=4?s=100" width="100px;" alt="Erasmo Hernández"/><br /><sub><b>Erasmo Hernández</b></sub></a><br /><a href="#bug-erasmoh" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://francisco-araujo.com"><img src="https://avatars.githubusercontent.com/u/49659840?v=4?s=100" width="100px;" alt="Francisco Araujo"/><br /><sub><b>Francisco Araujo</b></sub></a><br /><a href="#design-franciscoagx" title="Design">🎨</a> <a href="#bug-franciscoagx" title="Bug reports">🐛</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## 📃 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## ☕ Support

If this project helped you learn something new, or if you're feeling particularly generous, you can buy me a coffee. It's greatly appreciated! 😊 [GitHub Sponsors](https://github.com/sponsors/gndx)
