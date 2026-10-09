/* ICT251 Activity 3: contact validation, gallery, project filter and theme switch */

// Validate the contact form and show a safe local preview without sending data.
const contactForm = document.querySelector('#contact-form');
const feedback = document.querySelector('#form-feedback');
const preview = document.querySelector('#form-preview');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const topic = document.querySelector('#topic').value;
    const message = document.querySelector('#message').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    preview.hidden = true;
    feedback.className = 'feedback error';
    if (!name || !message) {
        feedback.textContent = 'Please enter a name and a message. Spaces alone are not accepted.';
        return;
    }
    if (!emailPattern.test(email)) {
        feedback.textContent = 'Please enter a valid email address, for example student@example.com.';
        return;
    }

    document.querySelector('#preview-name').textContent = name;
    document.querySelector('#preview-email').textContent = email;
    document.querySelector('#preview-topic').textContent = topic;
    document.querySelector('#preview-message').textContent = message;
    feedback.className = 'feedback success';
    feedback.textContent = 'Your details were validated successfully. This is only a browser preview; no message was sent.';
    preview.hidden = false;
});

// Gallery viewer: display one photo at a time and wrap correctly at each end.
const galleryFigures = Array.from(document.querySelectorAll('.gallery figure'));
let currentPhoto = 0;
function showPhoto(index) {
    if (!galleryFigures.length) return;
    currentPhoto = (index + galleryFigures.length) % galleryFigures.length;
    galleryFigures.forEach((figure, i) => figure.classList.toggle('gallery-hidden', i !== currentPhoto));
    document.querySelector('#gallery-counter').textContent = `Photo ${currentPhoto + 1} of ${galleryFigures.length}`;
}
document.querySelector('#gallery-prev').addEventListener('click', () => showPhoto(currentPhoto - 1));
document.querySelector('#gallery-next').addEventListener('click', () => showPhoto(currentPhoto + 1));
showPhoto(0);

// Filter projects by keywords and provide a reset and no-results message.
const searchInput = document.querySelector('#project-search');
const projectCards = Array.from(document.querySelectorAll('.project-card'));
function filterProjects() {
    const query = searchInput.value.trim().toLowerCase();
    let visible = 0;
    projectCards.forEach((card) => {
        const matches = card.dataset.search.includes(query) || card.textContent.toLowerCase().includes(query);
        card.hidden = !matches;
        if (matches) visible++;
    });
    document.querySelector('#search-status').textContent = `Showing ${visible} of ${projectCards.length} projects.`;
    document.querySelector('#no-results').hidden = visible !== 0;
}
searchInput.addEventListener('input', filterProjects);
document.querySelector('#reset-search').addEventListener('click', () => {
    searchInput.value = '';
    filterProjects();
    searchInput.focus();
});

// Expand or collapse details on each project card.
document.querySelectorAll('.details-toggle').forEach((button) => {
    button.addEventListener('click', () => {
        const details = button.nextElementSibling;
        const opening = details.hidden;
        details.hidden = !opening;
        button.textContent = opening ? 'Hide details' : 'Show details';
        button.setAttribute('aria-expanded', String(opening));
    });
});

// Switch between light and dark themes while keeping the control state clear.
const themeButton = document.querySelector('#theme-toggle');
themeButton.addEventListener('click', () => {
    const dark = document.body.classList.toggle('dark-theme');
    themeButton.textContent = dark ? 'Switch to light theme' : 'Switch to dark theme';
    themeButton.setAttribute('aria-pressed', String(dark));
});
