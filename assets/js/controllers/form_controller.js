import { Controller } from 'stimulus'

export default class extends Controller {
    static targets = ['field','source']

    initialize () {
        if (this.sourceTarget.value == '') {
            this.fieldTarget.disabled = true
            console.log('You do not have a link yet!')
            
        } else {
            this.copy()
        }
    }

    copy () {
        this.sourceTarget.select()
        this.sourceTarget.setSelectionRange(0, 99999)

        document.execCommand("copy")
        console.error('Copied to Clipboard!')
    }

}