# vuejs-game-version - Setup para rodar localmente caso você queira

### Project setup - Instala dependências do projeto
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Estruturação do projeto:

> Link para acessar o jogo: [Game Of Life Vue](https://lukemariano.github.io/coding-game-of-life/)

* O projeto está dividido em componentes para melhor divisão do código e tarefas;
* Inicialmente o projeto possui uma View responsável pela tela inicial que o usuário verá, que chamará as demais funções presentes nos demais componentes de acordo com a interação do usuário;
* O projeto possui um componente responsável por gerar o tabuleiro, um controlador para iniciar ou pausar o game, um componente responsável pela criação das células, um componente para a criação da navbar e por fim um componente para mostrar status de criação de células de acordo com a interação do usuário;
* Variáveis como "scenario" foram criadas para futuras features a serem implementadas no código, como por exemplo fornecer cenários aleatórios com padrões pré definidos para iniciar o jogo;
