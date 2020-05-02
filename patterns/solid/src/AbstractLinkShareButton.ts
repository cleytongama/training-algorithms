import AbstractShareButton from './AbstractShareButton'
// eslint-disable-next-line no-unused-vars
import EventHandler from './EventHandler'
abstract class AbstractLinkShareButton extends AbstractShareButton {
    url: string

    constructor (eventHandler : EventHandler, clazz: string, url: string) {
      super(eventHandler, clazz)
      this.url = url
    }

    abstract createLink(): string

    createAction (): any {
      const link = this.createLink()
      return () => window.open(link)
    }
}

export default AbstractLinkShareButton
