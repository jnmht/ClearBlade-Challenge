/**
 * Type: Micro Service
 * Description: A short-lived service which is expected to complete within a fixed period of time.
 * @param {CbServer.BasicReq} req
 * @param {string} req.systemKey
 * @param {string} req.systemSecret
 * @param {string} req.userEmail
 * @param {string} req.userid
 * @param {string} req.userToken
 * @param {boolean} req.isLogging
 * @param {[id: string]} req.params
 * @param {CbServer.Resp} resp
 */

function jain(req,resp){ 
  ClearBlade.init({ request: req });
  
      log(req.params.a)
      var newPerson = {
        users : req.params.users,
        idle : req.params.idle,
        idme : req.params.idme
    };
    var callback = function (err, data) {
        if (err) {
        	resp.error("creation error : " + JSON.stringify(data));
        } else {
        	resp.success(data);
        }
    };
    var col = ClearBlade.Collection( {collectionName: "result" } );
    col.create(newPerson, callback);
}
