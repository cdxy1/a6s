import fs from "node:fs"

export const openFile = () => {
    return fs.readFileSync("./example.json")
}

export const writeFile = (data) => {
    fs.writeFileSync("./example.json", data)
}
