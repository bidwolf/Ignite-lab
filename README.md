# Ignite-lab

Desenvolvendo uma aplicação para plataforma de ensino voltada para eventos

## Tecnologias utilizadas

---

![Typescript](https://img.shields.io/badge/-Typescript-3178C6?logo=typescript&logoColor=white&style=for-the-badge)

![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?logo=graphql&logoColor=white&style=for-the-badge)

![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge)

![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=for-the-badge)

![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white&style=for-the-badge)

![PostCSS](https://img.shields.io/badge/-PostCSS-DD3A0A?logo=postcss&logoColor=white&style=for-the-badge)

![Apollo](https://img.shields.io/badge/-Apollo-311C87?logo=apollographql&logoColor=white&style=for-the-badge)

![Vercel](https://img.shields.io/badge/-Vercel-000000?logo=vercel&logoColor=white&style=for-the-badge)

---

## Aula 01

Na aula do dia 20/06/2022 foi feito o setup do projeto com todas as tecnologias utilizadas para o desenvolvimento e produção da aplicação.

### Dependências instaladas

Nome|Função|Exemplo de uso|tipo de dependência
:---:|:---:|:---:|:---:
vite|Scaffolding de criação de projetos frontend| `npm create vite@latest` |Dependência de desenvolvimento
Typescript|Superset criado para adicionar tipagem ao javascript| `interface ReceitaDeBolo{nome:string;autor:string;}` |Dependência de desenvolvimento
React|Biblioteca pensada para facilitar a criação de interfaces gráficas e aplicações web| `import React from 'react'` |Dependência de produção
graphQl|Gerencia queries de conexão com um banco de dados baseado em graphQl| |Dependência de produção
TailwindCSS|Gerar css de forma prática| `npx tailwind init -p` |Dependência de desenvolvimento
PostCSS|Ferramenta para automatizar tarefas no css| `plugins: {tailwind{},autoprefixer{}}` |Dependência de desenvolvimento
autoprefixer| | | Dependência de desenvolvimento
apollo|Fazer requisições em API graphQl| `const{data}=useQuery(GET_LESSONS_QUERY)` |Dependência de produção

### Notas sobre o IGNITE LAB

O Tailwind vai ajudar a estilizar a nossa aplicação e adicionar (like a bootstrap) responsividade.

Caso seja necessário, podemos utilizar no próprio CSS usando o postCSS a funcionalidade **Apply** pra gerar códigos css mais bem organizados:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

.titulo {
    @apply bg-zinc-800 text-zinc-100
}
```

Onde serão utilizadas as estilizações provindas do Tailwind 

> Será necessário importar o `global.css` no `main.tsx`

### Conceitos básicos graph CMS

* CMS = Content Management System

* Bom para tornar o conteúdo gerenciável pelo cliente

* Headless CMS: Traz apenas o painel de administração (dados fornecidos pela API REST ou pelo graphQL)

* React consome os dados da api ou do CMS

* Slug é uma versão do título adaptada pra url :(sem acentos, em lowerCase etc.)

#### Exemplo básico de relacionamento entre entidades no graph CMS

Uma aula, ou lição deve possuir um e apenas um título, e um título pode pertencer apenas a uma lição, entretanto outras aulas podem possuir um título igual(exemplo de aulas atualizadas).

> Com base nisso criamos no modelo, uma entidade chamada Lesson, que possui uma propriedade Title do tipo string com texto de linha única obrigatório mas que não possui a tag unique.

#### Adicionando um novo campo ou editando um existente

A direita do graphCMS tem muitos tipos de campos diferentes para adicionar a entidade de forma facilitada.

Além disso podemos editar um campo existente, adicionar relações entre outras entidades

#### Adicionando dados ao GraphCMS

Pra adicionar um dado de uma entidade, é bem simples, basta ir em content, selecionar a entidade, depois clicar em go to content editing, adicionar os campos e clicar em salvar e publicar para publicar diretamente uma edição/adição no banco de dados.

#### sobre requisições de apis graphQL

* Toda api é gerada automaticamente

* Só serão feitas em graphQL e não em REST

* Só existem dois tipos de solicitações em graphQL que são:
    - Mutation: Altera, exclui ou cria informações
    - Query: Buscar informações

##### Vantagens

Em uma única requisição, é possível buscar diversos dados no back-end, além de ser possível estipular quais dados serão necessários na requisição, dando a responsabilidade de solicitação apenas para o front-end, onde o que é solicitado é sempre fornecido, nem mais nem menos, removendo as possibilidades de *under-fetching* ou *over-fetching*.

* Under-fetching: Back-end retorna menos informações do que o necessário

* Over-fetching: Back-end retorna mais informações do que o necessário

#### Configurando o graphCMS na aplicação

Uma vez criado um projeto, ou clonado, pode dar uma olhada no schema que fica a esquerda, onde estarão os relacionamentos do seu banco de dados, você pode editar os dados seguindo o que foi dito [acima](#adicionando-dados-ao-graphcms), mas considerando que todas as informações já estão no banco, basta agora copiar a Url da API e utilizar ela na sua aplicação.

##### Fazendo chamada api sem usar apolo

Entretanto, se você for do tipo que não instala qualquer dependência, você pode consumir os dados da api no react usando o framework `axios` ou o próprio `fetch` do node da seguinte forma:

```ts
import { useEffect } from "react"
const API_URL:string=process.env.API_URL || "https://api-sa-east-1.graphcms.com/v2/cl4oenrc924cn01xiezv89e0m/master"
function App() {
  useEffect(() => {
    fetch(API_URL, {
      method: "POST",
      body: 
        `query{...dados usados na requisição}`
      
  })
},[])
  return (
     <h1 className="text-5xl font-bold text-violet-500">Hello World</h1>
  )
}

export default App

```

##### Instalando o apollo

Para consumo da api no ignite adicionamos uma nova dependência para efetuar essas chamadas da api, chamada **apolo**.

Para instalar o apollo basta executar o comando :

 `npm i @apollo/client `

> Para utilizar é necessário já ter o graphQl instalado, se não tiver instale

###### Configurando o apollo

1. Crie um diretório chamado lib, e adicione um arquivo chamado `apollo.ts`

2. Adicione o seguinte script a ele:

```ts

import { ApolloClient, InMemoryCache } from "@apollo/client";
const API_URL: string = process.env.API_URL || "https://api-sa-east-1.graphcms.com/v2/cl4oenrc924cn01xiezv89e0m/master"; 
export const client = new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache()
})

```

3. Onde estiver efetuando o consumo dos dados na api adicione o import do client do apolo:

```ts
import {client} from "./lib/apollo"
```

4. Adicione a query da consulta da seguinte forma para garantir a sintaxe highlight no vscode:

```ts
const GET_ENTITY_QUERY=gql`

query{
  lessons{
    id
    title
  }
}
`

```

5. Consuma esses dados através do useEffect

```ts
useEffect(() => {
    client.query({
      query: GET_LESSONS_QUERY
    }).then(response=>{console.log(response.data)})
   },[])
```

Que deverá imprimir no console do navegador os dados consultados.

##### Usando REACT HOOKS / CONTENT API com o apollo

Primeiramente editamos o arquivo `main.tsx` pra adicionar comportamentos ao nosso componente App com base na content API adicionando o context-provider ApolloProvider:

```ts
import {ApolloProvider} from '@apollo/client' // importa o apollo provider
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { client } from './lib/apollo'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode> // Adiciona o apollo provider como context provider do app
    <ApolloProvider client={client}>// obrigatoriamente possui a propriedade client que é o arquivo que configuramos inicialmente
      <App />
    </ApolloProvider>
  </React.StrictMode>
)

```  
Em seguida dentro do contexto do componente, fazemos a importação do *hook* useQuery do apolo e adicionamos o hook ao componente:

```ts
import {useQuery} from "@apollo/client"
/*

dentro do componente

*/
const {data}=useQuery(GET_LESSONS_QUERY)
```

---

## Aula 02

Na aula do dia 21/06/2022 foi feito o setup do projeto com todas as tecnologias utilizadas para o desenvolvimento e produção da aplicação.

### Dependências instaladas

Nome|Função|Exemplo de uso|Tipo de dependência
:---:|:---:|:---:|:---:
date-fns|Trabalhar com datas| `const isAvailable=isPast(props.availableAt)` |Dependência de produção
phosphor-react|SVG como componente react| `<CheckCircle size={20}/>` |Dependência de produção

### Personalizando as configurações do TailwindCSS

No arquivo de configuração do Tailwind, podemos incluir novas estilizações de acordo com nossas necessidades, para isso editamos a propriedade `extend` da propridade `themes` no arquivo `tailwind.config.js` , por exemplo, para um background e uma fonte personalizada basta adicionar o seguinte código:

```js
// arquivo de configuração do tailwind
{
    theme: {
        extend: {
            backgroundImage: {
                blur: 'url(/src/assets/bg-main-page.png)'
            },
            fontFamily: {
                sans: 'Roboto,sans-serif',
            },
        }
    }
}
```

> No nosso layout devemos adicionar as cores e backgrounds especificados no Figma.

#### Adicionando uma fonte personalizada

Para adicionar uma fonte personalizada que não é utilizada por padrão precisamos pegar o código da fonte gerado pelo *googleFonts* por exemplo e colar na aba de metadados do nosso arquivo `index.html` , que está na raiz do projeto.

> Depois adicione a configuração no `tailwind.config.js`

### Separando componentes a partir do layout

Ao codar qualquer solução usando reactJS, precisamos primeiramente pensar se determinado elemento do layout se repete no layout, ou se ele pode ser desacoplado da nossa aplicação.

> Um componente pode ser desacoplado quando sua funcionalidade não influencia nos outros elementos do layout.

Recomenda-se criar uma pasta dentro de src para separar esses componentes (normalmente `/components` )

### Páginas

Pensar que nossa aplicação pode possuir várias páginas é de suma importância, pois precisamos pensar na forma como o usuário vai interagir com a nossa aplicação, nesse caso, aplicações de várias rotas necessitarão fornecer diferentes páginas.

Ao desenvolver aplicações em react, é necessário lembrar que todo o conteúdo que será apresentado na nossa aplicação será incluído no arquivo `app.tsx` logo, se a aplicação possuir várias páginas elas têm de ser fornecidas de forma separada ***(Como se fossem componentes)***. Portanto separamos as páginas da aplicação em uma pasta `/pages` e criamos o layout da página conforme criamos componentes.

### Propriedades 

São formas de modificar o comportamento/visual de um componente baseado em informações passadas para o componente.

> Em typescript precisamos criar sempre uma interface para descrever as propriedades que um determinado componente deve receber

Bem simples na prática, e até útil, pois uma vez criada, podemos utilizar essas informações para ajudar a utilizar nossos componentes.

### Criando tipagem para o retorno de uma query

Para controlar as informações fornecidas pela conexão com o banco de dados, podemos criar modelos de interfaces, das quais cada query pode implementar.

Por exemplo, ao fazer uma query que solicita um endereço de um banco de dados baseado em graphQl, precisamos seguir o modelo do banco para determinar os tipos retornados pela nossa query.

```ts
import {useQuery,gql} from '@apollo/client'
// seguindo implementação
const GET_ADDRESS_BY_USERNAME_QUERY = gql_QUERY`
query getAddressByUserName($userName:string){
  address(where:{userName:$userName})street
  houseNumber
  cep
  city
  state
  country
}`
interface IGetAddressQueryResponse{
  address:{

    street:string;
    houseNumber:number;
    cep:string;
    city:string;
    state:string;
    country:string;
  }
interface StreetComponentProps{
  userName:string;
}
}
export function StreetComponent(props:StreetComponentProps){
  const {data}=useQuery<IGetAddressQueryResponse>(GET_ADDRESS_BY_USERNAME_QUERY,{
    variables:{
      userName:props.userName
    }
  })
// ... more details  about component
}

```

## Aula 03

Na aula do dia 23/06/2022 foi finalizada a estilização da página de eventos e adicionada a lógica adotada para criação de rotas usando React Routes.

### Dependências instaladas

Nome|Função|Exemplo de uso|tipo de dependência
:---:|:---:|:---:|:---:
@Vime/react|Inclusão de players de vídeo personalizados como componentes| `import { Player, Youtube } from "@vime/react";` |Dependência de produção
react-router-dom|utilização de rotas com react| `import { Routes,Route } from "react-router-dom";` |Dependência de produção

### Criando rotas usando react

Para criar rotas usando react é necessário instalar a dependência ***react-router-dom***.

Feito isso podemos criar novas rotas criando um componente chamado `Router.tsx` na raiz do projeto.
Nesse componente deve conter o seguinte código base:

```tsx
import { Routes,Route } from "react-router-dom";
import Event from "./pages/Event";
import Subscribe from "./pages/PageComponent";

export default function Router( ) {
    return (
        <Routes>
          <Route 
            path="/" // Caminho acessado no navegador para ir até a rota.
            element={<PageComponent/>} // componente de página a ser renderizado quando o usuário acessar o path na url.
          ><Route/>
        </Routes>)
}

```

Além disso, é necessário fazer uma alteração no arquivo `App.tsx` e incluir o React ***contextProvider*** `BrowserRouter ` que provém para todos os seus elementos filhos a possibilidade de prover rotas, links relativos e etc.

```tsx
import { ApolloProvider } from "@apollo/client"
import { BrowserRouter} from "react-router-dom"
import { client } from "./lib/apollo"
import Router from "./Router"
function App() {
  
  return (
    <div>
      <ApolloProvider client={client}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
      </ApolloProvider>
    </div>
  )
}

export default App

```

### Usando parâmetros url

Algumas páginas web podem fornecer conteúdos dinâmicos baseados na url do navegador. Um exemplo disso é a nossa própria aplicação, que ao acessar o `endereço-padrão/events/nome-do-evento` ele responde com a página do evento com o vídeo da aula e os dados da mesma.

Para fazer isso, é necessário incluir no arquivo `Routes.tsx` , uma sub-rota que possui um parâmetro no path, que é incluido com `:parâmetro` .

Daí, na página em que seria acessada essa informação, se adiciona o seguinte código para capturar esse parâmetro:

```ts
import {useParams}from "react-router-dom";
//...
//  dentro do componente
const {parâmetro}=useParams<{parâmetro:string}>()
```

Que vai capturar qualquer parâmetro fornecido na url e armazenar na variável parâmetro.

## Aula 04

Na aula do dia 24/06/2022 foi feita a criação da página de inscrição do evento, pelo qual é inserido no banco de dados os dados preenchidos no formulário de cadastro, garantindo ao usuário, acesso aos conteúdos disponibilizados pela aplicação.

### Dependências instaladas

Nome|Função|Exemplo de uso|tipo de dependência
:---:|:---:|:---:|:---:
dotenv|Armazenar variáveis de desenvolvimento| `import.meta.env.VITE_TOKEN_NAME` |Dependência de desenvolvimento

### Usando dados sensíveis

Em diversos momentos na construção de aplicações web precisaremos nos conectar com apis de outras aplicações, e pra isso é necessário haver uma autenticação nos dados.

Tornando então a etapa de autenticação altamente necessária para a construção das nossas aplicações, dito isso, tokens(chaves de acesso) devem ser utilizadas e armazenadas em locais seguros na nossas aplicação. Para isso usamos a dependência de desenvolvimento dotenv, para gerenciar esses dados de forma segura na nossa aplicação.

#### Adicionando variáveis de ambiente

O vite olha para os tokens da nossa aplicação através da palavra-chave VITE, no arquivo .env.local, para importar esses dados em typescript usamos o comando :

```ts
import.meta.env.VITE_TOKEN_NAME;
```

### Atualizando as configurações do apollo.ts

Nossa aplicação possui uma tela para cadastro dos alunos, onde são realizadas mutations para inserção de dados no banco.

Para que isso possa ser feito pela nossa aplicação, precisamos fornecer um token de autenticação provindo do graphCMS que nos possibilita criar e publicar dados de acordo com o que nossa aplicação necessita. Portanto, uma vez configuradas as permissões no graphCMS, basta então copiar o código token e utiliza-lo como variável de ambiente na nossa aplicação alterando o arquivo `apollo.ts` e adicionando o seguinte:

```ts
// ...configurações do ApolloClient factory
    headers:{'Authorization':`Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`},
    // ...outras configurações
    
```

### Criando mutations genéricas com useMutation

Ao criar mutations o processo é muito similar com o processo de criação de uma query, mas basicamente, use o API playground do cms pra facilitar o serviço, crie a mutation e copie o código, seguindo o padrão de fornecimento de parâmetros.

Uma vez criada basta agora adicioná-la ao código da seguinte forma:

```ts

const [createSubscriberMutation, { data, error ,loading}] = useMutation(CREATE_SUBSCRIBER_MUTATION, {
        variables: {
            name: name,
            email: email
        }
    })

```

Essa mutation só é chamada quando solicitado, no nosso caso seria chamada quando o botão de submit é acionado.

### Formulários no React

Criar um formulário em react é um pouco diferente de como é feito em html padrão, por exemplo, o próprio ts não considera correta a utilização da variável global event, de window, e portanto ao criar um evento que se relaciona com o submit do formulário, é necessária a utilização da importação da interface `FormEvent` do ***react*** para tipagem desse objeto. 

### Importação de imagens

As imagens devem ser importadas de forma diferente para que seja possível utiliza-las em produção, portanto, em qualquer imagem padrão, você deve usar a sintaxe 

```tsx
import {imgUrl} from '/diretórioRelativo-da-imagem'
<img src={imgUrl} alt="Imagem sobre desenvolvimento em reactJS" />
```

## Aula 05

Na aula do dia 25/06/2022 foi feito o setup do projeto com todas as tecnologias utilizadas para o desenvolvimento e produção da aplicação.

### Dependências instaladas

Nome|Função|Exemplo de uso|tipo de dependência
:---:|:---:|:---:|:---:
@graphql/codegen (e seus variados plugins)|Gera tipagem baseada nas queries e mutations da pasta graphql| `graphql-codegen` |Dependência de desenvolvimento

### Gerando tipagem das queries graphql

É possivel gerar todas as tipagens e funções (como useQuery/useMutation) anteriormente feitas dentro do código dos componentes, em um arquivo separado chamado `generated.ts` .

Para isso é necessário seguir os seguintes passos:
1. Criar um diretório chamado `graphql` dentro da pasta ***src***
2. Criar dois diretórios mutations e queries onde serão armazenadas as queries e mutations do nosso projeto
3. Salvar as queries e mutations de forma descritiva e com a extensão `.graphql`
4. Criar o arquivo `codegen.yml` na raiz do projeto e configurá-lo conforme abaixo:
    

```yml
    schema: https://api-sa-east-1.graphcms.com/v2/cl4oenrc924cn01xiezv89e0m/master
    documents: './src/graphql/**/*.graphql'
    generates:
      ./src/graphql/generated.ts:
        plugins:
            - typescript
            - typescript-operations
            - typescript-react-apollo
        config:
          reactApolloVersion: 3
          withHooks: true
          withHOC: false
          withComponent: false
     ```

5. usar o graphql-codegen/cli para gerar o `arquivo generated.ts` através do comando 
    

```shell
    graphql-codegen
    ```

6. Alterar os arquivos que consumiam os dados nos componentes de acordo com o exemplo a seguir:
   

```ts
   import { useGetLessonBySlugQuery } from "../graphql/generated";
    //antes faria a importação {gql,useQuery} do apollo

    // No componente:
    const {data}=useGetLessonBySlugQuery({variables:{slug:props.lessonSlug}}) //tipos já definidos no arquivo generated.
    // antes usaria
    //useQuery<interfaceBaseadaNosTipos>({variables:{slug:props.lessonSlug}})
   ```

### Configurando a vercel

Não há muito o que falar aqui, configurar a vercel é bem simples e intuitivo, então as únicas coisas que valem a pena lembrar são:

* Lembrar de colocar as variáveis de ambiente
* Adicionar o arquivo vercel.json configurando-o corretamente.
