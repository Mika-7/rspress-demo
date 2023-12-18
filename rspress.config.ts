import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: '米咖的知识库',
  description: 'Rspack-based Static Site Generator',
  icon: '/rspress-icon.png',
  base: '/rspress-demo',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    socialLinks: [
      { 
        icon: 'github', 
        mode: 'link', 
        content: 'https://github.com/Mika-7' 
      },
    ],
  },
});
