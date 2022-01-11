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
router.get('/:id', (req, res) => {
  
  // be sure to include its associated Product data
});

// create a new tag
router.post('/', (req, res) => {
  
});

// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  
});

// delete on tag by its `id` value
router.delete('/:id', (req, res) => {
  
});

module.exports = router;
