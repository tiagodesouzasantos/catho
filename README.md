Teste Catho
---

O repositório está separado em 2 projetos:
- front: Alocado o front-end do projeto em Angular 7
  - [Link para o front-end](https://github.com/tiagodesouzasantos/catho/tree/master/front)
- back: Alocado o back-end do projeto em Node.js
  - [Link para o back-end](https://github.com/tiagodesouzasantos/catho/tree/master/back)
___
Configurações Iniciais.
---
Para rodar esse projeto será necessário a pré instalação dos seguintes modulos.:
- [NodeJs](https://nodejs.org/en/download/)
- [Mysql](https://www.mysql.com/downloads/)
    - A configuração da base de dados deverá ser feita na parte do back end do projeto no diretório back abra o arquivo __.env__ 
        - DB_DIALECT=mysql **driver da base de dados
        - DB_HOST= host da base de dados
        - DB_DATABASE= nome da base de dados que deverá ser criada
        - DB_USERNAME= usuário para acesso a base de dados
        - DB_PASSWORD= senha do usuario
    - Certifique-se de criar a base de dados com o seguinte nome: **_catho_**, se conectado no banco basta rodar o seguinte comando.
    ```bash
    mysql> create database catho;
    ```
- [Angular cli](https://cli.angular.io/)
Feito isso vá até o diretório front e rode o seguinte comando
```batch
$ npm i
```
Feito isso será realizado o download de todas as dependencias do projeto
- Dentro da pasta do front acesse o diretório server e repita o mesmo comando. Nesse diretório está o servidor da applicação do front.
- Volte para a raiz e acesse o diretório do back e na raiz do projeto rode novamente o comando *__"npm i"__*, novamente será realizado o download de todas as dependencias.
---
Migrations
--
 Criei uma ferramenta de migrations para que antes de iniciar a aplicação a base de dados possa ser populada e a aplicação já possa ser iniciada.
Para isso siga o seguinte passo.:
- Vá até o diretório do back e rode o seguinte comando.:
```bash
npm run migrations
```
Feito isso as tabelas serão criadas e populadas.

---
Iniciando projetos
---
Para rodar o projeto do front vá até o diretório do _**"front/server"**_ e rode o seguinte comando:
```bash
npm start
```
Para iniciar o back vá até o diretório do back e rode o mesmo comando citado acima.

---
**@author:** Tiago Santos
