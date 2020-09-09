class Reclamacao {
    static render(reclamacao) {
        const titulo = document.createTextNode(reclamacao.titulo);
        const descricao = document.createTextNode(reclamacao.descricao);
        const img = document.createElement('img');
        img.src = reclamacao.foto;
        const result = document.createElement('reclamacao-item');
        
        result.appendChild(img);
        result.appendChild(titulo);
        result.appendChild(document.createElement('br'));
        result.appendChild(descricao);
    
        return result;
    }
}