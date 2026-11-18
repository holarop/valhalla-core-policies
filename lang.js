/**
 * VALHALLA CORE — Client-Side Bilingual Toggle Controller
 * Enables seamless switching between Turkish (TR) and English (EN)
 * Supports URL query (?lang=en/tr) and localStorage persistence.
 */

function setLanguage(lang) {
  if (lang !== 'tr' && lang !== 'en') lang = 'tr';

  localStorage.setItem('valhalla_legal_lang', lang);
  document.documentElement.lang = lang;

  // Update active state on buttons
  const btnTr = document.querySelectorAll('.lang-btn-tr');
  const btnEn = document.querySelectorAll('.lang-btn-en');

  btnTr.forEach((btn) => btn.classList.toggle('active', lang === 'tr'));
  btnEn.forEach((btn) => btn.classList.toggle('active', lang === 'en'));

  // Toggle content elements
  const trElements = document.querySelectorAll('.lang-tr');
  const enElements = document.querySelectorAll('.lang-en');

  trElements.forEach((el) => {
    el.style.display = lang === 'tr' ? '' : 'none';
  });

  enElements.forEach((el) => {
    el.style.display = lang === 'en' ? '' : 'none';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Check URL param ?lang=
  const urlParams = new URLSearchParams(window.location.search);
  const queryLang = urlParams.get('lang');

  // Check LocalStorage
  const savedLang = localStorage.getItem('valhalla_legal_lang');

  // Default to query > saved > 'tr'
  const initialLang = queryLang || savedLang || 'tr';
  setLanguage(initialLang);
});
