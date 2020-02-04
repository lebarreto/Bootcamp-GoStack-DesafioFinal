import Mail from '../../lib/Mail';

class CancellationMail{

  get key(){
    return 'CancellationMail';
  }

  async handle({ data }){
    console.log(data);

    await Mail.sendMail({
      to: `${data.order.delivery.name} <${data.order.delivery.email}>`,
      subject: 'Cancellation',
      template: 'cancellation',
      context: {
        recipient: data.order.recipient.name,
        product: data.order.product,
      }
    });
  }
}

export default new CancellationMail();