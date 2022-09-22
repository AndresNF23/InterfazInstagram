export var Attribute2;
(function (Attribute2) {
    Attribute2["pictureprofile"] = "pictureprofile";
    Attribute2["username"] = "username";
    Attribute2["palabra"] = "palabra";
})(Attribute2 || (Attribute2 = {}));
class MySuggestion extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            pictureprofile: null,
            username: null,
            palabra: null,
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/Suggestion/Suggestion.css">
            <section class="suggestion">

                <img class= "profileUser" src = ${this.pictureprofile}>
                
                <div class= "infoUsers">
                    <h3 class="username">${this.username}</h3>
                    <h4 class="palabra">${this.palabra}</h4>
                </div>
                
                <h3 class = "textoSeguir"> Seguir </h3>
                
            </section>
            `;
        }
    }
}
customElements.define("my-suggestion", MySuggestion);
export default MySuggestion;
