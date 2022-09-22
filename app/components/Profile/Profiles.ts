import data from "../../data.js";
import MyProfile, {Attribute} from "./ProfileElem/Profile.js";

class MyProfiles extends HTMLElement{
    profiles: MyProfile[] = [];

    constructor(){
        super();
        this.attachShadow({mode: "open"});
        data.forEach((user)=>{
            const profileCard = this.ownerDocument.createElement("my-profile") as MyProfile;
            profileCard.setAttribute(Attribute.username, user.username);
            profileCard.setAttribute(Attribute.image, user.image);
            this.profiles.push(profileCard)
        });
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/Profile/profiles.css">
            `;

            this.profiles.forEach((profile)=>{
                this.shadowRoot?.appendChild(profile);
            })

          
           
        
           
        }
    }
}

customElements.define("my-profiles",MyProfiles);
export default MyProfiles;