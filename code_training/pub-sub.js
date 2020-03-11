const channels = () => {

    const channels = {}

    const subscribe = (chanelName, callback) => {
        const currentCbs = channels[chanelName] || []
        currentCbs.push(callback)
        channels[chanelName] = currentCbs
    }

    const publish = (chanelName, message) => {
        if (channels[chanelName]) {
            channels[chanelName].forEach(fn => fn(message));
        }
    }

    const unsubscribe = (chanelName, callback) => {
        const index = (channels[chanelName] || []).indexOf(callback)

        if (index >= 0) {
            channels[chanelName].splice(index, 1);
        }
    }

    const broadcast = message => {
        Object.keys(channels).map(channel => publish(channel, message))
    }

    return {
        publish,
        subscribe,
        unsubscribe,
        broadcast
    }
}

const socket = channels()
const fn = (message) => {
    console.log("fn message1", message)
}

socket.subscribe("futebol", fn)

socket.subscribe("futebol", message => {
    console.log("futebol1 message", message)
})
socket.subscribe("volei", message => {
    console.log("message2 volei", message)
})

socket.broadcast("broadcast agora vai")

// setInterval(() => {
//     socket.publish("futebol", {
//         message: "time a e time b"
//     })

//     // socket.unsubscribe("futebol", fn)

// }, 1000)









