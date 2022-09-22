export enum Attribute2 {
    "pictureprofile" = "pictureprofile",
    "username" = "username",
    "palabra" = "palabra",

}

class MySuggestion extends HTMLElement{
   pictureprofile?: string;
   username?: string;
   palabra?: string;

   static get observedAttributes(){
    const attrs: Record<Attribute2,null> = {
        pictureprofile: null,
        username: null,
        palabra: null,
    };

    return Object.keys(attrs); // return ["age","lastname","name"]
}
   
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: Attribute2, 
        oldValue: string | undefined,
        newValue: string | undefined,
        ){
            this[propName] = newValue;

            this.render();
    }

    render(){
        if(this.shadowRoot){
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
            `
        }
    }
}

customElements.define("my-suggestion", MySuggestion);
export default MySuggestion;