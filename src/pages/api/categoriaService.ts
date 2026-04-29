import { api } from "./api";

export async function cadastrarCategoria(nome: string){
    try{//async = tempo não previsto
        await api.post("Categoria", {nome});
        // console.log("ok")
    }catch(error: any){
        throw new Error("Erro ao cadastrar categoria");
    }
}

export async function listarCategoria(){
    try{
        const response = await api.get("Categoria");
        return response;
    }catch (error: any) {
        throw new Error(error.response.data);
    }
}