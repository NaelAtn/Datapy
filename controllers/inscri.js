const Inscri = require("../model/Inscri")

exports.Inscription = async(req,res)=> {
const {name,email ,phone , message ,format,course } = req.body
    
try {
   
    const newInscri = new Inscri({...req.body })
    

    await newInscri.save()
    

    res.status(200).send({success : [{msg:"inscription avec succès...Un de nos conseillers vous contactera au plus vite."}] , newInscri })

} catch (error) {
    res.status(400).send({msg : 'inscription non envoyé', error})   
}
}


exports.getInscriptions= async (req,res) => {
    try {
        const listInscri = await Inscri.find();
        res.status(200).send({msg : 'listInscri',  listInscri})
        
    } catch (error) {
        res.status(400).send({msg : 'cannot get all list', error})
    }
  }


  exports.deleteInscri = async (req,res) => {
    try {
        const{_id}= req.params;
        await Inscri.findOneAndDelete({_id})
        res.status(200).send({msg : "Inscri deleted"})
    } catch (error) {
        res.status(400).send({msg : "cannot delete", error})      
    }
}     