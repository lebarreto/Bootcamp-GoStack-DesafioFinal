import Notification from '../schemas/Notification';

class NotificationController{

  // list notification
  async listNotification(req, res){

    const notifications = await Notification.find({
      deliveryman_id: req.userId,
    }).sort({ createdAt: 'desc' }).limit(20);

    return res.json(notifications);
  }

  async update(req, res){
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );
    return res.json(notification);
  }

}

export default new NotificationController();