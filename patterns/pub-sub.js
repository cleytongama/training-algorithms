
class PubSubPodCast {

    constructor() {
        this.podcasts = {}
    }

    publish(podcastName, message) {
        if (!this.podcasts[podcastName])
            return undefined

        for (let register of this.podcasts[podcastName]) {
            register(`${message}::${podcastName}`)
        }
    }

    subscrible(podcastName, fn) {
        let podCastCurrent = this.podcasts[podcastName] || []

        podCastCurrent = [...podCastCurrent, fn]

        this.podcasts[podcastName] = podCastCurrent
    }

    unsubscrible(podcastName, fn) {
        if (!this.podcasts[podcastName])
            return undefined

        let indexRegister = this.podcasts[podcastName].indexOf(fn)

        if (indexRegister >= 0)
            this.podcasts[podcastName].splice(indexRegister, 1)
    }

    emit(message) {
        const allPodcasts = Object.keys(this.podcasts);
        allPodcasts.map((podcastName) => {
            this.publish(podcastName, `${message}::${podcastName}`)
        })
    }

}

const PubSubPod = new PubSubPodCast()

const assinante1 = (msg) => { console.log('Assinante-1', `${msg}`) }
const assinante2 = (msg) => { console.log('Assinante-2', `${msg}`) }
const assinante3 = (msg) => { console.log('Assinante-3', `${msg}`) }


PubSubPod.subscrible('hipster', assinante1)
PubSubPod.subscrible('hipster', assinante2)
PubSubPod.subscrible('hipster', assinante3)

PubSubPod.subscrible('Lambda3', assinante3)

PubSubPod.publish('hipster', 'O melhor podcast de todos')

PubSubPod.unsubscrible('hipster', assinante1)

PubSubPod.emit('Mensagem para todos os assinantes')

