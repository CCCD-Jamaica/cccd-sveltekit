# CCCD Jamaica / VSP Peace Corps Project

<p align="center">
    <img 
        style="display: block; 
            margin-left: auto;
            margin-right: auto;
            width: 80%;"
        src="https://res.cloudinary.com/shinkirin/image/upload/v1707677503/shinkirin/CCCD-Jamaica/project-logo.webp" 
        alt="CCCD Jamaica and PC Jamaica VSP Project logo">
    </img>
</p>

## Table of Contents
- [Project Information](#project-information)
- [Project Tools](#project-tools)
  - [Frontend Web Development](#frontend-web-development)
  - [AI Tools](#ai-tools)
  - [Source Code Management](#source-code-management)
  - [Project Management](#project-management)
  - [Hosting](#hosting)
- [Project Structure](#project-structure)

## Project Information

## Table of Contents
- [Project Information](#project-information)
  - [Project Description](#project-description)
  - [Project Goals](#project-goals)
  - [Project License](#project-license)
  - [Project Status](#project-status)
  - [Project Hosting](#project-hosting)
- [Project Tools](#project-tools)
  - [Frontend Web Development](#frontend-web-development)
  - [Decoupled Content Management System](#decoupled-content-management-system)
  - [AI Tools](#ai-tools)
  - [Source Code Management](#source-code-management)
  - [Project Management](#project-management)
- [Project Structure](#project-structure)

### Project Description

This project is a modern, responsive website for [CCCD Jamaica](https://cccd.org.jm), leveraging cutting-edge web technologies and AI-assisted development. Built with [SvelteKit](https://kit.svelte.dev), a powerful framework for creating fast, efficient web applications, the site utilizes [TailwindCSS](https://tailwindcss.com) for flexible and maintainable styling. The development process is enhanced by AI tools such as [Cursor AI](https://cursor.sh), [Google Gemini](https://gemini.google.com), and [OpenAI's DALL-E 3](https://openai.com/dall-e-3), which assist in code generation, content creation, and image design. The project is hosted on [Vercel](https://vercel.com), ensuring high performance and seamless deployment. This combination of technologies allows for rapid development, excellent user experience, and easy maintenance of the CCCD Jamaica website.

### Project Goals

- To create a modern, responsive website for [CCCD Jamaica](https://cccd.org.jm)
- To leverage cutting-edge web technologies and AI-assisted development
- To build a fast, efficient web application
- To ensure a high performance and seamless deployment
- To create a user-friendly and accessible website for the deaf community in Jamaica
- To implement a Jamaican Sign Language (JSL) Resource Page utilizing AI to learn and teach JSL

### Project License

This project is licensed under the [BSD 3-Clause License](LICENSE).

### Project Status
- Project Production Version: 1.0.0-rc.6
- Project Development Version: 1.0.0-rc.7

### Hosting

- [Vercel](https://vercel.com) - Static site hosting
- [Linode](https://linode.com) - Virtual private server hosting
    - [Coolify](https://coolify.io) - Container platform management at Linode
- [Cloudflare](https://cloudflare.com) - CDN and DNS services
- [Cloudinary](https://cloudinary.com) - Media management

## Project Tools

### Frontend Web Development

- [SvelteKit](https://kit.svelte.dev) - Main framework for the project
    - [svelte-meta-tags](https://github.com/oekazuma/svelte-meta-tags) - Meta tags for the project
- [TailwindCSS](https://tailwindcss.com) - Main styling framework for the project
    - [Tailwind Forms](https://tailwindcss.com/docs/forms) - Forms for the project
    - [Tailwind Typography](https://tailwindcss.com/docs/typography) - Typography for the project
    - [Tailwind Aspect Ratio](https://tailwindcss.com/docs/aspect-ratio) - Aspect ratio for the project
    - [Tailwind Container Queries](https://tailwindcss.com/docs/container-queries) - Container queries for the project
- [TailwindUI](https://tailwindui.com) - UI components for the project, but not used extensively
- [Pixelmator](https://pixelmator.com/pro/) - Image editing for the project before being uploaded to Cloudinary
- [Svelte Cloudinary](https://svelte.cloudinary.dev) - Cloudinary integration for the project
- [iconify](https://iconify.design) - Iconify icons for the project
- [Unsplash](https://unsplash.com) - Unsplash images for the project as placeholders, when needed   
- [Undraw](https://undraw.co) - Undraw illustrations for the project as placeholders, when needed
- [favicon.io](https://favicon.io) - Favicon for the project
- [Umami](https://umami.is) - Umami analytics for the project

### Decoupled Content Management System

This project first started to use [Drupal](https://www.drupal.org/) as the main content management system, but due to the complexity of Drupal, it was decided to use [WordPress](https://wordpress.org/). Due to time constraints, the developer decided to switch to [Directus](https://directus.io/) for the next phase of the project for editing, updating, and adding content to the project. With the help of [Cursor AI](https://cursor.sh/), this is more realistic resource-wise.

- [Directus](https://directus.io) - Decoupled content management system for the second phase of the project

### AI Tools

- [Cursor AI](https://cursor.sh) - AI code generation for the project forked from VSCode
- [chatGPT](https://chatgpt.com) - Used for code checking
- [Claude](https://claude.ai) - Used for code checking
- [Google Gemini](https://gemini.google/) - Used for code generation (when needed) and content creation
    - [DALL-E 3](https://openai.com/product/dall-e-3) - Used for image generation for the project
- [Grammarly](https://grammarly.com) - Used for grammar checking for the project

### Accessibility, SEO and Optimization Checks

The goal for this project is to meet with [WCAG 2.1 AA standards](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&levels=aa), but strive for [WCAG 2.1 AAA standards](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&levels=aaa) whenever possible.

- [Accessibility Insights](https://accessibilityinsights.io) - Accessibility Insights accessibility evaluation tool for the project
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/) - Lighthouse accessibility evaluation tool for the project
- [AxeDevTools](https://www.deque.com/axe/) - Accessibility testing tool
- [WAVE Evaluation Tool](https://wave.webaim.org/) - Web accessibility evaluation tool
- [pa11y](https://pa11y.org/) - Automated accessibility testing tool
- [WCAG Contrast Checker](https://webaim.org/resources/contrastchecker/) - Color contrast checker for accessibility
- [AInspector](https://ainspector.github.io/) - Accessibility inspection tool
- [Siteimprove Accessibility Checker](https://siteimprove.com/en-us/accessibility/) - Comprehensive accessibility checker

## Project Management

- [GitHub CCCD Website Project](https://github.com/orgs/CCCD-Jamaica/projects/5)

### Source Code Management

- [GitHub](https://github.com)
- Project Page on [GitHub](https://github.com/CCCD-Jamaica/ccdd-sveltekit)
    - Production URL: [https://github.com/CCCD-Jamaica/ccdd-sveltekit](https://github.com/CCCD-Jamaica/ccdd-sveltekit)
    - Development URL: [https://github.com/CCCD-Jamaica/ccdd-sveltekit/tree/development](https://github.com/CCCD-Jamaica/ccdd-sveltekit/tree/development)

### Project Structure

- `src/components`: This is the main directory for the project. It contains the components for the project.
- `src/lib`: This is the main directory for the project. It contains the components for the project.
- `src/routes`: This is the main directory for the project. It contains the pages for the project.
- `src/app.css`: This is the main CSS file for the project. It contains the styles for the project.
- `src/app.html`: This is the main HTML file for the project. It contains the HTML for the project.
- `src/app.js`: This is the main JavaScript file for the project. It contains the JavaScript for the project.
- `src/svelte.config.js`: This is the main Svelte configuration file for the project. It contains the configuration for the project.
- `tailwind.config.js`: This is the main TailwindCSS configuration file for the project. It contains the configuration for the project.
- `postcss.config.js`: This is the main PostCSS configuration file for the project. It contains the configuration for the project.
- `package.json`: This is the main package.json file for the project. It contains the configuration for the project.    
- `tsconfig.json`: This is the main TypeScript configuration file for the project. It contains the configuration for the project.
- `vite.config.js`: This is the main Vite configuration file for the project. It contains the configuration for the project.

# ccdd-sveltekit
