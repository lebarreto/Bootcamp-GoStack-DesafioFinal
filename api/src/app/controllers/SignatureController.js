import Signature from "../models/Signature";

class SignatureController{
  async upload(req, res){

    const { originalname: name, filename: path } = req.file;
    const file = await Signature.create({
      name, path
    });

    return res.json(file);
    
  }
}

export default new SignatureController();