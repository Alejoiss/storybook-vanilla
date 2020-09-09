document.onkeydown = (e) => {
    e = e || window.event;
    if (!e.altKey) return;

    if (e.keyCode == '188') renderReclamacao(story1);
    if (e.keyCode == '190') renderReclamacao(story2);
}

const renderReclamacao = (story) => {
    Array.from(document.body.children).forEach(element => {
        document.body.removeChild(element);
    });

    document.body.appendChild(render(story));
}