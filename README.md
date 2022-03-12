<img src="https://i.imgur.com/6q2AiRg.png" width="500">

# Introdução

Olá! Obrigado pelo interesse em participar do nosso processo seletivo para dev frontend no [Promobit](https://www.promobit.com.br/).

O objetivo do desafio proposto é permitir uma melhor avaliação das suas habilidades como candidato à vaga de frontend. Este desafio deve ser feito apenas por você. Sua implementação e escolha de ferramentas poderá ser questionada em outra etapa.

## O desafio

Usando a API de filmes gratuita [themoviedb](https://developers.themoviedb.org/3/getting-started/introduction) em sua versão 3, você será responsável por criar uma listagem dos filmes mais populares do dia, consultando o endpoint [`GET /movie/popular`](https://developers.themoviedb.org/3/movies/get-popular-movies) para realizar a listagem. Ao clicar em um item dessa listagem, outra página com os detalhes do filme escolhido deve ser exibida. Para acessar mais detalhes sobre o filme, você pode consultar o endpoint [`GET /movie/{movie_id}`](https://developers.themoviedb.org/3/movies/get-movie-details).

Para garantir que o usuário encontre o filme que está procurando, essa lista deverá ser paginada.

Siga o [layout do figma](https://www.figma.com/file/rM7WPqhLY9ObnGzSCeWLxB/Teste-Front-End) sugerido. Não há necessidade de ser pixel perfect mas respeite a composição, fontes e cores.

## Requisitos funcionais

- [x] O usuário deve ter acesso a uma listagem dos filmes mais populares do dia

- [x] O usuário deve conseguir paginar a lista para encontrar novos filmes

- [x] O usuário deve ter acesso a uma outra página com detalhes sobre o filme, ao clicar em um item na listagem

- [x] A página com detalhes de um filme deve possuir uma rota própria e estar preparada para ser indexada em mecanismos de pesquisa

## Requisitos não funcionais

- [x] Na raiz do projeto, será necessário incluir um arquivo `README.md` com as instruções para construir seu projeto localmente. Opcionalmente você pode detalhar as razões pelas escolhas de ferramentas e técnicas aplicadas ao desafio.

- [x] O app deverá se comportar da mesma forma na última versão estável dos seguintes browsers: Chrome, Firefox, Edge

- [x] O app deverá ser responsivo

## Extras

Temos insights que nos levam a acreditar que os usuários dessa lista costumam ter uma experiência melhor se conseguirem criar um filtro usando seus gêneros favoritos. Portanto, você também poderá criar filtros de filmes por gênero nessa listagem. Note que um novo endpoint deverá ser consultado para obter uma lista dos possíveis gêneros a serem filtrados, [`GET /genre/movie/list`](https://developers.themoviedb.org/3/genres/get-movie-list).

- [x] O usuário deve conseguir filtrar os filmes listados por gênero, com a possibilidade de usar mais de um gênero
- [x] O usuário deve conseguir remover filtros e a listagem deve ser atualizada de acordo com o filtro removido
- [ ] O usuário deve conseguir voltar para a página de listagem de filmes com os filtros ainda ativos

## Critérios de avaliação

- Boas práticas de desenvolvimento como: html semântico, componentização, design patterns, clean code
- Domínio das ferramentas e linguagens que compõe um app de frontend moderno
- Documentação: explicação para construir o app localmente, histórico e workflow de git

## Construção do Projeto

```bash
# Execute o comando git clone para realizar o clone do repositório
$ git clone https://github.com/SidneyRoberto9/tmdb-desafio-promobit-angular.git

# Entre na pasta do repositório clonado
$ cd tmdb-desafio-promobit-angular

# Execute yarn para instalar as dependências
$ yarn

# Na raiz do projeto crie um arquivo .env e crie uma variavel chamada
#API_KEY e coloco sua chave do TMDB

# Para iniciar a aplicação
$ yarn start
```

Feito com :heart: by <a href="https://github.com/SidneyRoberto9" target="_blank">Sidney Roberto</a>
