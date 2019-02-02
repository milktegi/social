const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => res.json({
  message: 'posts 정상 작동'
}));

module.exports = router;