const contrastButton = document.getElementById('toggle-contrast');
const accordionTriggers = document.querySelectorAll('.accordion-trigger');

if (contrastButton) {
  contrastButton.addEventListener('click', () => {
    const isHighContrast = document.body.dataset.contrast === 'high';
    document.body.dataset.contrast = isHighContrast ? 'default' : 'high';
    contrastButton.setAttribute('aria-pressed', String(!isHighContrast));
    contrastButton.textContent = isHighContrast ? 'Ativar alto contraste' : 'Desativar alto contraste';
  });
}

accordionTriggers.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
    const panel = trigger.closest('.accordion-item')?.querySelector('.accordion-panel');

    trigger.setAttribute('aria-expanded', String(!isExpanded));

    if (panel) {
      panel.hidden = isExpanded;
    }
  });
});