const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
router.get('/', async (req, res) => {
  try {
  // be sure to include its associated Product data
    const tagData = await Tag.findAll({
      include:[{model: Product}],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// find a single tag by its `id`
router.get('/:id', async (req, res) => {
  try {
// be sure to include its associated Product data
    const tagData = await Tag.findByPk(req.params.id, {
      include:[{model:Product}],
    });
    if (!tagData){
      res.status(404).json({message: 'No tag found with this id!'});
      return;
    };
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// create a new tag
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
// Send the newly created row as a JSON object
      return res.json(newTag);
    } catch (err) {
      res.status(500).json(err);
    }
});


// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
// calls the update method on the Tag model 
    const updatedTag = await Tag.update(
      { tag_name: req.body.tag_name},
// gets a tag based on the id given in the request parameters
      { where: {
        id: req.params.id
      }
    });
    if (!updatedTag){
      res.status(404).json({message: 'No tag found with this id!'});
      return;
    };
    res.status(200).json(updatedTag);
  } catch (err) {
    res.status(500).json(err);
  }
});


// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
// looks for the tag based on the id given in the request parameters
const deletedTag = await Tag.destroy({
  where: {
    id: req.params.id,
  }
});
res.json(deletedTag);
});

module.exports = router;
