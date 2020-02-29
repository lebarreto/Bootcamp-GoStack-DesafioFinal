import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import dbConfig from '../config/database';
import User from '../app/models/User';
import Recipient from '../app/models/Recipient';
import File from '../app/models/File';
import Delivery from '../app/models/Delivery';
import Signature from '../app/models/Signature';
import Order from '../app/models/Order';
import DeliveryProblem from '../app/models/DeliveryProblem';

const models = [User, Recipient, File, Delivery, Signature, Order, DeliveryProblem];

class Database{
  constructor(){
    this.init();
    this.mongo();
  }

  init(){
    this.connection = new Sequelize(dbConfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }

  mongo(){
    this.mongoConnection = mongoose.connect(
      'mongodb://localhost:27017/fastfeet',
      { useNewUrlParser: true, useFindAndModify: true }
    );
  }

}

export default new Database();