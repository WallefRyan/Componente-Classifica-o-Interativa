//espera todo o HTML da página ser carregado (o DOM estar pronto), antes de rodar o código dentro da função
document.addEventListener("DOMContentLoaded", () => {
  let notaSelecionada = null;
  const notas = document.querySelectorAll(".navegacao button");
  const enviar = document.querySelector(".enviar");

  notas.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove seleção de todos os botões
      notas.forEach(b => b.classList.remove("selecionado"));
      // Marca o atual
      btn.classList.add("selecionado");
      // Salva a nota escolhida
      notaSelecionada = btn.textContent;
    });
  });

  enviar.addEventListener("click", () => {
    if (!notaSelecionada) {
      alert("Por favor, selecione uma nota antes de enviar!");
      return;
    }

    localStorage.setItem("nota", notaSelecionada);
    window.location.href = "success.html"; // página de resultado
  });
});
