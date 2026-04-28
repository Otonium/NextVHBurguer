import { api } from "./api";

export async function cadastrarCategoria(nome: string){
    try{//async = tempo não previsto
        await api.post("Categoria", {nome});
        console.log("ok")
    }catch(error: any){
        throw new Error("Erro ao cadastrar categoria");
    }
}