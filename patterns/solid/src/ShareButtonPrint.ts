import AbstractShareButton from './AbstractShareButton'

// eslint-disable-next-line no-unused-vars
import EventHandler from './EventHandler'

class ShareButtonPrint extends AbstractShareButton {
  // eslint-disable-next-line no-useless-constructor
  constructor (eventHandler:EventHandler, clazz:string) {
    super(eventHandler, clazz)
  }

  createAction () {
    return () => window.print()
  }
}

export default ShareButtonPrint
