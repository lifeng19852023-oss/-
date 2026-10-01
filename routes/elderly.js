const express = require('express');

const router = express.Router();

router.get('/elderly', (req, res) => {
  res.json({
    code: 200,
    message: '老人列表'
  });
});

module.exports = router;