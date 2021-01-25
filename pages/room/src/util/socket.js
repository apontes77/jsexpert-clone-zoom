class SocketBuilder {
    constructor({ socketUrl }) {
        this.socketUrl = socketUrl
        this.setOnUserConnected = () => {}
        this.setOnUserDisconnected = () => {}
    }
    setOnUserConnected(fn) {
        this.setOnUserConnected = fn

        return this
    }

    setOnUserDisconnected(fn) {
        this.setOnUserDisconnected = fn
        return this
    }

    build() {
        const socket = io.connect(this.socketUrl, {
            withCredentials: false
        })

        socket.on('user-connected', this.OnUserConnected)
        socket.on('user-disconnected', this.OnUserDisconnected)

        return socket
    }
}