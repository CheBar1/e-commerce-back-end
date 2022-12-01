const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
router.get('/', async (req, res) => {
  try {
// be sure to include its associated Products
    const categoryData = await Category.findAll({
      include:[{model: Product}],
    });
    res.status(200).json(categoryData);
  } catch (err){
    res.status(500).json(err);
  }
});

// find one category by its `id` value
router.get('/:id', async (req, res) => {
  try {
// be sure to include its associated Products
    const categoryData = await Category.findByPk(req.params.id,{
      include:[{model:Product}],
    });
    if (!categoryData){
      res.status(404).json({message: 'No category found with this id!'});
      return;
    };
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// create a new category 
router.post('/', async (req, res) => {
  try {
// Use Sequelize's `create()` method to add a row to the table
  const newCategory = await Category.create(req.body);  
// Send the newly created row as a JSON object
   return res.json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});


// update a category by its `id` value 
router.put('/:id', async (req, res) => {
  try {
// calls the update method on the Category model
  const updatedCategory = await Category.update(
    { id: req.params.id,
      category_name: req.body.category_name
    }, 
// gets a category based on the category_id given in the request parameters
    { where: {
        id: req.params.id
      }
    });
    if (!updatedCategory[0]){
      res.status(404).json({message: 'No category found with this id!'});
      return;
    };
    res.status(200).json(upatedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});  


// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
// looks for the category based on the category_id given in the request parameters
  const deletedCategory = await Category.destroy({
    where: {
      id: req.params.id,
    }
  });
  res.json(deletedCategory);
});
 

module.exports = router;
