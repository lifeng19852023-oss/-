const elderlyService = require('../services/elderlyService');

// 获取老人列表
async function getElderlyList(req, res) {
  try {
    const data = await elderlyService.getElderlyList();

    res.json({
      code: 200,
      message: '查询成功',
      data: data
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      code: 500,
      message: '查询失败'
    });
  }
}
// 新增老人
async function createElderly(req, res) {
    try {
      // req.body（获取前端发送过来的数据）
      const { name, gender, age } = req.body;
  
      // 调用 Service（业务服务）
      const result = await elderlyService.createElderly(
        name,
        gender,
        age
      );
  
      // 返回新增成功
      res.json({
        code: 200,
        message: '新增成功',
        data: {
          id: result.insertId,
          name,
          gender,
          age
        }
      });
  
    } catch (error) {
      // console.error（输出错误信息）
      console.error(error);
  
      res.status(500).json({
        code: 500,
        message: '新增失败'
      });
    }
  }

  // 修改老人信息
async function updateElderly(req, res) {
    try {
      // req.params（获取 URL 参数）
      const { id } = req.params;
  
      // req.body（获取请求正文中的数据）
      const { name, gender, age } = req.body;
  
      // 调用 Service（业务服务）
      const result = await elderlyService.updateElderly(
        id,
        name,
        gender,
        age
      );
  
      // affectedRows（实际被修改的行数）
      if (result.affectedRows === 0) {
        return res.status(404).json({
          code: 404,
          message: '老人不存在'
        });
      }
  
      res.json({
        code: 200,
        message: '修改成功'
      });
  
    } catch (error) {
      // console.error（输出错误）
      console.error(error);
  
      res.status(500).json({
        code: 500,
        message: '修改失败'
      });
    }
  }
// 删除老人
async function deleteElderly(req, res) {
    try {
      // req.params（获取 URL 参数）
      const { id } = req.params;
  
      // 调用 Service（业务服务）
      const result = await elderlyService.deleteElderly(id);
  
      // affectedRows（实际删除的行数）
      if (result.affectedRows === 0) {
        return res.status(404).json({
          code: 404,
          message: '老人不存在'
        });
      }
  
      res.json({
        code: 200,
        message: '删除成功'
      });
  
    } catch (error) {
      // console.error（输出错误信息）
      console.error(error);
  
      res.status(500).json({
        code: 500,
        message: '删除失败'
      });
    }
  }

module.exports = {
  getElderlyList,
  createElderly,
  updateElderly,
  deleteElderly
};