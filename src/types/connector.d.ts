export type Status = "accepted" | "rejected" | "error" | undefined

export type Message = {
    id?: number
    method?: string
    params?: unknown[]
}

export type StoredMessage = Omit<Message, "id"> & {
    uuid: string
    origin: string
    sessionId: string
    timestamp: number
    status: Status
    fulfilled: boolean
}

export type MessageEntry = {
    uuid: string
    id?: number
    status: Status
    fulfilled: boolean
}

export type InstanceState = {
    origin?: string
    session?: string
    type?: "popup" | "iframe" | "client"
}

export type ConnectorState = {
    origin: string
    session?: string
    messageQueue: MessageEntry[]
    timestamp: number
    appInfo?: { name?: string; logo?: string }
    walletId?: string | false
    link?: boolean
}
