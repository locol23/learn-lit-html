import { html } from 'lit-html/lib/lit-extended'

const alertText = text => {
  alert(text)
}

const Button = () => html`<button on-click="${() => alertText('hoge')}">button</button>`

export default Button
