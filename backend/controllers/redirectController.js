const Url = require('../models/linkModel')

const redirect = async (req, res) => {
    try{
        const url = await Url.findOne({ urlCode: req.params.code })

        if(url){
            return res.redirect(url.longUrl)
        }else{
            res.status(404).json({message: 'No url found'})
        }
    }catch(error){
        console.log(error)
        res.status(500).json('Server Error')
    }
};

module.exports = {redirect}