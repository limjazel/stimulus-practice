import { Controller } from 'stimulus'

export default class extends Controller {
    static targets = ['source']

    copy () {
        if (this.sourceTarget.select().isEmpty()) {
            console.error('bbbbb')
        } else {
            console.error('aaaaa')
        }
        
    }
}