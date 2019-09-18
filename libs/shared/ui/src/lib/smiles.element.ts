export class SmilesElement extends HTMLElement {
  public static observedAttributes = ['title'];

  attributeChangedCallback() {
    this.innerHTML = `
    <h1 style="margin-bottom: 0">${this.title}, here's a smile*! 😃</h1>
    <h2 style="margin-top: 0; font-size: 10%; color: gray;">*made with web components</h2>
    `;
  }
}

customElements.define('nx-react-smiles', SmilesElement);
