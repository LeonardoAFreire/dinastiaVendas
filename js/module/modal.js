export default function initModal() {
  const modalList = document.querySelectorAll('[data-modal]');
  const divModal = document.querySelector('.modal-container');
  const fechar = document.querySelectorAll('.fechar');

  modalList.forEach((modal) => {
    modal.addEventListener('click', showModal);
  });

  function showModal(event) {
    const classeModal = '.' + event.target.dataset.modal;

    const modalAtivo = document.querySelector(classeModal);
    console.log(modalAtivo);
    document.documentElement.classList.add('no-scroll');
    document.body.classList.add('no-scroll');

    divModal.classList.add('ativo');
    modalAtivo.classList.add('ativo');
  }

  function fecharModal() {
    const conteudoAtivo = document.querySelector('.modal.ativo');
    if (conteudoAtivo) {
      conteudoAtivo.classList.remove('ativo');
    }

    document.documentElement.classList.remove('no-scroll');
    document.body.classList.remove('no-scroll');

    divModal.classList.remove('ativo');
  }

  divModal.addEventListener('click', (event) => {
    const clickFora = event.target.classList.contains('modal-container');

    if (clickFora) {
      fecharModal();
    }
  });

  fechar.forEach((item) => {
    item.addEventListener('click', fecharModal);
  });
}
