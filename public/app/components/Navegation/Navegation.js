class MyNavegation extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/Navegation/Navegation.css">
            <section class = "navegation">

                <img class = "instagram" src = "../images/instagram.png"/>
        
                <div class="search">
                <input class = "searchInput" type = "text" value = "Search">
                </div>
                <div class=""lista> 
                    <ol class="listaOl">
                        <li class="listaElem"><img class = "icono" src ="../images/images2/home.png"/></li>
                        <li class="listaElem"><img class = "icono" src ="../images/images2/chat.png"/></li>
                        <li class="listaElem"><img class = "icono" src ="../images/images2/add.png"/></li>
                        <li class="listaElem"><img class = "icono" src ="../images/images2/explore.png"/></li>
                        <li class="listaElem"><img class = "icono" src ="../images/images2/home.png"/></li>
                        <li class="listaElem"><img class = "icono" src ="../images/images2/like.png"/></li>
                        <li class="deku"><img class = "dekuImg" src ="../images/images2/deku.jpg"/></li>
                    </ol>
                </div>
            </section>
            `;
        }
    }
}
customElements.define("my-navegation", MyNavegation);
export default MyNavegation;
