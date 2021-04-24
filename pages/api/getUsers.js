import connect from '../../utils/mongodb'

const handler = async (req, res) => {
    const { db } = await connect()
    db.collection('users').find({}).toArray((err, result) => {
        if (err) throw err
        res.status(200).json({users: result})
    })
}

export default handler

