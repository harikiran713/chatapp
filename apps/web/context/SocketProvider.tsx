"use client"
import React, { useCallback } from "react"

interface SocketProviderProps{
    children?:React.ReactNode
}
interface ISocketContext {
    sendMessage:(msg:string)=>any;
}
const SocketContext =React.createContext<ISocketContext | null>(null)
export const SocketProvider: React.FC<SocketProviderProps>=({children})=>{
    const sendMessage:ISocketContext['sendMessage']=useCallback((msg)=>{
        console.log("heello")

    },[])
return(
    <SocketContext.Provider value={null}>
{children}
    </SocketContext.Provider>
)
}