import crypto from "node:crypto"

export const generateShortId = () => {
    return crypto.randomBytes(4).toString("hex")
}

export const generateUUID = () => {
    return crypto.randomUUID()
}
