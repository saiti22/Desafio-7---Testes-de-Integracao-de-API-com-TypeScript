Para a execução dos testes via Jest, deve-se primeiramente criar um arquivo ".env" com as variáveis de ambiente com os devidos valores para seu ambiente.
Sendo elas:
  DB_HOST=''
  DB_USER=''
  DB_PASSWORD=''
  DB_DATABASE=''

Para os testes de rota, foi criado um arquivo "route.rest" com um Get e um Post.

Alterei também a função de Post para não aceitar valores vazios.
