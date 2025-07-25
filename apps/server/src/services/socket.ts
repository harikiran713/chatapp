import { Server, Socket } from "socket.io";
class SocketService{
    private _io:Server;
    constructor(){
        console.log('init socket Service')
        this._io=new Server()
    }
    public initListeners()
    {
        const io=this.io;
        console.log('init socket listeners')
        io.on('connect',(socket)=>{
            console.log(`new socket connect ${socket.id}`)
            socket.on("event:message",async ({message}:{message:String})=>{
                console.log("new message",message)
            })

        })
    }
    get io(){
        return this._io;
    }

}
export default SocketService;
