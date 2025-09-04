# Deploying the Playwright Demo Site to GitHub Pages

You can easily host your `playwright-demo-site` on GitHub Pages for free. Follow these steps:

## 1. Move the Demo Site to a Separate Branch (Optional but Recommended)

GitHub Pages can serve from the `main` branch's `/docs` folder or from a branch like `gh-pages`. For a simple static site, the `/docs` folder is easiest.

### Option A: Use `/docs` Folder in `main` Branch

1. Rename the `playwright-demo-site` folder to `docs`:
   ```sh
   mv playwright-demo-site docs
   ```
2. Commit and push the change:
   ```sh
   git add docs
   git commit -m "Move demo site to docs folder for GitHub Pages"
   git push
   ```

### Option B: Use a `gh-pages` Branch (Advanced)

- See the [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages) for details.

## 2. Enable GitHub Pages

1. Go to your repository on GitHub.
2. Click **Settings** > **Pages** (or **Code and automation > Pages**).
3. Under **Source**, select `main` branch and `/docs` folder.
4. Click **Save**.

## 3. Access Your Site

- After a few minutes, your site will be live at:
  `https://<your-github-username>.github.io/<repo-name>/`

## 4. Update and Maintain

- Any changes you make to files in the `/docs` folder and push to `main` will automatically update your GitHub Pages site.

---

**Tip:**

- Add a link to your demo site in your main `README.md` to showcase it to employers!

---

For more details, see the [GitHub Pages documentation](https://docs.github.com/en/pages).
