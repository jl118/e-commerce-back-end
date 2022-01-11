const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
router.get('/', async (req, res) => {
  // including associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{
        model: Product,
        through: ProductTag
      }]
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find a single tag by its `id`
router.get('/:id', async (req, res) => {
  // including its associated Product data
  try{
    const tagData = await Tag.findByPk(req.params.id, { 
      include: [{
        model: Product, 
        through: ProductTag
      }]
    });
    if(!tagData) {
      res.status(404).json({ 
        message: "No tag found by that ID."
      });
      return;
    };
    res.status(200).json(tagData);
} catch (err) {
  res.status(500).json(err);
}
});

// create a new tag
router.post('/', async (req, res) => {
  
});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  
});

// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  
});

module.exports = router;
