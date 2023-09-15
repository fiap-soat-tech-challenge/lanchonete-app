<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center">Este é uma projeto é um projeto para uma sistema para uma lanchonete usando as melhores práticas de arquitetura de software.</p>
  <p align="center">
    <a href="https://nodejs.org/en" target="_blank"><img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.JS" /></a>
    <a href="https://www.typescriptlang.org" target="_blank"><img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="Typescript" /></a>
    <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white" alt="NPM Version" /></a>
    <a href="https://www.postgresql.org" target="_blank"><img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" /></a>
    <a href="https://www.docker.com" target="_blank"><img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" /></a>
  </p>
</p>


<!-- TITULO DO PROJETO -->
<br />
<div align="center">
  <h3 align="center">Lanchonete</h3>
</div>



<!-- TABELA DE CONTEUDOS -->
<details>
  <summary>Tabela de conteúdos</summary>
  <ol>
    <li>
      <a href="#começando">Começando</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#exemplos-de-uso">Exemplos de uso</a></li>
    <li><a href="#roteiro">Roteiro</a></li>
  </ol>
</details>


<!-- COMECANDO -->
## Começando

Para executar o projeto localmente siga as próximas etapas.

### Pré-requisitos

* Docker com compose
  Veja a [documentação](https://docs.docker.com/engine/install/) para instalar o docker no seu sistema se ainda não tiver instalado.
* NodeJS no mínimo na versão 16. Recomendado a versão 18 (LTS) disponível no [site oficial](https://nodejs.org/en).

### Instalação

A instalação é bem simples, siga as seguintes etapas:

1. Clone o repositório
   ```sh
   git clone https://github.com/jonilsonds9/lanchonete.git
   ```
2. Entre na pasta do projeto
   ```sh
   cd lanchonete
   ```
3. Crie um arquivo novo arquivo com as váriaveis de ambiente `.env` usando o `.env.example`
   ```sh
   cp .env.example .env
   ```
4. Agora execute o projeto usando o docker compose
   ```sh
   docker compose --profile=all up
   ```

<p align="right">(<a href="#readme-top">Voltar para o topo</a>)</p>

<!-- Aplicação de pagamento (mock) -->
## Aplicação de pagamento (mock)

Este sistema conta com uma aplicação externa que realiza os pagamentos, de forma mockada, visando apenas dar suporte ao fluxo da aplicação principal.

<!-- EXEMPLOS DE USO -->
## Exemplos de uso

### Para acessar a home da API
- http://localhost:3000/

Nessa página você terá o link para a documentação (Swagger) e poderar utilizar toda a aplicação!

### Para acessar o Swagger UI use uma das seguintes URLs
- http://localhost:3000/api/docs

### Health Check
    http://localhost:3000/health

A resposta deve seguir o seguinte formato:

```json
{
  "status": "ok",
  "info": {
    "database": {
      "status": "up"
    },
    "gateway-pagamento": {
      "status": "up"
    }
  },
  "error": {
    
  },
  "details": {
    "database": {
      "status": "up"
    },
    "gateway-pagamento": {
      "status": "up"
    }
  }
}
```

<p align="right">(<a href="#readme-top">Voltar para o topo</a>)</p>

<!-- KUBERNETES -->
## Kubernetes

Os arquivos .yml com todas as instruções de cluster estão no diretório:

```
|- kubernetes
```

<!-- ROTEIRO -->
## Roteiro

- [x] Começando o projeto
- [x] Dockerização
- [x] Documentação

<p align="right">(<a href="#readme-top">Voltar para o topo</a>)</p>

