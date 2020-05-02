// eslint-disable-next-line no-unused-vars
import AbstractShareButton from './AbstractShareButton'
import ShareButtonTwitter from './ShareButtonTwitter'
import ShareButtonFacebook from './ShareButtonFacebook'
import ShareButtonLinkedIn from './ShareButtonLinkedIn'
import ShareButtonPrint from './ShareButtonPrint'
import DOMEventHandler from './DOMEventHandler'
// eslint-disable-next-line no-unused-vars
import MockEventHandler from './MockEventHandler'

const eventHandler = new DOMEventHandler()

const twitter: AbstractShareButton = new ShareButtonTwitter(eventHandler, '.btn-twitter', 'http://youtube.com/rodrigobranas')
const facebook:AbstractShareButton = new ShareButtonFacebook(eventHandler, '.btn-facebook', 'http://youtube.com/rodrigobranas')
const linkedIn:AbstractShareButton = new ShareButtonLinkedIn(eventHandler, '.btn-linkedin', 'http://youtube.com/rodrigobranas')
const print:AbstractShareButton = new ShareButtonPrint(eventHandler, '.btn-print')

twitter.bind()
facebook.bind()
linkedIn.bind()
print.bind()
