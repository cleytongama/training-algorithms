
import AbstractLinkShareButton from './AbstractLinkShareButton'
// eslint-disable-next-line no-unused-vars
import EventHandler from './EventHandler'

class ShareButtonLinkedIn extends AbstractLinkShareButton {
  // eslint-disable-next-line no-useless-constructor
  constructor (eventHandler: EventHandler, clazz:string, url: string) {
    super(eventHandler, clazz, url)
  }

  createLink ():string {
    return `https://linkedin.com/shareArticle?url=${this.url}`
  }
}

export default ShareButtonLinkedIn
