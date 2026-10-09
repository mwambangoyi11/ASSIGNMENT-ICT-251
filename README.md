# ICT251 Activities 2 and 3 — Student Portfolio

A responsive HTML/CSS/JavaScript portfolio built by extending the Activity 2 website.

## Before submission
1. Replace `[Your Name]` and `[Your Programme]` in `index.html` with your own details.
2. Add at least three permitted photos named `photo1.jpg`, `photo2.jpg`, and `photo3.jpg` inside `images/`.
3. Add your own short video as `videos/intro.mp4` and audio recording as `videos/voice.mp3`.
4. Update the GitHub source link in the footer to your repository URL.
5. Test the site using VS Code Live Server, then commit and push the whole `myweb` folder to GitHub.

## Activity 3 JavaScript features
- Contact form validation and local preview (compulsory): rejects blank name/message and invalid email; does not send data.
- Gallery viewer: Previous/Next buttons with correct wraparound.
- Project/skill search: filters three cards, includes reset and no-results message.
- Theme switch: toggles light/dark appearances.
- Additional expandable project details are also included.

## Test
Try invalid and valid contact forms, gallery Previous/Next at both ends, search terms such as `CSS` and a term with no matches, reset search, expand/collapse project details, and switch themes. Check mobile and desktop widths and verify the media files load.

## Deployment on Render
Push this folder's contents to a GitHub repository. If `index.html` is at the repository root, create a Render **Static Site** with Build Command `echo "No build required"` and Publish Directory `.`. If publishing the `myweb` folder from a repository containing its parent, set Root Directory to `myweb`. Verify the live HTTPS site after deployment.
