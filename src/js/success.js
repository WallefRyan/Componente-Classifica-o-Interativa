window.addEventListener("load", () => {
  const spanResultado = document.getElementById("resultado");
  if (spanResultado) {
    const nota = localStorage.getItem("nota");
    spanResultado.textContent = `Você selecionou ${nota} de 5`;
  }
});
