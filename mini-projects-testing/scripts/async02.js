const fs = require('fs')

const readDir = (path) => {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, files) => {
            if (!err) {
                resolve(files)
            } else {
                reject(err)
            }
        })
    })
}

const statDir = (path) => {
    return new Promise((resolve, reject) => {
        fs.stat(path, (err, stats) => {
            if (!err) {
                resolve(stats)
            } else {
                reject(err)
            }
        })
    })
}

const main = async () => {

    const files = await readDir('./')

    const onlyDirectory = await Promise.all(files.map(async (file) => {
        const stats = await statDir(file)
        return {
            isDirectory: stats.isDirectory(),
            path: file
        }
    }))

    console.log(onlyDirectory.filter((item) => item.isDirectory === true))

}

main()
