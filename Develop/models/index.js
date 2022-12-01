// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    //unique: false / ? foreignKey: 'product_id'
  },
  // Define an alias for when data is retrieved/see product routes
  as: 'planned_trips'//??
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Products, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    //unique: false / ? foreignKey: 'tag_id'
  },
  // Define an alias for when data is retrieved/see Tag routes
  as: 'planned_trips'//??
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
