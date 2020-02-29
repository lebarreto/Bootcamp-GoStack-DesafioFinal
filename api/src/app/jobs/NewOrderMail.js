import Mail from '../../lib/Mail';

class NewOrderMail{

  get key(){
    return 'NewOrderMail';
  }

  async handle({ data }){
    console.log(data);

    await Mail.sendMail({
      to: `${data.delivery.delivery.name} <${data.delivery.delivery.email}>`,
      subject: 'New Order',
      template: 'newOrder',
      context: {
        delivery: data.delivery.delivery.name,
        recipient: data.delivery.recipient.name,
        product: data.delivery.product,
      }
    });
  }
}

export default new NewOrderMail();