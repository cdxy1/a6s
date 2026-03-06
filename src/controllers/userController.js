import { exec } from "child_process"
import { openFile, writeFile } from "../helpers/filesIO.js"
import { generateShortId, generateUUID } from "../helpers/userIdGen.js"


export const addUser = (req, res) => {
    const data = openFile()
    let jsonData = JSON.parse(data)

    jsonData.inbounds[0].users.push({"name": req.body.username, "flow": "xtls-rprx-vision", "uuid": generateUUID()})
    jsonData.inbounds[0].tls.reality.short_id.push(generateShortId())

    const stingData = JSON.stringify(jsonData, null, 2)

    writeFile(stingData)
    exec("sudo systemctl reload sing-box.service")

    res.redirect("/")
}

export const getUsers = (req, res) => {
    const data = openFile()
    let jsonData = JSON.parse(data)
    const users = jsonData.inbounds[0].users
    const shortIdsArr = jsonData.inbounds[0].tls.reality.short_id

    let userKeypairs = {}
    for (let i = 0; i < users.length; i++) {
        userKeypairs[users[i].name ? users[i].name : users[i].uuid] = {uuid: users[i].uuid, shortId: shortIdsArr[i]}
    }
    res.render("index", {data: userKeypairs})
}
