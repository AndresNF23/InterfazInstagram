import data2 from "./dataPost.js";
import data3 from "./dataSuggestion.js";
import "./components/index.js";
import MyNavegation from "./components/Navegation/Navegation.js";
import MyProfiles from "./components/Profile/Profiles.js";
import { Attribute } from "./components/PostInsta/PostInsta.js";
import { Attribute2 } from "./components/Suggestion/Suggestion.js";
const section1 = document.createElement('div');
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.profile = new MyProfiles;
        this.navegation = new MyNavegation;
        this.post = [];
        this.suggestion = [];
        this.attachShadow({ mode: "open" });
        data2.forEach((user) => {
            const profileCard = this.ownerDocument.createElement("my-post");
            profileCard.setAttribute(Attribute.username, user.username);
            profileCard.setAttribute(Attribute.imagepost, user.imagepost);
            profileCard.setAttribute(Attribute.pictureprofile, user.pictureprofile);
            profileCard.setAttribute(Attribute.likes, user.likes);
            profileCard.setAttribute(Attribute.description, user.description);
            profileCard.setAttribute(Attribute.comments, user.comments);
            this.post.push(profileCard);
        });
        data3.forEach((sugestionUser) => {
            const profileSuggestion = this.ownerDocument.createElement("my-suggestion");
            profileSuggestion.setAttribute(Attribute2.pictureprofile, sugestionUser.pictureprofile);
            profileSuggestion.setAttribute(Attribute2.username, sugestionUser.username);
            profileSuggestion.setAttribute(Attribute2.palabra, sugestionUser.palabra);
            this.suggestion.push(profileSuggestion);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        var _a;
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/styles.css/styles.css"> 
            <my-navegation/>
            
            <div class = "suggestions">
                <my-suggestion>
            
            </div>

            `;
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(this.profile);
            this.profile.className = "profileList";
            this.post.forEach((post) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(post);
            });
            this.suggestion.forEach((suggestion) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(suggestion);
            });
        }
    }
}
customElements.define("app-container", AppContainer);
