
# Style Guide – Componente de Classificação Interativa

## 🎨 Paleta de Cores

| Cor                      | HEX / HSL                    | Uso                                |
| ------------------------ | ---------------------------- | ---------------------------------- |
| Preto profundo           | `#000000` / `hsl(0, 0%, 0%)` | Fundo do `body`                    |
| Container principal      | `hsl(213, 19%, 18%)`         | Fundo da caixa central             |
| Botões inativos          | `hsl(214, 14%, 34%)`         | Botões de nota não selecionados    |
| Botões ativos / hover    | `hsl(25, 97%, 53%)`          | Botão selecionado ou hover         |
| Texto secundário         | `hsl(217, 12%, 63%)`         | Parágrafos e descrições            |
| Badge / destaque de nota | `hsl(25, 88%, 55%)`          | Página de sucesso – nota escolhida |
| Fundo badge / span       | `hsl(213, 12%, 29%)`         | Background de span que mostra nota |

---

## 🖋 Tipografia

* **Fonte principal:** `Overpass`, sans-serif (Google Fonts)
* **Tamanhos usados:**

  * Título (`h2`): \~1.5rem
  * Parágrafo (`p`): \~0.9rem
  * Badge / span: 0.8rem
* **Peso:** normal e bold (`font-weight: bold` nos botões e títulos)
* **Letter spacing:** 2px nos botões para efeito visual

---

## 🖱 Botões

### Botões de nota

* Formato: círculo (`border-radius: 50%`)
* Tamanho: 55px × 55px
* Fundo: `hsl(214, 14%, 34%)`
* Texto: branco
* Hover: `hsl(25, 97%, 53%)`
* Botão selecionado: fundo branco, texto `hsl(25, 97%, 53%)`
* Cursor: pointer
* Transição: `background-color 0.3s, color 0.3s`

### Botão ENVIAR

* Formato: retangular com cantos arredondados (`border-radius: 50px`)
* Fundo: `hsl(25, 97%, 53%)`
* Hover: `hsl(25, 90%, 60%)`
* Padding: 15px
* Largura: 100%
* Cursor: pointer
* Fonte: bold, letter-spacing 2px

---

## 🗂 Layout

* **Container:** centralizado com flexbox (`display: flex; align-items: center; justify-content: center;`)
* **Responsividade:**

  * Mobile: container ocupa 80-90% da largura
  * Gap entre botões reduzido para telas menores (`gap: 7px` em max-width 400px)
* **Alinhamento:** textos centralizados (`text-align: center`)
* **Padding interno:** 30px no container para espaçamento confortável

---

## 📏 Componentes

### Header

* Imagem: padding-bottom 5%
* Título (`h2`) centralizado
* Parágrafo: cor secundária e margem inferior 10%

### Navegação

* Botões distribuídos horizontalmente com `flex`
* Espaçamento entre botões: 15px, flex-wrap: wrap para mobile

### Página de sucesso

* Badge / span exibindo a nota selecionada
* Fundo do span: `hsl(213, 12%, 29%)`, texto: `hsl(25, 88%, 55%)`
* Padding: 5px 15px
* Border-radius: 10px

---

## 🖌 Efeitos visuais

* Hover e seleção com transições suaves
* Box-shadow no container (opcional, para profundidade)
* Animação leve de hover nos botões (scale ou translate)

---

## ⚙ Boas práticas

* Uso de flexbox para centralização
* Uso de media queries para responsividade
* Botões `<button>` para acessibilidade
* Uso de `DOMContentLoaded` e `window.load` para carregamento seguro do JS

