// getServerSideProps = função especial do Next.js.
// Roda no servidor ANTES da página aparecer para o usuário.
// O "async" = pode esperar processos antes de responder.
export async function getServerSideProps() {

  // Retorna um objeto com a instrução "redirect" 
  return {
    redirect: {
      destination: "/home",

      // permanent: false significa que esse redirecionamento é temporário.
      // Se fosse true, o navegador ia "memorizar" o redirecionamento para sempre.
      permanent: false,
    },
  };
}

// Essa é a função da página em si.
export default function Index() {
  return null;
}