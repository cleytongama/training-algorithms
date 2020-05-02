
import AbstractLinkShareButton from './AbstractLinkShareButton'
// eslint-disable-next-line no-unused-vars
import EventHandler from './EventHandler'

class ShareButtonFacebook extends AbstractLinkShareButton {
  // eslint-disable-next-line no-useless-constructor
  constructor (eventHandler : EventHandler, clazz:string, url: string) {
    super(eventHandler, clazz, url)
  }

  createLink ():string {
    return `https://facebook.com/sharer.php?url=${this.url}`
  }
}

export default ShareButtonFacebook
