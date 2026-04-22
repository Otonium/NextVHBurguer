// Tudo que você colocar aqui vai existir em todas as telas.
// O que normalmente vai aqui:
// CSS global
// Layout padrão (header, footer)


// Importa arquivo do CSS global do projeto (src/styles/global.css.)
// O CSS dentro dele vale para TODAS as páginas do site.
import "@/styles/globals.css";


// Importa o tipo "AppProps" do Next.js.
// "Tipo" = formato de informação.
// AppProps declara que a função App precisa "Component" e "pageProps".
import type { AppProps } from "next/app";


// Importa a fonte do Google Fonts direto pelo Next.js.
// Não precisa ir no Google Fonts manualmente — o Next.js baixa e aplica sozinho.
import { Fredoka } from "next/font/google";




// Configura fonte
const fredoka = Fredoka({


  // Cria uma variável CSS chamada "--font-padrao".
  variable: "--font-padrao",


  weight: ["300", "400", "500", "600", "700"],


  // Define o conjunto de letras que a fonte precisa ter.
  // "latin" cobre português, inglês e outros idiomas com letras comuns.
  subsets: ["latin"],
});




// Função principal do arquivo.
// Ela é exportada como padrão (export default), ou seja, é a coisa principal que o Next.js usa aqui.
// Ela recebe dois valores:
//   Component = a página atual que o usuário está vendo
//   pageProps  = as informações que essa página precisa para funcionar
export default function App({ Component, pageProps }: AppProps) {


  // "return" = o que aparece na tela.
  return (
    <main className={fredoka.variable}>
      <Component {...pageProps} />
    </main>
  )
}
