document.addEventListener('DOMContentLoaded', () => {
    const cursoTecnicoCard = document.getElementById('curso-tecnico');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');

    // Abrir o Modal ao clicar no Curso Técnico
    cursoTecnicoCard.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Fechar o Modal ao clicar no botão de fechar
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fechar o Modal ao clicar fora do conteúdo
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
