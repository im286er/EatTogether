/**
 *
 * shop.js
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-12-01
 * @update 2014-12-01
 */

var models = require('../models');
var Shop = models.Shop;

exports.getAllShop = function (callback) {

  Shop.find(function (err, shops) {
    if (err) return callback(err);

    if (shops.length === 0) return callback(null, []);

    callback(null, shops);
  });

};

exports.newAndSave = function (name, address, tel, shop_id, callback) {

  var shop = new Shop();

  shop.name = name;
  shop.adderss = addres;
  shop.tel = tel;
  shop.shop_id = shop_id;

  shop.save(callback);

};
