import { openFile, writeFile } from "../helpers/filesIO.js"
import { generateShortId, generateUUID } from "../helpers/userIdGen.js"


export const addUser = (req, res) => {
    const data = openFile()
    let jsonData = JSON.parse(data)

    jsonData.inbounds[0].users.push({"name": "test", "flow": "xtls-rprx-vision", "uuid": generateUUID()})
    console.log(jsonData.inbounds[0].tls)
    jsonData.inbounds[0].tls.reality.short_id.push(generateShortId())

    const stingData = JSON.stringify(jsonData, null, 2)

    writeFile(stingData)
    res.send(jsonData)
}

export const getUsers = (req, res) => {
    const data = openFile()
    let jsonData = JSON.parse(data)
    const users = jsonData.inbounds[0].users
    const shortIdsArr = jsonData.inbounds[0].tls.reality.short_id

    let userKeypairs = {}
    for (let i = 0; i < users.length; i++) {
        userKeypairs[users[i].name ? users[i].name : users[i].uuid] = {uuid: users[i].uuid, short_id: shortIdsArr[i]}
    }

    res.send(userKeypairs)
}
