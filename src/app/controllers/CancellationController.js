import Cancellation from "../schemas/Cancellation";

class CancellationController{

  // list cancellation
  async list(req, res){

    const cancellation = await Cancellation.find({
      deliveryman_id: req.userId,
    }).sort({ createdAt: 'desc' }).limit(20);

    return res.json(cancellation);
  }

  async update(req, res){
    const cancellation = await Cancellation.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );
    return res.json(cancellation);
  }

}

export default new CancellationController();