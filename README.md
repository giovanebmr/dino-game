# dino-game
Recriando um jogo de dinossauro com base nas aulas da Digital Innovation One.

## Tutorial 1: Como colocar uma variável contador ou score no jogo?
Siga os roteiro abaixo.


1º - Identificar qual é a condição para a pontuação do jogo ser incrementada.

Se o gato pular. (Evento 1)



2º - Criar uma variável de escopo global para armazenar a pontuação, por exemplo:
```
  let score = 0;
```

3º - Verificar se já existe uma função definida capaz de verificar a ocorrência do Evento 1.

Se existir, dentro dessa função incremente a variável score a cada ocorrência desse evento, exemplo:
```
  let score = 0;

  function pular(){
    //demais códigos...
    score++;
  }
```    
Se não existir, faça uma função específica para verificar a ocorrência desse Evento 1 (ou qualquer outro evento escolhido por você), dentro dessa nova função incremente a variável score a cada ocorrência desse evento, conforme o exemplo anterior.



4º Para exibir na tela, no seu arquivo html, você pode definir uma div específica para exibir a pontuação.
```
  <div class="score"></div>
```

Essa div deve ser colocada no seu arquivo html, por exemplo:

```
  <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <link rel="stylesheet" href="style.css"></link>
      <script src="script.js" charset="UTF-8" defer></script>
    </head>
        <body>
            <div class="score"></div>
            <div class="background">
              <div class="gato"></div>
            </div>
        </body>
  </html>
```

5º No arquivo javascript você pode atualizar o texto contido na div acessando a propriedade textContent, de qualquer nó escolhido, exemplo:
```
  document.querySelector('.score').textContent = 'SCORE: ' + score ;
```

6º Melhorar o código definindo funções para realizar estas ações, exemplo:
```
  function createScore(){
    document.querySelector('.score').textContent = 'SCORE: ' + score ;
  }

  function upDateScore(){
    score++;	
    createScore();
  }
```

7º Juntando tudo:
```
  let score = 0;

  function createScore(){
    document.querySelector('.score').textContent = 'SCORE: ' + score ;
  }

  function upDateScore(){
    score++;	
    createScore();
  }

  function pular(){
    //demais códigos...
    upDateScore();
  }

  //demais códigos...
  createScore();
```

Dessa forma, sempre que o gato pular a variável escore será incrementada e seu valor será atualizado na tela.



Compreendendo bem esses princípios podemos partir para inúmeras possibilidades mais complexas, como por exemplo incrementar o score somente quando o gato pular um obstáculo sem colidir.





Referência: https://developer.mozilla.org/pt-BR/docs/Web/API/Node/textContent
