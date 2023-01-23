import React, { useRef, useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import textos from "./components/textos.js";
import { useState } from "react";

// CSS
import "./reset.scss";
import "./navegacao.scss";
import "./fonts.scss";
import "./conteudoInicial.scss";
import "./documentacao.scss";
import "./doc.scss";
import "./secao.scss";
import "./navegacaoDeIndice.scss";
import "./introducao.scss";
import "./BloquinhoImgTexto.scss";

//Imagens
import logoimg from "./img/logo.png";
import fotoimg from "./img/foto.jpg";
import reactimg from "./img/react.png";
import cssimg from "./img/css.png";
import javascriptimg from "./img/javascript.png";
import jsximg from "./img/jsx.png";
import phpimg from "./img/php.png";
import pythonimg from "./img/python.png";
import GoogleFonts from "./img/googlefonts.png";
import Icons8 from "./img/icons8.png";
import RealFavicon from "./img/realfavicon.png";
import Netlify from "./img/netlify.png";
import AdobeColor from "./img/adobecolor.png";
import clippath from "./img/clippath.png";

const root = ReactDOM.createRoot(document.getElementById("root")); // AQUI É ONDE O REACT DOM É RENDERIZADO
root.render(
  // CONTROLE DE ROTAS - AQUI É ONDE AS ROTAS PRINCIPAIS SÃO CONTROLADAS
  <BrowserRouter>
    <Navegacao />
    <Routes>
      {/* Rotas da barra de navegação */}
      <Route path="/" exact element={<ConteudoInicial />} />
      <Route path="/documentacao" exact element={<Documentacao />} />
      <Route path="/ferramentas" exact element={<Ferramentas />} />
      <Route path="/certificados" exact element={<Documentacao />} />
      <Route path="/portfolio" exact element={<Documentacao />} />
      <Route path="/roadmap" exact element={<Documentacao />} />
      <Route path="/contato" exact element={<Documentacao />} />
      {/* Subrotas da documentação */}
      <Route path="/documentacao/jsx" exact element={<Doc />} />
      <Route path="/documentacao/css" exact element={<Doc />} />
      <Route path="/documentacao/javascript" exact element={<Doc />} />
      <Route path="/documentacao/react" exact element={<DocReact />} />
      <Route path="/documentacao/php" exact element={<Doc />} />
      <Route path="/documentacao/python" exact element={<Doc />} />
    </Routes>
  </BrowserRouter>
);

// PRETENDO SEPARAR ISSO EM OUTROS ARQUIVOS, MAS POR AGORA PARA MELHOR APRENDIZADO ESTÁ AQUI, ESTA EM ORDEM:
function Navegacao() {
  // COMPONENTE RESPONSÁVEL PELA NAVEGAÇÃO PRINCIPAL
  return (
    <React.Fragment>
      <nav className="NavegacaoPrincipal">
        <img src={logoimg} alt="logo" />
        <h1>
          <Link to="/">Registro</Link>
        </h1>
        <div className="flexDeNavegacao">
          <button>
            <Link to="/documentacao">Documentação</Link>
          </button>
          <button>
            <Link to="/ferramentas">Ferramentas</Link>
          </button>
          <button>
            <Link to="/certificados">Certificados</Link>
          </button>
          <button>
            <Link to="/portfolio">Portfólio</Link>
          </button>
          <button>
            <Link to="/roadmap">Roadmap</Link>
          </button>
          <button>
            <Link to="/contato">Contato</Link>
          </button>
        </div>
      </nav>
    </React.Fragment>
  );
}

function ConteudoInicial() {
  // COMPONENTE RESPONSÁVEL PELA PRIMEIRA PÁGINA DO SITE
  return (
    <div className="conteudoInicial">
      <h1>Como era mesmo aquela sintaxe?</h1>
      <p>
        Quem nunca sentiu a necessidade de ter registrado algo que aprendeu? Ou
        de ter guardado uma ferramenta que usou e gostou? A verdade é que eu
        sempre tive essa necessidade, mas cadernos e anotações sempre foram
        muito bagunçados para mim e difíceis de consultar em qualquer lugar.
        <br />
        <br />
        Por isso decidi registrar tudo isso em um site que eu possa acessar de
        onde eu estiver e possa organizar de uma forma que eu possa consultar
        com facilidade. Bem vindo ao meu site de registro!
      </p>

      <img src={fotoimg} alt="Foto do samuel" />
    </div>
  );
}

function Documentacao() {
  // COMPONENTE RESPONSÁVEL PELA ABA DOCUMENTAÇÃO
  return (
    <section className="Documentacao">
      <h1>Escolha qual tecnologia você quer acessar</h1>
      <div className="flexIconesDeDocumentacao">
        <button>
          <Link to="/documentacao/jsx">
            <img src={jsximg} alt="jsx" />
            <h3>JSX</h3>
          </Link>
        </button>
        <button>
          <Link to="/documentacao/css">
            <img src={cssimg} alt="css" />
            <h3>CSS</h3>
          </Link>
        </button>
        <button>
          <Link to="/documentacao/javascript">
            <img src={javascriptimg} alt="javascript" />
            <h3>Javascript</h3>
          </Link>
        </button>
        <button>
          <Link to="/documentacao/react">
            <img src={reactimg} alt="react" />
            <h3>React</h3>
          </Link>
        </button>
        <button>
          <Link to="/documentacao/php">
            <img src={phpimg} alt="php" />
            <h3>PHP</h3>
          </Link>
        </button>
        <button>
          <Link to="/documentacao/python">
            <img src={pythonimg} alt="python" />
            <h3>Python</h3>
          </Link>
        </button>
      </div>
    </section>
  );
}

function DocReact() {
  // COMPONENTE RESPONSÁVEL PELA ABA DOCUMENTAÇÃO > REACT
  return (
    <NavegacaoDeIndice
      default="react"
      nome1="introdução"
      rota1="/documentacao/react"
      nome2="estrutura"
      rota2="/documentacao/react/estrutura"
      nome3="regras"
      rota3="/documentacao/react/regras"
      nome4="iniciando"
      rota4="/documentacao/react/iniciando"
      nome5="componentes"
      rota5="/documentacao/react/componentes"
      nome6="props"
      rota6="/documentacao/react/props"
      nome7="css"
      rota7="/documentacao/react/css"
      nome8="routes"
      rota8="/documentacao/react/routes"
    />
  );
}

// COMPONENTES DE CONTEÚDO DA ABA DOCUMENTACAO > REACT

function ReactIntroducao() {
  return (
    <Doc
      img={reactimg}
      titulo={textos.React.titulo}
      introducao={textos.React.introducao}
    />
  );
}

function ReactEstrutura() {
  return (
    <Secao
      titulo="estrutura"
      li1="node_modules: é onde ficam as dependências do projeto"
      li2="public: é onde o index.html fica"
      li3="src: é onde fica o código do projeto"
    />
  );
}

function ReactRegras() {
  return (
    <Secao
      titulo="regras"
      li1="para o react entender que é um componente, a função deve ter nome maiúsculo e retornar um JSX"
      li2="no react é obrigatório fechar a tag"
      codigo2={<BlocoDeCodigo codigo="&lt;h1&gt;Hello World!&lt;/h1&gt;" />}
      l2b="mas normalmente vemos a tag de fechamento omitida"
      codigo2b={<BlocoDeCodigo codigo="&lt;h1/&gt;" />}
      li3="isso incui tudo que no html não era fechado, como as tags img,
              input, br e etc. No React, TUDO, literalmente tudo tem que ser
              fechado."
      li4="JSX sempre deve retornar apenas um elemento, então se for mais de um elemento deve estar encapsulado em apenas um. Se não quiser que este elemento apareça no html, pode usar um react fragment"
      li5="Para usar javascript dentro do JSX, usa-se chaves"
      codigo5={<BlocoDeCodigo codigo="&lt;h1&gt;{1 + 1}&lt;/h1&gt;" />}
      li6="Para usar eventos no JSX, usa-se o camelCase"
      codigo6={
        <BlocoDeCodigo codigo="&lt;button onClick={funcao}&gt;Clique&lt;/button&gt;" />
      }
      li7="Para usar atributos (classes para CSS) no JSX, usa-se o camelCase e nome não é class, mas className"
      codigo7={
        <BlocoDeCodigo codigo="&lt;button className='botao'&gt;Clique&lt;/button&gt;" />
      }
    />
  );
}

function ReactIniciando() {
  return (
    <Secao
      titulo="iniciando"
      li1="escolha o diretório pelo terminal e use o comando"
      codigo1={<BlocoDeCodigo codigo="npx create-react-app nomedoprojeto" />}
      li2="mude para a pasta do projeto após a criação e use o comando"
      codigo2={<BlocoDeCodigo codigo="code ." />}
      li2b="para abrir o projeto no VSCode, em seguida use este comando para iniciar o server"
      codigo2b={<BlocoDeCodigo codigo="npm start" />}
      li3="exclua de dentro da pasta src: app.css, app.js, app.test.js, index.css, logo.svg, reportWebVitals.js e setupTests.js, deixando apenas o index.js"
      li4="no index.js, apague o import do 'index.css', o import App from './App' e o import reportWebVitals from './reportWebVitals', exclua também o componente <App /> e o reportWebVitals(), a partir daqui é possível criar o projeto do zero, criando seu componente dentro de <React.StrictMode>"
    />
  );
}

function ReactComponentes() {
  return (
    <Secao
      titulo="componentes"
      li1="É possível definir variáveis fora e dentro do componente, mas se for definida dentro, só pode ser usada ali, e se for definida fora, pode ser usada em qualquer lugar do componente. Variáveis definidas fora do componente são globais, e variáveis definidas dentro do componente são locais."
      codigo1={
        <BlocoDeCodigo
          codigo={`const nomeUm = 'João'; // variável global

                function App(){
                  const nome = 'Maria'; // variável local do componente
                  return(
                    <div>
                    <h1>Hello {nome}</h1> // vai sair HELLO MARIA
                    <h1>Hello {nomeUm}</h1> // vai sair HELLO JOAO
                    </div>
                )}`}
        />
      }
      li1b="Sempre é preciso retornar um valor, não é possível retornar uma definição de variável por exemplo. Se for preciso retornar uma variável, é preciso retornar o valor dela."
    />
  );
}

function ReactProps() {
  return (
    <Secao
      titulo="props"
      li1="props é passado como parâmetro da função do componente, e é um objeto. Portanto, quando você usa a contação de . você está criando uma chave que receberá um valor:"
      codigo1={
        <BlocoDeCodigo
          codigo={`<App nome="Maria" /> // aqui é passado o valor da propriedade nome
                  
                function App(props){
                return(
                  <div>
                  <h1>Hello {props.nome}</h1> // vai sair Hello Maria
                  </div>
              )}`}
        />
      }
      li2="Além da props, existe a props.children. A propChildren é tudo que renderiza entre a abertura e fechamento do componente, não são as propriedades, mas o que realmente vem dentro do componente. Exemplo:"
      codigo2={<BlocoDeCodigo codigo={`<App>Samuel</App>`} />}
      li2b="Aqui Samuel é uma props.children. A propriedade children é um objeto, e pode ser acessada com props.children. No componente ficaria assim:"
      codigo2b={
        <BlocoDeCodigo
          codigo={`function App(props){
                return(
                  <div>
                  <h1>Hello {props.children}</h1> // vai sair Hello Samuel
                  </div>
              )}`}
        />
      }
    />
  );
}

function ReactCss() {
  return (
    <Secao
      titulo="css"
      li1="Para entrar no javascript precisamos usar {} no JSX, então, quando se trata de passar propriedades em javascript para um css inline, visto que é um objeto do javascript também precisamos das chaves do objeto {}, então fica {{}}, como no exemplo a seguir:"
      codigo1={<BlocoDeCodigo codigo={`style={{color: 'red'}};`} />}
      li1b="Já o background-color não funciona com este nome, pois é uma propriedade do css, e não do js. Então, para usar o background-color inline, precisamos usar o camelCase, backgroundColor como chave, e a cor como valor já que é um objeto. Exemplo:"
      codigo1b={<BlocoDeCodigo codigo={`style={{backgroundColor = 'red'}};`} />}
      li2="É importante ressaltar também que inline é mais forte que o css externo, então, se tivermos um background-color no css externo, e um backgroundColor no inline css, o inline vai prevalecer. Usando livrarias externas é normal vir inline no código, então é importante reforçar isso."
    />
  );
}

function ReactRoutes() {
  return (
    <Secao
      titulo="routes"
      li1="Para controlar rotas de maneira simples no react usamos conferências de statements e useState. Se a variável é true, renderiza o componente, se não, não renderiza. Exemplo:"
      codigo1={
        <BlocoDeCodigo
          codigo={`const[Inicial, setInicial] = useState(true);
              {Inicial ? <ConteudoInicial /> : null}`}
        />
      }
      li1b="se inicial for true renderiza o componente <ConteudoInicial/> se não, não renderiza nada. E podemos setar o valor da variável com um botão, por exemplo:"
      codigo1b={
        <BlocoDeCodigo
          codigo={`<button Onclick={()=>{setInicial(!Inicial)}}>Mostrar/Ocultar</button>`}
        />
      }
      li2="Porém, no longo prazo isso pode ficar muito verboso, então, para facilitar, usamos a biblioteca react-router-dom. Ela é uma biblioteca que facilita a criação de rotas no react. Para instalar, basta rodar o comando:"
      codigo2={<BlocoDeCodigo codigo={`npm install react-router-dom`} />}
      li2b="Para usar, basta importar o BrowserRouter, Routes e Route do react-router-dom:"
      codigo2b={
        <BlocoDeCodigo
          codigo={`import { BrowserRouter, Routes, Route } from 'react-router-dom';`}
        />
      }
      li3="O BrowserRouter é o componente que envolve toda a aplicação,
              e o Routes é o componente que envolve todas as rotas. E por último o Route é o componente que renderiza o componente que queremos. No Route é onde escolhemos o caminho com a propriedade path e qual componente será renderizado naquele caminho, com a propriedade element. Exemplo:"
      codigo3={
        <BlocoDeCodigo
          codigo={`<BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/sobre" element={<Sobre />} />
                </Routes>
              </BrowserRouter>`}
        />
      }
      li4="O Route também pode receber uma propriedade chamada exact, que faz com que a rota só seja renderizada se o caminho for exatamente igual ao path. Exemplo:"
      codigo4={
        <BlocoDeCodigo codigo={`<Route path="/" exact element={<Home />} />`} />
      }
      li5="Para ir para essas rotas, basta usar o componente Link do react-router-dom. Exemplo:"
      codigo5={
        <BlocoDeCodigo codigo={`<button><Link to="/">Home</Link></button>`} />
      }
    />
  );
}

function Ferramentas() {
  // COMPONENTE RESPONSÁVEL PELA ABA FERRAMENTAS

  return (
    <NavegacaoDeIndice
      default="introdução"
      nome1="introdução"
      rota1="/ferramentas"
      nome2="uso frequente"
      rota2="/ferramentas/uso-frequente"
      nome3="css"
      rota3="/ferramentas/css"
      nome4="javascript"
      rota4="/ferramentas/javascript"
      nome5="cores"
      rota5="/ferramentas/cores"
      nome6="imagens"
      rota6="/ferramentas/imagens"
      nome7="ícones"
      rota7="/ferramentas/icones"
      nome8="Testes e SEO"
      rota8="/ferramentas/testes-e-seo"
    />
  );
}

function Introducao() {
  // COMPONENTE RESPONSÁVEL PELA ABA FERRAMENTAS>INTRODUÇÃO
  return (
    <section className="IntroducaoFerramentas">
      <p>
        Bem vindo a minha lista pessoal de ferramentas para desenvolvimento web.
        Aqui você vai encontrar uma lista de ferramentas que eu uso no meu dia a
        dia, e que eu recomendo para quem desenvolve sites e aplicativos. A
        lista como todo o site continuará em constante mudança, para navegar por
        ela é só usar o menu acima.
      </p>
    </section>
  );
}

function UsoFrequente() {
  // COMPONENTE RESPONSÁVEL PELA ABA FERRAMENTAS>USO FREQUENTE

  return (
    <div className="ferramentasFlex">
      <BloquinhoImgTexto
        img={GoogleFonts}
        alt="google fonts logo"
        titulo="Google Fonts"
        texto="A melhor fonte de fontes"
        a="https://fonts.google.com/"
      />
      <BloquinhoImgTexto
        img={Icons8}
        alt="Icons8 logo"
        titulo="Icons8"
        texto="Meu acervo de ícones preferido"
        a="https://icons8.com/"
      />
      <BloquinhoImgTexto
        img={RealFavicon}
        alt="RealFavicon logo"
        titulo="Real favicon"
        texto="Gerador de favicons"
        a="https://realfavicongenerator.net/"
      />
      <BloquinhoImgTexto
        img={Netlify}
        alt="Netilify logo"
        titulo="Netlify"
        texto="Hospedagem de sites estáticos"
        a="https://www.netlify.com/"
      />
      <BloquinhoImgTexto
        img={AdobeColor}
        alt="Adobe Color logo"
        titulo="Adobe color"
        texto="Extração de cores de imagens, paletas, etc"
        a="https://color.adobe.com/pt/create/color-wheel"
      />
    </div>
  );
}

function Css() {
  return (
    <div className="ferramentasFlex">
      <BloquinhoImgTexto
        img={clippath}
        alt="ClipPath logo"
        titulo="CP Maker"
        texto="Gerador de clip-path"
        a="https://bennettfeely.com/clippy/"
      />
    </div>
  );
}

// Componentes pequenos:

function Doc(props) {
  // COMPONENTE RESPONSÁVEL PELA INTRODUÇÃO DE PÁGINAS DA DOC, COMO JSX, CSS, JAVASCRIPT, PHP E PYTHON (RECEBE TEXTOS DE TEXTOS.JS)

  return (
    <section className="Doc">
      <div className="DocFlexbox">
        <img className="Doclogo" src={props.img} alt="react" />
        <h1 className="DocTitulo">{props.titulo}</h1>
      </div>
      <p className="DocIntroducao">{props.introducao}</p>
    </section>
  );
}

function Secao(props) {
  // COMPONENTE RESPONSÁVEL PELAS SEÇÕES DE DOCUMENTAÇÃO

  const containerRef = useRef();

  useLayoutEffect(() => {
    // manipulação do DOM para esconder os itens vazios
    const container = containerRef.current;
    const li = container.querySelectorAll("li");
    console.log(li.length);

    for (let i = 0; i < li.length; i++) {
      console.log(li[i].innerText);
      if (li[i].innerText === "") {
        li[i].style.display = "none";
      }
    }
  });

  return (
    <section className="Secao">
      <h2 className="TituloDaSecao">{props.titulo}</h2>
      <ul ref={containerRef} className="Uldoc">
        <li>
          {props.li1}
          {props.codigo1}
          {props.li1b}
          {props.codigo1b}
        </li>
        <li>
          {props.li2}
          {props.codigo2}
          {props.li2b}
          {props.codigo2b}
        </li>
        <li>
          {props.li3}
          {props.codigo3}
        </li>
        <li>
          {props.li4}
          {props.codigo4}
        </li>
        <li>
          {props.li5}
          {props.codigo5}
        </li>
        <li>
          {props.li6}
          {props.codigo6}
        </li>
        <li>
          {props.li7}
          {props.codigo7}
        </li>
        <li>
          {props.li8}
          {props.codigo8}
        </li>
        <li>
          {props.li9}
          {props.codigo9}
        </li>
        <li>
          {props.li10}
          {props.codigo10}
        </li>
      </ul>
    </section>
  );
}

function NavegacaoDeIndice(props) {
  // COMPONENTE RESPONSÁVEL PELA SUBNAVEGAÇÃO DE ÍNDICES DE TODAS AS PÁGINAS
  const [rota, setRota] = useState(props.default);
  return (
    <>
      <nav className="NavegacaoDeIndice">
        <button
          onClick={() => {
            setRota(props.rota1);
          }}
        >
          {props.nome1}
        </button>
        <button
          onClick={() => {
            setRota(props.rota2);
          }}
        >
          {props.nome2}
        </button>
        <button
          onClick={() => {
            setRota(props.rota3);
          }}
        >
          {props.nome3}
        </button>
        <button
          onClick={() => {
            setRota(props.rota4);
          }}
        >
          {props.nome4}
        </button>
        <button
          onClick={() => {
            setRota(props.rota5);
          }}
        >
          {props.nome5}
        </button>
        <button
          onClick={() => {
            setRota(props.rota6);
          }}
        >
          {props.nome6}
        </button>
        <button
          onClick={() => {
            setRota(props.rota7);
          }}
        >
          {props.nome7}
        </button>
        <button
          onClick={() => {
            setRota(props.rota8);
          }}
        >
          {props.nome8}
        </button>
      </nav>

      {/* ROTAS DA ABA FERRAMENTAS */}
      {rota === "introdução" && <Introducao />}
      {rota === "/ferramentas" && <Introducao />}
      {rota === "/ferramentas/uso-frequente" && <UsoFrequente />}
      {rota === "/ferramentas/css" && <Css />}

      {/* ROTAS DA ABA DOCUMENTACAO > REACT */}
      {rota === "react" && <ReactIntroducao />}
      {rota === "/documentacao/react" && <ReactIntroducao />}
      {rota === "/documentacao/react/estrutura" && <ReactEstrutura />}
      {rota === "/documentacao/react/regras" && <ReactRegras />}
      {rota === "/documentacao/react/iniciando" && <ReactIniciando />}
      {rota === "/documentacao/react/componentes" && <ReactComponentes />}
      {rota === "/documentacao/react/props" && <ReactProps />}
      {rota === "/documentacao/react/css" && <ReactCss />}
      {rota === "/documentacao/react/routes" && <ReactRoutes />}
    </>
  );
}

function BlocoDeCodigo(props) {
  // COMPONENTE RESPONSÁVEL PELOS BLOCOS DE CÓDIGO
  return (
    <pre className="BlocoDeCodigo">
      <code>{props.codigo}</code>
    </pre>
  );
}

function BloquinhoImgTexto(props) {
  // COMPONENTE RESPONSÁVEL PELOS BLOQUINHOS DE IMAGEM E TEXTO
  return (
    <a href={props.a} target="_blank" className="BloquinhoImgTexto">
      <img src={props.img} alt={props.alt} />
      <h3>{props.titulo}</h3>
      <p>{props.texto}</p>
    </a>
  );
}
