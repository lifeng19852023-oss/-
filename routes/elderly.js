const express = require('express');

const router = express.Router();

const elderlyController = require('../controllers/elderlyController');

// 获取老人列表
router.get('/elderly', elderlyController.getElderlyList);

// 新增老人
router.post('/elderly', elderlyController.createElderly);

// 修改老人信息
router.put('/elderly/:id', elderlyController.updateElderly);

// DELETE（删除）
router.delete('/elderly/:id', elderlyController.deleteElderly);

module.exports = router;