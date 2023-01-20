# Seja bem-vindo ao <span style="color:yellow; font-weight:bold"> Life Game versão Python </span> do Luquinhas banco de lifes!

## Setup para rodar o jogo:

Não é necessário nenhum setup para rodar o projeto!
Apenas digite no terminal: ```python3 game.py```

## A lógica por trás do algoritmo:

> Disclaimer: tentei deixar o código totalmente documentado para que você consiga entender cada etapa do mesmo.

Podemos dividir a lógica de elaboração do código em 3 etapas:
* 1º Etapa - Criando o tabuleiro via terminal:
    * Nessa etapa, foram definidas variáveis responsáveis pelo dimensionamento do tabuleiro: WIDTH e HEIGHT;
    * Assim, criamos loops aninhados com as variáveis WIDTH(linha) e HEIGHT(coluna)  para gerar linhas e colunas do tabuleiro do nosso game;
    * Cada iteração cria aleatoriamente células vivas e mortas para o nosso tabuleiro inicial. Vale lembrar que também testei padrões conhecidos do game para verificar se o comportamento gerado pelo código estava conforme o esperado, e estava;
    * Optei por não usar emojis porque gostei mais do resultado assim (desculpe ser homem :P);
    * Por fim, gostaria de dizer que você pode alterar as dimensões inicias do tabuleiro da forma que preferir alterando as variáveis de linha e coluna citadas anteriormente!

* 2º Etapa - Gerando novas células com as regras do jogo:
    * Primeiramente criamos uma cópia do tabuleiro inicial que possui células vivas e mortas para que possamos exibir o tabuleiro corretamente no terminal. Não se esqueça que as células vivas são "#" e as mortas são ".";
    * Então a partir dessa cópia do tabuleiro, fazemos as verificações das regras do jogo, partindo do estado inicial do jogo;
    * Contamos primeiro a quantidade de vizinhos de uma célula e em seguida as regras para a célula continuar viva ou não são aplicadas;
    * No final do loop que faz a verificação, o estado do tabuleiro é alterado para um novo estado com as verificações das regras do jogo aplicadas corretamente;
    * Assim, o próximo loop será em cima do novo estado alterado;

* 3º Etapa - Divirta-se!
    * Você pode encerrar o jogo a qualquer momento usando a tecla: Ctrl + C;