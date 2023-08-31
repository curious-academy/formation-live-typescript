import PlayerDiv from "./player-div";
import PopupInfo from "./popup-info";

/**
 * CustomElementsLoader is a class that loads custom elements.
 * 
 */
export class CustomElementsLoader {
    /**
     * Loads custom elements.
     */
    load(): void {
        customElements.define('popup-info', PopupInfo);
        customElements.define('player-div', PlayerDiv);
    }
}