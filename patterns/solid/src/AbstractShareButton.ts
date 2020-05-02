
// eslint-disable-next-line no-unused-vars
import EventHandler from './EventHandler'

abstract class AbstractShareButton {
    eventHandler : EventHandler
    clazz: string

    constructor (eventHandler : EventHandler, clazz:string) {
      this.clazz = clazz
      this.eventHandler = eventHandler
    }

    abstract createAction(): any

    bind () {
      const action = this.createAction()
      this.eventHandler.addEventListenerToClass(this.clazz, 'click', action)
    }
}

export default AbstractShareButton
