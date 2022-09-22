export var Attribute;
(function (Attribute) {
    Attribute["username"] = "username";
    Attribute["image"] = "image";
})(Attribute || (Attribute = {}));
class MyProfile extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            username: null,
            image: null,
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
            <link rel="stylesheet" href="./app/components/Profile/ProfileElem/profile.css">
            <section class = "history">
                <img class = "perfilhistoria" src = ${this.image}></img> 
                <h2 class = "username">${this.username}</h2>
            
            </section>
            `;
        }
    }
}
customElements.define("my-profile", MyProfile);
export default MyProfile;
