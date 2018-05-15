import { html } from 'lit-html/lib/lit-extended'
import Item from './Item'
import Button from './Button'

const App = items => html`${items.map(item => Item(item))}${Button()}`

export default App
