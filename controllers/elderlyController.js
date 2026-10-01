const elderlyService = require('../services/elderlyService');

function getElderlyList(req, res) {
  elderlyService.getElderlyList((err, results) => {

    if (err) {
      res.writeHead(500, {
        'Content-Type': 'application/json; charset=utf-8'
      });

      res.end(JSON.stringify({
        code: 500,
        message: '查询老人数据失败'
      }));

      return;
    }

    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8'
    });

    res.end(JSON.stringify({
      code: 200,
      data: results
    }));
  });
}

function createElderly(req, res) {
    let body = '';
  
    req.on('data', chunk => {
      body += chunk;
    });
  
    req.on('end', () => {
      let data;
  
      try {
        data = JSON.parse(body);
      } catch (error) {
        res.writeHead(400, {
          'Content-Type': 'application/json; charset=utf-8'
        });
  
        res.end(JSON.stringify({
          code: 400,
          message: '请求数据不是有效的 JSON'
        }));
  
        return;
      }
  
      elderlyService.createElderly(data, (err, result) => {
        if (err) {
          res.writeHead(500, {
            'Content-Type': 'application/json; charset=utf-8'
          });
  
          res.end(JSON.stringify({
            code: 500,
            message: '新增老人失败'
          }));
  
          return;
        }
  
        res.writeHead(201, {
          'Content-Type': 'application/json; charset=utf-8'
        });
  
        res.end(JSON.stringify({
          code: 201,
          message: '新增老人成功',
          data: {
            id: result.insertId,
            ...data
          }
        }));
      });
    });
  }


  function updateElderly(req, res) {
    const parts = req.url.split('/');
    const id = Number(parts[3]);
  
    let body = '';
  
    req.on('data', chunk => {
      body += chunk;
    });
  
    req.on('end', () => {
      let data;
  
      try {
        data = JSON.parse(body);
      } catch (error) {
        res.writeHead(400, {
          'Content-Type': 'application/json; charset=utf-8'
        });
  
        res.end(JSON.stringify({
          code: 400,
          message: '请求数据不是有效的 JSON'
        }));
  
        return;
      }
  
      elderlyService.updateElderly(id, data, (err, result) => {
        if (err) {
          res.writeHead(500, {
            'Content-Type': 'application/json; charset=utf-8'
          });
  
          res.end(JSON.stringify({
            code: 500,
            message: '修改老人失败'
          }));
  
          return;
        }
  
        if (result.affectedRows === 0) {
          res.writeHead(404, {
            'Content-Type': 'application/json; charset=utf-8'
          });
  
          res.end(JSON.stringify({
            code: 404,
            message: '老人不存在'
          }));
  
          return;
        }
  
        res.writeHead(200, {
          'Content-Type': 'application/json; charset=utf-8'
        });
  
        res.end(JSON.stringify({
          code: 200,
          message: '修改老人成功',
          data: {
            id,
            ...data
          }
        }));
      });
    });
  }
  function deleteElderly(req, res) {
    const parts = req.url.split('/');
    const id = Number(parts[3]);
  
    elderlyService.deleteElderly(id, (err, result) => {
      if (err) {
        res.writeHead(500, {
          'Content-Type': 'application/json; charset=utf-8'
        });
  
        res.end(JSON.stringify({
          code: 500,
          message: '删除老人失败'
        }));
  
        return;
      }
  
      if (result.affectedRows === 0) {
        res.writeHead(404, {
          'Content-Type': 'application/json; charset=utf-8'
        });
  
        res.end(JSON.stringify({
          code: 404,
          message: '老人不存在'
        }));
  
        return;
      }
  
      res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8'
      });
  
      res.end(JSON.stringify({
        code: 200,
        message: '删除老人成功'
      }));
    });
  }
module.exports = {
  getElderlyList,
  createElderly,
  updateElderly,
  deleteElderly
};