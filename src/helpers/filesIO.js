import fs from "node:fs"


export const openFile = () => {
    return fs.readFileSync("/etc/sing-box/config.json")
}

export const writeFile = (data) => {
    fs.writeFileSync("/etc/sing-box/config.json", data)
}
