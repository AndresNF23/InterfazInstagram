export enum Attribute {
    "username" = "username",
    "image" = "image",
}

class MyProfile extends HTMLElement{
    username?: string;
    image?: string;
    
    
    static get observedAttributes(){
        const attrs: Record<Attribute,null> = {
            username: null,
            image: null,

        };
        return Object.keys(attrs); // return ["age","lastname","name"]
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: Attribute, 
        oldValue: string | undefined,
        newValue: string | undefined,
        ){
            this[propName] = newValue;

            this.render();
    }


    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/Profile/ProfileElem/profile.css">
            <section class = "history">
                <img class = "perfilhistoria" src = ${this.image}></img> 
                <h2 class = "username">${this.username}</h2>
            
            </section>
            `
        }

    }

    
}




customElements.define("my-profile", MyProfile);
export default MyProfile;