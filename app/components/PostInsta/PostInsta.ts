export enum Attribute {
    "pictureprofile" = "pictureprofile",
    "username" = "username",
    "imagepost" = "imagepost",
    "likes" = "likes",
    "description" = "description",
    "comments" = "comments",
}

class MyPost extends HTMLElement{
   pictureprofile?: string;
   username?: string;
   imagepost?: string;
   likes?: string;
   description?: string;
   comments?:string;

   static get observedAttributes(){
    const attrs: Record<Attribute,null> = {
        pictureprofile: null,
        username: null,
        imagepost: null,
        likes: null,
        description: null,
        comments: null,

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
            <link rel="stylesheet" href="./app/components/PostInsta/PostInsta.css">
            <section>
                <div class="header">
                    <div class= "user">
                        <img src = ${this.pictureprofile}>
                        <h3>${this.username}</h3>
                        <img class="icon3" src="../images/imagespost/3points.svg">
                    </div> 
                 </div>
            <div class="content">
                <img src="${this.imagepost}"></img>
            </div>
            <div class="Iconos">
                    <img src="../images/imagespost/chat.svg">
                    <img src="../images/imagespost/like.svg">
                    <img src="../images/imagespost/share.svg">
                    <img src="../images/imagespost/guardar.svg">
            </div>
                  
            <div class="Description">
                <h3>${this.likes}</h3>
                <div class="Info">
                    <p>${this.description}</p>
                    <p>${this.comments}</p>
                </div>
            </div>
            </section>
            `
        }
    }
}

customElements.define("my-post", MyPost);
export default MyPost;