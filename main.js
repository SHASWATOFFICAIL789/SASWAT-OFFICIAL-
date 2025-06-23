document.querySelectorAll('.faq-toggle').forEach(item => {
  item.addEventListener('click', () => {
    const answer = item.nextElementSibling;
    const icon = item.querySelector('.faq-icon');
    answer.classList.toggle('hidden');
    icon.textContent = answer.classList.contains('hidden') ? '➕' : '➖';
  });
});
window.addEventListener('load', () => {
  document.getElementById('preloader').classList.add('preloader-hide');
});
