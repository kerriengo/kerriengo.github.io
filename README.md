# ✎ My Portfolio: the complete "how to change anything" guide

This is my portfolio website. It is plain HTML, CSS and a little JavaScript.
No tools to install. No building. Edit a file, save it, see the change.

**How to read this guide:** every section is short. Do one step at a time. Skip what you don't need.

---

## 0. The 30-second version

1. Open this folder in **VS Code**.
2. Right-click **index.html** → **Open with Live Server**. (Install the free *Live Server* extension first if you don't see it.)
3. Change something. Press **Cmd + S**. The browser updates by itself.
4. Don't like it? Press **Cmd + Z**, then **Cmd + S**.
5. Happy? Publish it (section 9).

---

## 1. The 4-step edit loop (works for everything)

1. **Open** the file from the table in section 3.
2. **Find** the thing: press **Cmd + F** and type a search word.
3. **Change only the words** (or the single value). Never change anything inside `< >` brackets unless this guide says so.
4. **Save** with **Cmd + S**.

Tip: every file has labels that start with the pencil symbol **✎**. Press **Cmd + F**, type `✎`, and press Enter to jump from label to label.

**Made a mess?** **Cmd + Z** undoes. **Cmd + S** saves the undo. Always works.

---

## 2. What each file does (the map)

```
index.html            Home page
work.html             Work page (numbers, experience, tools, all tiles)
about.html            About page
work/
  q1-feel-lighter.html        Q1 campaign page + its posts
  q2-with-you.html            Q2 campaign page
  q3-we-believe-in-better.html  Q3 campaign page
  q4-holiday-campaign.html    Q4 campaign page
  archive.html                Social archive (2025)
  activations.html            In-person events
  photography.html            Photo gallery
  production.html             "Coming soon" page
style.css             ALL the colours, sizes and looks
gallery.js            The popup that opens when you click a post
captions.js           The captions shown in the popup
form.js               Makes the contact form send
images/               Every picture on the site
README.md             This guide
.gitignore            Tells GitHub what NOT to upload
_old-versions/        Old drafts. Stays on my computer. Never uploaded.
```

---

## 3. "I want to change..." (the master table)

| I want to change | Open this file | Press Cmd+F and search |
|---|---|---|
| Any colour, tile size, popup size | `style.css` | `MY SETTINGS` |
| Headline colour | `style.css` | `--my-headline` |
| How big the tiles are | `style.css` | `--my-tile-min` |
| Photo gallery columns | `style.css` | `--my-gallery-cols` |
| How wide the content area is | `style.css` | `--my-content-w` |
| Sidebar width | `style.css` | `--side` |
| Show or hide the orange date stamps | `style.css` | `--my-stamps` (use `none` to hide) |
| Turn off the film grain | `style.css` | `body::after` then change `opacity: .06` to `opacity: 0` |
| Home page intro sentence | `index.html` | `HOME INTRO` |
| About text | `about.html` | `✎ ABOUT` |
| Big numbers, experience, tools | `work.html` | `BIG NUMBERS`, `EXPERIENCE`, `TOOLS` |
| A campaign's brief, approach, result | the file in `work/` | `BRIEF / APPROACH` |
| A post's title | the file in `work/` | `POST CARDS` |
| Captions and hashtags | `captions.js` | the post's name, like `ripple effect` |
| Words at the top of the popup | `gallery.js` | `✎ EDIT` |
| The "message sent" text | `form.js` | `✎ EDIT` |
| Photo date stamps, frame numbers | `work/photography.html` | `PHOTO GALLERY` |
| The "coming soon" page | `work/production.html` | `COMING SOON` |
| The contact form at the bottom | any page | `✎ FOOTER` |

---

## 4. Things that appear on EVERY page (change them once for all pages)

Your name, tagline, Instagram name, Formspree ID, nav links.

1. Press **Cmd + Shift + H**. This is Find and Replace across all files.
2. Top box: type what is there now. Examples:
   - `your-handle` → your Instagram name
   - `YOUR_FORM_ID` → your Formspree form ID
   - `social media, production &amp; photography` → your new tagline
3. Second box: type what you want instead.
4. Click the **Replace All** icon (two little arrows). Confirm.

---

## 5. Recipes (copy these steps exactly)

### 5.1 Swap a picture
1. Find the file name in the `images` folder.
2. Save your new picture with the **exact same name** in the same place. Replace the old one.
3. Refresh the browser (**Cmd + R**).

**Warning:** file names are case-sensitive once the site is on GitHub. `Portrait.jpg` and `portrait.jpg` are different files. Use all lowercase.

Pictures waiting for you:

| File | Where it shows |
|---|---|
| `images/avatar.jpg` | the round photo in the sidebar |
| `images/portrait.jpg` | About page main photo |
| `images/about-1.jpg`, `about-2.jpg`, `about-3.jpg` | the three polaroids on About |
| `images/footer.jpg` | the big photo behind the footer (already set) |

Keep each photo under 1 MB so the site loads fast. Remove location data from any photo you add yourself (Mac: open it in Preview → Tools → Show Inspector → GPS tab → Remove Location Info).

### 5.2 Change a colour
1. Open `style.css`. Press **Cmd + F**, type `MY SETTINGS`.
2. Change the colour after the colon. Colours look like `#fce4c1`.
3. Save.

| Setting | What it colours |
|---|---|
| `--my-page` | page background (dark brown) |
| `--my-card` | cards, boxes, tiles |
| `--my-text` | main text |
| `--my-headline` | titles and headings |
| `--my-muted` | small quiet text |
| `--my-accent` | amber details: date stamps, selected pills |

Your accent palette (blue, sage, tan, amber, brick, rust, cream, olive) lives lower in the file. Search `--c1`.

Find new colours at coolors.co. Copy the 6-character code including the `#`.

### 5.3 Change a size
All in `MY SETTINGS`:
- `--my-tile-min: 215px;` bigger number = bigger tiles, fewer per row.
- `--my-gallery-cols: 3;` photo gallery columns (2, 3 or 4).
- `--my-content-w: 1040px;` width of the content column. Everything lines up on the right edge.
- `--my-popup-w` and `--my-popup-h`: popup size.

### 5.4 Change a font
Fonts load from Google Fonts. Two places must match.

1. Pick a font at **fonts.google.com**. Click it, then **Get font** → **Get embed code** → **link**.
2. In every page the fonts are loaded by one long line starting with `<link href="https://fonts.googleapis.com/css2?family=`. Replace the family name in that line on **all pages** (use **Cmd + Shift + H**).
3. In `style.css`, search `--serif-g` (headings) or `--mono` (small labels). Put the new font name there.

### 5.5 Edit text on a page
1. Open the page. Press **Cmd + F**, type `✎`.
2. Jump to the label closest to what you want to change.
3. Change only the words between `>` and `<`.

### 5.6 Add, remove or reorder a TILE (home and work pages)
A tile is one block that starts with `<a style="--tint:` and ends with `</a>`.

- **Remove:** select the whole block, press Delete.
- **Reorder:** cut the whole block (**Cmd + X**), paste it somewhere else (**Cmd + V**).
- **Add:** copy a whole block, paste it right after another, then change:
  - `href="work/q1-feel-lighter.html"` → the page it opens
  - `src="images/work/q1/cover.jpg"` → the cover picture
  - the words inside `<strong>`, the `<small>` number and `<p class="role">`
  - the words inside the three `<em>` hover labels

Always copy and delete **whole** blocks. Half a block breaks the page.

### 5.7 Add a new POST inside a campaign page
Open the campaign file in `work/`. Copy a whole card block, paste it next to another, then change the labelled parts:

```html
<a style="--tint:#dfded9" data-slug="q1/my-new-post" class="tile piece"
   href="../images/work/q1/my-new-post-1.jpg"
   data-title="my new post" data-group="february"
   data-images="../images/work/q1/my-new-post-1.jpg|../images/work/q1/my-new-post-2.jpg">
  <div class="shot"><img loading="lazy" src="../images/work/q1/my-new-post-t.jpg" alt="my new post"> ... </div>
  <div class="cap"><strong>my new post</strong><small>17</small></div>
  <p class="role">2 slides</p>
</a>
```

What each part means:
- `data-slug` is a unique name (no spaces). Captions use it: in `captions.js` the line is `"q1/my-new-post": { caption: "", tags: "" },`
- `href` = the first picture.
- `data-title` = the title in the popup.
- `data-group` = the month label in the popup header.
- `data-images` = every slide, in order, separated by the `|` symbol.
- `src="...-t.jpg"` = a small thumbnail (about 760 pixels wide).
- The picture files go in `images/work/q1/` (or `q2`, `q3`, `q4`, `archive`, `act`).

Picture sizes: full slides about 1400 pixels on the long side. Thumbnail about 760 pixels. JPG format.

### 5.8 Add a caption
1. Open `captions.js`.
2. Press **Cmd + F** and type the post's name.
3. Put the caption between the quote marks after `caption:`
4. Put hashtags after `tags:` like `"#feellighter #therapy"`.
5. Save. Click the post to see it.

Rules: keep the quote marks, the comma at the end of the line and the curly brackets. Type `\n` to start a new paragraph. Don't use a straight double quote inside a caption.

### 5.9 Add a photo to the photography gallery
1. Put the photo in `images/photography/` (for example in the `hills` folder). Name it with all lowercase letters.
2. In `work/photography.html`, copy a whole block that looks like this and paste it in the same roll:

```html
<figure class="frame" data-n="1">
  <img loading="lazy" src="../images/photography/hills/001.jpg" width="844" height="1500" alt="hills, photo 1">
  <span class="stamp">'25 2 23</span>
</figure>
```

3. Change `src`, the `width` and `height` numbers (your photo's size in pixels), the `alt` words, and the date in `<span class="stamp">`.
4. To remove a photo, delete its whole `<figure>…</figure>` block.

### 5.10 Add a brand new page
1. In the file list, right-click `work/q1-feel-lighter.html` → **Copy**, then right-click the `work` folder → **Paste**. Rename it (example: `my-new-page.html`, all lowercase, no spaces).
2. Open it and change the title, details strip and posts using the `✎` labels.
3. Add a tile for it on `index.html` and `work.html` (recipe 5.6) with `href="work/my-new-page.html"`.

### 5.11 Add or change a top navigation link
The top bar is the block starting `<header class="topbar">` at the top of every page. Each link looks like:

```html
<a href="about.html"><span class="ul">about</span></a>
```

Use **Cmd + Shift + H** to edit it on all pages at once. Pages inside `work/` use `../about.html` (two dots and a slash first).

### 5.12 Change the hover colour on one tile
Each tile has `style="--tint:#dfded9"`. Change the 6-character code. That is the light colour the tile turns when you hover.

### 5.13 Change what the popup says at the top
Open `gallery.js`, search `✎ EDIT`. The line at the top of each post is `betterhelp · month`. Change the word `betterhelp`.

---

## 6. The contact form

The form sits at the bottom of every page. It sends messages to your email through a free service called Formspree.

1. Go to **formspree.io**. Sign up with the email where you want messages.
2. Click **New form**. Name it "Portfolio".
3. Copy the form ID (the short code at the end of the form's web address).
4. Press **Cmd + Shift + H**. Replace `YOUR_FORM_ID` with your code. Click **Replace All**.
5. Open your live site. Send yourself a test message.
6. Check your email. Formspree may ask you to confirm the first time.

Until you do this, the form says "the form is not connected yet". That is normal.

---

## 7. Words in plain English (so the code makes sense)

- **Tag:** something in `< >` brackets, like `<p>` or `<div>`. Most come in pairs: `<p>` opens, `</p>` closes.
- **Block:** an opening tag, everything inside it, and its closing tag. Copy and delete whole blocks.
- **Class:** a name that links a tag to a look in `style.css` (`class="tile"`).
- **Attribute:** extra info inside a tag, like `href="about.html"` (where a link goes) or `src="..."` (which picture to show).
- **Comment:** notes for humans that the browser ignores. In HTML they look like `<!-- ✎ note -->`, in CSS `/* note */`, in JavaScript `// note`.
- **`<a>`:** a link. **`<img>`:** a picture. **`<strong>`:** bold words. **`<span>`:** a small piece of text.

---

## 8. Never edit these (they are the engine)

- `data-images`, `data-slug`, `href`, `src` inside a post card, unless a recipe above tells you to.
- Any tag name or bracket in `< >`.
- Anything in `style.css` outside the `MY SETTINGS` block, unless a label says `EDIT`.
- `gallery.js` and `form.js`, unless a line is marked `✎ EDIT`.

If something breaks: **Cmd + Z**, **Cmd + S**.

---

## 9. Put it on the internet with GitHub (free)

**One-time check:** your repository must be named `kerriengo.github.io` and be Public. It already is.

### 9.1 Before you publish: checklist
- [ ] `YOUR_FORM_ID` replaced (section 6)
- [ ] `your-handle` replaced with your Instagram name (section 4)
- [ ] Photos added: `avatar.jpg`, `portrait.jpg`, `about-1.jpg`, `about-2.jpg`, `about-3.jpg`
- [ ] Search `Draft:` and replace every draft sentence on the campaign pages with your words
- [ ] Captions added in `captions.js` (or leave "caption coming soon")
- [ ] **Approvals:** BetterHelp has approved showing this work. Partners and anyone shown in a photo are fine with it.
- [ ] No private info in any picture or caption
- [ ] Everything in `images/` is okay for the whole world to see. The repository is public.

### 9.2 Send it to GitHub (GitHub Desktop)
1. Open **GitHub Desktop**. Make sure **kerriengo.github.io** is selected at the top left.
2. On the left you will see a list of changed files. That is normal. Everything you changed is there.
3. At the bottom left, in **Summary**, type a short note like `launch portfolio`.
4. Click the blue **Commit to main** button.
5. Click **Push origin** at the top.
6. Wait 1 to 2 minutes. Your site is live at **https://kerriengo.github.io**

The first time, GitHub may need to show the folder `_old-versions`. It won't. That folder is ignored on purpose.

### 9.3 Turn on the site (first time only)
1. Go to **github.com/kerriengo/kerriengo.github.io**.
2. Click **Settings** (if you don't see it, click **…** then **Settings**).
3. Click **Pages** in the left menu.
4. Under **Branch**, choose **main** and **/ (root)**. Click **Save**.
5. After a minute the page shows "Your site is live at…".

### 9.4 Update the site later
1. Edit a file. Save.
2. In GitHub Desktop: type a note, **Commit to main**, **Push origin**.
3. Wait about a minute. Refresh with **Cmd + Shift + R**.

---

## 10. Do I need Vercel? (No. It is optional.)

**GitHub Pages is enough.** It is free, simple and already set up.

Vercel does the same job (hosts the site) with a few extras:

| | GitHub Pages | Vercel |
|---|---|---|
| Cost | Free | Free (Hobby plan, personal use) |
| Extra account | No | Yes |
| Preview link for each change | No | Yes |
| Custom domain like yourname.com | Yes (manual) | Yes (guided, easier) |
| Keep the GitHub repository private | No (it must be public) | Yes |

**Pick Vercel only if:** you want a custom domain with less fuss, preview links, or you want your GitHub repository private.

### If you want Vercel
1. Make sure your latest work is pushed to GitHub (section 9.2).
2. Go to **vercel.com** → **Sign Up** → **Continue with GitHub** → **Authorize**.
3. Choose the **Hobby** plan.
4. Click **Add New** → **Project**.
5. Find **kerriengo.github.io** in the list → **Import**.
6. Leave every setting as it is. (Framework: Other. No build command.)
7. Click **Deploy**. In about 30 seconds you get a link like `kerriengo-github-io.vercel.app`.
8. From now on, every **Push origin** from GitHub Desktop updates Vercel automatically.

**Custom domain (optional):** buy a domain (about $12 a year), then in Vercel open your project → **Settings** → **Domains** → add it and follow the steps shown.

---

## 11. Troubleshooting

| What you see | Do this |
|---|---|
| Popup doesn't open when I click a post | Press **Cmd + Z** a few times in the file you last edited, then **Cmd + S**. Usually a quote mark or comma got deleted in `captions.js`. |
| A picture is missing on the live site but fine on my Mac | File names are case-sensitive on GitHub. Make the file name and the name in the page match exactly, all lowercase. |
| My change isn't showing on the live site | Wait 1 to 2 minutes. Refresh with **Cmd + Shift + R**. Check you clicked **Push origin**. |
| The whole page looks broken | **Cmd + Z** in the file you just edited. Probably half a block was deleted. |
| The contact form doesn't send | Check you replaced `YOUR_FORM_ID`. Check your email for a Formspree confirmation. |
| Captions don't appear | Open `captions.js`. Check every line still ends with a comma and every caption is inside quote marks. |
| Live Server won't start | In VS Code open the top-level folder (`kerriengo.github.io`), then right-click `index.html` → **Open with Live Server**. |

---

## 12. If I ever want to start over on a file

Old drafts are in `_old-versions` on this computer. They are never uploaded. You can delete that folder whenever you want.

You can also go back to any earlier version of any file in GitHub Desktop: **History** tab → pick a day → right-click a file → **Revert**.
