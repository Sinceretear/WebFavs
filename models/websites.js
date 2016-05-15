var mongoose = require('mongoose');

var websitesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  info: {
    type: String,
    required: true
  },

  mainImg: {
    type: String,
    required: true
  },

  thumbnailImg: {
    type: String,
    required: true
  },

  faviconImg: {
    type: String,
  },

  description: {
    type: String,
  },

  category: {
    type: String,
    required: true
  },

  create_date: {
    type: Date,
    default: Date.now
  }
});

var Website = module.exports = mongoose.model('websites', websitesSchema);

// Get Websites
module.exports.getWebsites = function(callback, limit) {
  Website.find(callback).limit(limit);
}

// Get One Website
module.exports.getWebsiteById = function(id, callback) {
  Website.findById(id, callback);
}

// Add Website
module.exports.addWebsite = function(website, callback) {
  Website.create(website, callback);
}

// Update Website
module.exports.updateWebsite = function(id, website, options, callback) {
  var query = {_id: id};
  var update = {
    name: website.name,
    info: website.info,
    mainImg: website.mainImg,
    thumbnailImg: website.thumbnailImg,
    faviconImg: website.faviconImg,
    description: website.description,
    category: website.category
  }
  Website.findOneAndUpdate(query, update, options, callback);
}

// Delete Website
module.exports.deleteWebsite = function(id, callback) {
  var query = {_id: id};
  Website.remove(query, callback);
}
