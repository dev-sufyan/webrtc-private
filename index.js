import { start } from 'libp2p-webrtc-star-signalling-server'

start({
    port: 13579,
    host: '0.0.0.0',
    metrics: false
}).then(server => {
    console.log('Signaling server started on: ' + server.info.uri)
    let peers = server.peers()
    console.log('Peers: ' + JSON.stringify(peers))
    setInterval(() => {
        peers = server.peers()
        console.log('Peers: ' + JSON.stringify(peers.toString()))
        try {
            console.log(Object.keys(peers))
        } catch (error) {
            
        }

    }, 10000)
    // stop when user presses Ctrl+C
    process.on('SIGINT', () => {
        console.log('Stopping server')
        server.stop()
        process.exit()
    })
}).catch(err => {
    console.log('Error: ', err)
})
