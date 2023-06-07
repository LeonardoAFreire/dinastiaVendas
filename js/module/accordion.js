export default function initAccordion() {
  const accordionList = document.querySelectorAll('[data-accordion] dt');
  const ativo = 'ativo';

  if (accordionList.length) {
    accordionList[0].classList.add(ativo);
    accordionList[0].nextElementSibling.classList.add(ativo);

    accordionList.forEach((item) => {
      item.addEventListener('click', handleClick);
    });

    function handleClick(event) {
      const pergunta = event.target;
      const resposta = event.target.nextElementSibling;

      pergunta.classList.toggle(ativo);
      resposta.classList.toggle(ativo);
    }
  }
}
