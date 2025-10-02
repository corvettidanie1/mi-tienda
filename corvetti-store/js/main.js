document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  const modal = document.getElementById('modal');
  const cerrar = modal.querySelector('.cerrar');
  const modalTitulo = document.getElementById('modalTitulo');
  const modeloElegido = document.getElementById('modeloElegido');

  document.querySelectorAll('.ver-detalle').forEach(btn => {
    btn.addEventListener('click', () => {
      const producto = btn.dataset.producto;
      modal.style.display = 'flex';
      modalTitulo.textContent = producto;
      modeloElegido.value = producto;
    });
  });

  cerrar.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if(e.target === modal) modal.style.display = 'none';
  });
});
