import { render } from "lit-html"
import App from './App'

const items = [1,2,3]

render(App(items), document.body)
