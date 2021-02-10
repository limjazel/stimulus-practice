import { Controller } from 'stimulus'

export default class extends Controller {
    static targets = ['input']

    copy () {
        this.inputTarget.select()
        this.inputTarget.setSelectionRange(0, 99999)

        document.execCommand("copy")

        console.error('copied to clipboard')
    }
}