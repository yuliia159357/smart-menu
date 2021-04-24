import { MongoClient } from 'mongodb'

const client = new MongoClient('mongodb+srv://serjukl:1221@cluster0.sd4j3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connect = async () => {
    if (!client.isConnected()) await client.connect()
    const db = client.db('smart-menu')
    return {db, client}
}

export default connect