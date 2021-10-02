import { EventEmitter } from 'events';

EventEmitter

export class GatewayConnection {
    connection: WebSocket;
    private emitter: EventEmitter;

    constructor() {
        this.connection = new WebSocket("wss://api.aaqc.svaren.dev/gateway");
        this.emitter = new EventEmitter();
        this.handleMessage = this.handleMessage.bind(this);
        
        this.connection.addEventListener("message", this.handleMessage);
    }

    private handleMessage(event: WebSocketMessageEvent) {
        if (event.data) {
            try {
                const message = JSON.parse(event.data);
                const { type, data } = message;

                this.emitter.emit("message", type, data || null);
            } catch (error) {
                console.error(error);
            }
        }
    }

    send(type: string, data?: object | undefined) {
        this.connection.send(JSON.stringify({ type: type, data: data || undefined }));
    }

    addListener(listener: (type: string, data: object | undefined) => void) {
        return this.emitter.addListener("message", listener);
    }

    removeListener(listener: (type: string, data: object | undefined) => void) {
        return this.emitter.removeListener("message", listener);
    }
}

const gatewayConnection = new GatewayConnection();
export default gatewayConnection;