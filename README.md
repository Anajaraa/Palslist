# Meus Pals — Checklist do Palworld

Landing page pessoal para acompanhar quais Pals do **Palworld** você já capturou.
Feita com **HTML, CSS e JavaScript puros** (sem frameworks, sem build, sem
dependências externas) — basta abrir o `index.html` no navegador.

## Ideia do projeto

A lista completa de Pals veio do arquivo `checklist.docx` deste projeto
(295 Pals únicos, em ordem alfabética, consolidados a partir das listas do
Palworld.gg — "Geleia do Arco-íris" foi removida da lista por ser duplicata
de "Rainbow Slime"). Em vez de marcar `☐` manualmente num documento, a ideia
é ter uma versão interativa no navegador:

- Cada Pal vira um item de checklist com um botão de "capturado" e, ao lado,
  um contador de quantidade (`–` `N` `+`) para dizer quantos você já pegou
  daquele Pal (ex: 3 Flopie). Marcar o ✓ define a quantidade como 1; ajustar
  o contador para 0 desmarca o Pal automaticamente.
- O progresso (quantas espécies diferentes já foram marcadas) é calculado
  automaticamente e mostrado numa barra de progresso, junto com uma
  mensagem que muda conforme a porcentagem completa (0%, "indo bem",
  "quase lá", 100% etc).
- A pontuação soma a quantidade de cada Pal capturado × 10 pts — ou seja,
  3 Flopie somam 30 pts à pontuação total. Ela aparece sempre no topo da
  página, toda vez que ela é reaberta.
- No primeiro acesso, a página pede o nome do jogador antes de liberar o
  checklist. O nome fica salvo e aparece na barra superior nas próximas
  visitas (com opção de trocar depois, pelo ícone de lápis).
- Dá para buscar um Pal pelo nome e filtrar por **Todos / Capturados / Faltando**.

Tudo — nome do jogador e status de cada Pal — é salvo no `localStorage` do
navegador. Não existe backend, banco de dados ou envio de dados para
nenhum servidor: o progresso é local, do seu navegador, nesse computador.

## Como usar

1. Abra `index.html` no navegador (duplo clique ou "Abrir com" o navegador).
2. Digite seu nome na tela inicial e clique em "Começar aventura".
3. Marque (✓) os Pals que você já capturou no jogo e ajuste a quantidade
   capturada de cada um pelo contador `–`/`+` ao lado.
4. Use a busca ou os filtros para encontrar Pals específicos ou ver só o
   que ainda falta capturar.
5. Feche e reabra a página quando quiser — nome, progresso e pontuação
   continuam salvos automaticamente.

## Estrutura dos arquivos

| Arquivo         | Função                                                          |
|-----------------|------------------------------------------------------------------|
| `index.html`    | Estrutura da página (modal de nome + layout do checklist)       |
| `style.css`     | Visual (gradientes pastel, cards, barra de progresso, checkboxes)|
| `script.js`     | Lista dos 295 Pals + lógica de checklist, busca, filtros e localStorage |
| `checklist.docx`| Lista original em Word que serviu de base para os dados          |

## Dados salvos no `localStorage`

- `meusPals.playerName` — nome digitado no primeiro acesso.
- `meusPals.progress` — objeto JSON com a quantidade capturada de cada Pal,
  por exemplo `{ "Lamball": 1, "Flopie": 3 }`. Pals com quantidade 0 não
  entram no objeto.

Se quiser resetar todo o progresso, basta limpar os dados do site pelo
navegador (ou rodar `localStorage.clear()` no console).

## Observações

- Os Pals estão numerados (`#1`, `#2`, ...) conforme a posição na lista
  alfabética do `checklist.docx` — **não** é o número oficial do Paldeck
  do jogo, já que o arquivo original não trazia essa numeração.
- Como o projeto não usa nenhuma biblioteca externa nem imagens do jogo,
  cada Pal é representado por um avatar colorido com as iniciais do nome.
