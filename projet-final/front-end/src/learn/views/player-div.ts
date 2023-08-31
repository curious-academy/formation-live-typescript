class PlayerDiv extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });        

        this.prepareStyle(shadow);
        this.prepareInsideDiv(shadow);
    }

    //#region Internal methods
    private prepareInsideDiv(shadow: ShadowRoot): void {
        const insideDiv = document.createElement('div');

        shadow.appendChild(insideDiv);
    }

    private prepareStyle(shadow: ShadowRoot): void {
        const style = document.createElement('style');

        style.textContent = `
            :host {
                display: block;
                width: ${this.with}px;
                height: ${this.height}px;
                background-image: url(${this.image});
                background-size: ${this.with}px ${this.height}px;
                background-position: center;
            }
        `;

        shadow.appendChild(style);
    }

    private getAttributeOrDefault(key: string, defaultValue = ''): string | null {
        let value: string | null;

        if (this.hasAttribute(key)) {
            value = this.getAttribute(key);
        } else {
            value = defaultValue;
        }

        return value;
    }
    //#endregion

    //#region Properties
    get image(): string | null {
        return this.getAttributeOrDefault('image', 'img/default.png');
    }

    get with(): number {
        return Number(this.getAttributeOrDefault('width', '50'));
    }

    get height(): number {
        return Number(this.getAttributeOrDefault('height', '50'));
    }
    //#endregion
}

export default PlayerDiv;