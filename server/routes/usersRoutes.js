const {Router} = require('express');
const User = require('../models/User.model');
const router = Router();




router.post('/save',async(req,res)=> {
    const {data} = req.body;
    const [testData] =data;
    if (data.length !==0) {
        data.forEach(async el => {
            const responce =  await User.insertNewUser(el)
        });
    }
    res.sendStatus(200);
})


router.get('/receive',async(req,res)=>{
    try {
        const data = await User.getAllElements();
        return res.status(200).json(data)
        
        
    } catch (e) {
        console.log(e.message);
        return res.sendStatus(404)
    }
})


module.exports = router;