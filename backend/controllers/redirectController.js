const Url = require('../models/linkModel')

async function increaseClicks(link) {

    const updatedLink = await Url.findByIdAndUpdate(link.id, {
      longUrl: link.longUrl,
      shortUrl: link.shortUrl,
      urlCode: link.urlCode,
      email: link.email,
      clicks: link.clicks + 1,
      date: link.date,
    }, {
      new: true,
    })
  
    if (updatedLink){
        return {
            message: 'clicks successfully updated',
            success: true
        }
    }else{
        return {
            message: 'clicks failed to update',
            success: false
        }
    }
}

const redirect = async (req, res) => {
    try{
        const url = await Url.findOne({ urlCode: req.params.code })

        if(url){
            const incrementClicks = await increaseClicks(url);

            if(incrementClicks.success){
                return res.redirect(url.longUrl)
            }else{
                res.status(404).json({message: `${incrementClicks.message}`})
            }
        }else{
            res.status(404).json({message: 'No url was found'})
        }
    }catch(error){
        console.log(error)
        res.status(500).json('Server Error')
    }
};

module.exports = {redirect}