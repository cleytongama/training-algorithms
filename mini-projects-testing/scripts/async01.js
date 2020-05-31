const fs = require('fs')

const readDir = async (path) => {
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

readDir('teste').then((files) => console.log(files))