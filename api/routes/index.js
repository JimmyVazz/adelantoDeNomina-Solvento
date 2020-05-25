const express = require('express');
const router  = express.Router();

const base_url = 'http://localhost:3000/api/v1/'

/* GET home page */
router.get('/', (req, res, next) => {
  res.json({
    data: 'ya quedo'
  });
});



module.exports = router;
