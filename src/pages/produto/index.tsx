import Footer from "@/components/footer/footer";
import SubHeader from "@/components/sub-header/sub-header"
import styles from "./produto.module.css"
import { useEffect, useState } from "react";
import { listarCategoria } from "../api/categoriaService";
import { cadastrarProduto } from "../api/produtoService";

interface Categoria{
    categoriaID: number,
    Nome: string
}


const Produto = () => {

  const[categorias, setCategorias] = useState<Categoria[]>([]);

  const[nome, setNome] = useState<string>("");
  const[descricao, setDescricao] = useState<string>("");
  const[preco, setPreco] = useState<string>("");
  const[imagem, setImagem] = useState<File | null>(null);
  const [categoriasSelecionadas, setcategoriasSelecionadas] = useState<number[]>([]);

  async function listarCategoriaEmProduto() {
    const lista = await listarCategoria();
    setCategorias(lista.data);

  }

  async function Cadastrar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try{

      const dados = {
        nome,
        descricao,
        preco,
        imagem,
        categoriasId: categoriasSelecionadas
      }

      cadastrarProduto(dados)
    }catch(error: any){
      console.log(error.message)
    }

  }

  useEffect(()=>{
    listarCategoriaEmProduto();
  }, [])

  return (
    <>
      <SubHeader />
      <main className={styles.main_produto}>
        <section className={`${styles.section_flex} layout_guide`}>
            <h1>Criar produto</h1>
            <form className={styles.formulario_produto}>
              <div className={styles.campo_form}>
                <label htmlFor="">Nome do produto</label>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
              </div>
              <div className={styles.campo_form}>
                <label htmlFor="">Descrição</label>
                <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)}></textarea>
              </div>
              <div className={styles.campo_form}>
                <label htmlFor="">Preço(R$)</label>
                <input type="text" value={preco} onChange={(e) => setPreco(e.target.value)}/>
              </div>
              <div className={styles.campo_form}>
                <label htmlFor="">Categoria</label>
                <select>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </select>

                <a href="">Criar categoria</a>
              </div>
              <div className={styles.campo_form}>
                <label htmlFor="">Imagem do produto</label>
                <input
                  type="file"
                />
              </div>
              <button type="submit" id={styles.btn_salvar}>Salvar</button>
            </form>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Produto;