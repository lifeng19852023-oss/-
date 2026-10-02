const express = require('express');

const router = express.Router();

const elderlyController = require('../controllers/elderlyController');
const validateElderly = require('../middleware/elderlyValidation');
const asyncHandler = require('../middleware/asyncHandler');
const paginationValidation = require('../middleware/paginationValidation');
const ageValidation = require('../middleware/ageValidation');
const sortValidation = require('../middleware/sortValidation');
// 获取老人统计数据
router.get('/elderly/statistics', elderlyController.getElderlyStatistics);

// 获取老人列表
router.get('/elderly', paginationValidation, ageValidation, sortValidation, elderlyController.getElderlyList);

// 新增老人
router.post('/elderly',validateElderly, asyncHandler(elderlyController.createElderly));

// 修改老人信息
router.put('/elderly/:id', elderlyController.updateElderly);

// DELETE（删除）
router.delete('/elderly/:id', elderlyController.deleteElderly);


module.exports = router;