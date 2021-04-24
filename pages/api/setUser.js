import connect from '../../utils/mongodb'

const setUser = async (req, res) => {
    const { db } = await connect()
    console.log(req.body)
    
    db.collection('users').insertOne((req.body), (err, result) => {
        if (err) throw err
        console.log('here')
        res.status(200).json({users: 'success'})
    })
}

export default setUser