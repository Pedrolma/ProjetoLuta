# Projeto Luta

Jogo de luta simples feito com HTML, CSS e JavaScript. Dois lutadores aparecem na tela, cada um com barra de vida e um botão de ataque. Quem zerar a vida do outro vence.

## Personagens

Todos os lutadores têm: **nome**, **vida**, **ataque** e **defesa**.

| Personagem | Vida | Ataque | Defesa | Estilo |
|---|---|---|---|---|
| Cavaleiro (`createKnight`) | 100 | 9 | 5 | Equilibrado |
| Mago (`createWizard`) | 85 | 15 | 3 | Mais dano, menos defesa |
| Monstro pequeno (`littleMonster`) | 79 | 10 | 3 | Mais fraco |
| Monstro grande (`bigMonster`) | 125 | 7 | 5 | Mais vida, menos dano |

Na partida atual, o herói é o cavaleiro **Jaiminho** e o inimigo é o **monster little**. Isso está definido em `assets/javascript/script.js`. Para trocar, altere as funções de criação, por exemplo:

## Ideia principal do código

Há um modelo base (`defaultCharacter`) e funções que copiam esse modelo com números diferentes (cavaleiro, mago, monstros).

O objeto `stage` é o “ringue”:

1. Guarda os dois lutadores e os elementos HTML de cada um.
2. Escuta o clique em **Attack**.
3. Calcula ataque e defesa com um número aleatório entre 0 e 2.
4. Atualiza o HP e o tamanho da barra.

Se um lutador já estiver com 0 de vida, o ataque não acontece.

