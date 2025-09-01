
# Componente de Classificação Interativa 🚀
> Projeto que permite ao usuário selecionar uma nota de 1 a 5 e ver a confirmação na página de sucesso.

![Status do Projeto](https://img.shields.io/badge/status-concluído-green)
![Tecnologias](https://img.shields.io/badge/tecnologias-HTML%2CCSS%2CJS-blue)

---

## 📌 Descrição
Este projeto é um componente de avaliação interativa desenvolvido em HTML, CSS e JavaScript.  
O usuário seleciona uma nota de 1 a 5 e, ao clicar em **ENVIAR**, a nota escolhida é exibida em uma página de confirmação.

---

## 🛠 Tecnologias
- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Google Fonts (Overpass)

---

## 📂 Estrutura de Pastas
```

/projeto-avaliacao/
│
├─ index.html              # Página principal com a avaliação
├─ success.html            # Página de confirmação de envio
│
├─ src/
│   ├─ css/
│   │   ├─ style.css       # Estilos da página de avaliação
│   │   └─ success.css     # Estilos da página de sucesso
│   │
│   ├─ js/
│   │   ├─ index.js        # Lógica de seleção e envio da nota
│   │   └─ success.js      # Lógica de exibição da nota na página de sucesso
│   │
│   └─ img/
│       ├─ icon-star.svg
│       └─ illustration-thank-you.svg

```

---

## ⚙ Como Usar
1. Abra `index.html` no navegador.  
2. Clique em um número de 1 a 5 para selecionar sua nota.  
3. Clique no botão **ENVIAR**.  
4. Você será redirecionado para `success.html`, onde verá a nota que selecionou.  

---

## 🔧 Funcionalidades
- Seleção de nota de 1 a 5 com destaque visual do botão selecionado.  
- Validação para garantir que o usuário selecione uma nota antes de enviar.  
- Armazenamento da nota no `localStorage`.  
- Página de sucesso exibindo a nota escolhida.  
- Responsivo para dispositivos móveis.  
- Transições suaves e interação visual.

---

## 🎨 Personalização
- Cores e fontes podem ser alteradas nos arquivos CSS.  
- Para mudar a tipografia, atualize o link do Google Fonts no HTML.  

---

## ✅ Boas práticas implementadas
- Uso de `DOMContentLoaded` e `window.load` para carregar o JS corretamente.  
- Botões `<button>` para acessibilidade.  
- Responsividade com media queries.  
- Transições suaves para hover e seleção.  

---

## 📄 Licença
