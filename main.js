/* ============================================
   CREEKMORE ESSENTIALS — main.js
   ============================================ */

// --- Mobile nav toggle ---
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

// --- Smooth scroll to shop sections ---
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// --- Cart placeholder ---
// Stripe integration will be added here once Deanna sets up her Stripe account
// Each product's "Add to Cart" button will link to a Stripe payment link or
// be replaced with a Stripe Buy Button embed

document.querySelectorAll('.btn-add-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Shop checkout coming soon! In the meantime, contact Deanna at (601) 441-3668 or martino3668@gmail.com to place an order.');
  });
});
