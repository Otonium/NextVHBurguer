//importa quatro componentes que o Next.js exige para montar o HTML base do site.
import { Html, Head, Main, NextScript } from "next/document";
//html e head = tags html da pagina
//Main = Next coloca o conteudo da pagina atual. Apenas o next faz iss
//NextScript = coloca os arquivos type ou js na pagina automaticamente. Cria interações

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body>
        <Main />
        {/* injeta os scripts que fazem o React funcionar no navegador. */}
        <NextScript />
      </body>
    </Html>
  );
}
