import { Controller } from 'stimulus'

export default class extends Controller {
    static targets = ['label','new_name','modal']

    show () {
        this.modalTarget.classList.remove('hidden')
    }

    update () {
        this.labelTarget.innerText = this.new_nameTarget.value
        this.closeModal()
    }

    closeModal() {
        this.modalTarget.classList.add('hidden')
    }

}