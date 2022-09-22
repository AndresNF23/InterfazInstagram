import data from "./data.js";
import data2 from "./dataPost.js"
import data3 from "./dataSuggestion.js"


import "./components/index.js"
//import MyCounter from "./components/Counter/Counter.js";
// import MyProfile, {Attribute} from "./components/Profile/Profile.js";
import MyNavegation from "./components/Navegation/Navegation.js";
import MyProfiles from "./components/Profile/Profiles.js";
// import MyPost from "./components/PostInsta/PostInsta.js";
import MyPost, {Attribute} from "./components/PostInsta/PostInsta.js";
import MySuggestion, {Attribute2} from "./components/Suggestion/Suggestion.js";
const section1 = document.createElement('div');


class AppContainer extends HTMLElement{
    //counters: MyCounter[] = [];
    profile = new MyProfiles;
    navegation = new MyNavegation;
    post: MyPost[] = [];
    suggestion: MySuggestion[] = [];
    
    // profiles: MyProfile[] = [];

    constructor(){
        super();
        this.attachShadow({mode: "open"});
     
      
        data2.forEach((user)=>{
            const profileCard = this.ownerDocument.createElement("my-post") as MyPost;
            profileCard.setAttribute(Attribute.username, user.username);
            profileCard.setAttribute(Attribute.imagepost, user.imagepost);
            profileCard.setAttribute(Attribute.pictureprofile, user.pictureprofile);
            profileCard.setAttribute(Attribute.likes, user.likes);
            profileCard.setAttribute(Attribute.description, user.description);
            profileCard.setAttribute(Attribute.comments, user.comments);
            this.post.push(profileCard)

        });

        data3.forEach((sugestionUser)=>{
            const profileSuggestion = this.ownerDocument.createElement("my-suggestion") as MySuggestion;
            profileSuggestion.setAttribute(Attribute2.pictureprofile, sugestionUser.pictureprofile);
            profileSuggestion.setAttribute(Attribute2.username, sugestionUser.username);
            profileSuggestion.setAttribute(Attribute2.palabra, sugestionUser.palabra);
            this.suggestion.push(profileSuggestion)

        })
        
        /*const counter = this.ownerDocument.createElement("my-counter") as MyCounter;
        counter.button.addEventListener("click",()=>{
            console.log("button clicked");
        })
        */
        //this.counters.push(counter);

        // data.forEach((user)=>{
        //     const profileCard = this.ownerDocument.createElement("my-profile") as MyProfile;
        //     profileCard.setAttribute(Attribute.username, user.username);
        //     profileCard.setAttribute(Attribute.image, user.image);
        //     //profileCard.setAttribute(Attribute.age, String(user.id));
        //     this.profiles.push(profileCard)
        // });
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/styles.css/styles.css"> 
            <my-navegation/>
            
            <div class = "suggestions">
                <my-suggestion>
            
            </div>

            `;

            
              //historias
              this.shadowRoot?.appendChild(this.profile);
              this.profile.className = "profileList"
              
            //post
            this.post.forEach((post)=>{
                this.shadowRoot?.appendChild(post)
            
            })
      
            this.suggestion.forEach((suggestion)=>{
                this.shadowRoot?.appendChild(suggestion)
            })
          
            /*his.counters.forEach((counter)=>{
            //    this.shadowRoot?.appendChild(counter);
            })
            */

            // this.profiles.forEach((profile)=>{
            //     this.shadowRoot?.appendChild(profile);
            // }) :( si leen esto, estoy siendo maltratado
        }
    }
}

customElements.define("app-container",AppContainer);