    # Componente de Classificação Interativa

## Descrição

Este projeto é um **componente de avaliação interativa** desenvolvido em HTML, CSS e JavaScript. Ele permite que o usuário selecione uma nota de 1 a 5 e veja a confirmação da nota escolhida em uma página de sucesso.

É ideal para formulários de feedback, suporte ou qualquer cenário que precise de uma avaliação rápida do usuário.

---

## Funcionalidades

* **Seleção de nota de 1 a 5** com destaque visual do botão selecionado.
* **Validação** para garantir que o usuário selecione uma nota antes de enviar.
* **Armazenamento local (localStorage)** da nota selecionada.
* **Página de sucesso** mostrando a nota selecionada.
* **Responsividade** para dispositivos móveis.
* **Interações visuais suaves** com hover e transições.

---

## Estrutura do Projeto

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
│   └─ img/                # Imagens usadas no projeto
│       ├─ icon-star.svg
│       └─ illustration-thank-you.svg
```

---

## Tecnologias Utilizadas

* **HTML5** para estrutura semântica.
* **CSS3** para estilos, responsividade e interações visuais.
* **JavaScript (Vanilla JS)** para lógica de seleção, envio e persistência de dados.
* **Google Fonts** (Overpass) para tipografia personalizada.

---

## Como Usar

1. Abra o arquivo `index.html` no navegador.
2. Clique em um número de 1 a 5 para selecionar sua nota.
3. Clique no botão **ENVIAR**.
4. Você será redirecionado para `success.html`, onde verá a nota que selecionou.

---

## Boas práticas implementadas

* Uso de **`DOMContentLoaded`** e **`window.load`** para garantir que o JS só rode após o HTML ser carregado.
* **Validação de seleção** antes do envio.
* **Responsividade** com media queries para dispositivos móveis.
* **Transições suaves** para hover e feedback visual.
* **Acessibilidade**: uso de `<button>` e destaque de seleção via classes.

---

## Observações

* O projeto não depende de frameworks externos.
* Para personalizar as cores, basta alterar as propriedades HSL no CSS.
* O projeto utiliza **localStorage**, então o dado ficará armazenado no navegador até ser apagado manualmente.
