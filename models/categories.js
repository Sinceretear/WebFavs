var mongoose = require('mongoose');

var categoriesSchema = mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  create_date: {
    type: Date,
    default: Date.now
  }

});

var Category = module.exports = mongoose.model('categories', categoriesSchema);


// Get Categories
module.exports.getCategories = function(callback, limit) {
  Category.find(callback).limit(limit);
}

// Add Genre
module.exports.addCategory = function(category, callback) {
  Category.create(category, callback);
}

// Update Genre
module.exports.updateCategory = function(id, category, options, callback) {
  var query = {_id: id};
  var update = {
    name: category.name
  }
  Category.findOneAndUpdate(query, update, options, callback);
}

// Delete
module.exports.deleteCategory = function(id, callback) {
  var query = {_id: id};
  Category.remove(query, callback);
}
