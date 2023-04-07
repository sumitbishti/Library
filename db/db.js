const mongoose = require('mongoose')

const connect = async (uri) => {
    try {
        await mongoose.connect(uri)
        console.log('connected to mongoose...')
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = connect