/**
 *
 * food.js
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-12-01
 * @update 2014-12-01
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var FoodSchema = new Schema({
  name: { type: String },
  pic: { type: String },
  price: { type: Number },
  shop_id: { type: ObjectId }
});

mongoose.model('Food', FoodSchema);
