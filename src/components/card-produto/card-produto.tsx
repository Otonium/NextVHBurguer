import styles from "./card-produto.module.css"

const CardProduto = () => {
    return(
        <div className={styles.card}>
            <main>
                <a href="/detalhe-produto" className="detalhe-produto">
                    <img src="/imgs/HamburguerAlcatraComBacon.png" alt="" />
                    <p>Monster</p>
                </a>
                <p>Hambúrguer brutal, suculento e exageradamente saboroso.</p>
            </main>
            <footer>
                <p>R$999,00</p>
            </footer>
        </div>
    )
}

export default CardProduto;