const render = (story) => {
    let result = document.createElement('reclamacao-lista');
    for (let i = 0, length = story.reclamacoes.length; i < length; i++) {
        result.appendChild(Reclamacao.render(story.reclamacoes[i]));
    }
    return result; 
}
