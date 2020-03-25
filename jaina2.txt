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

function jaina(req,resp){
    ClearBlade.init({ request: req });
    var query = ClearBlade.Query();
    
    
    

    var callback = function (err, data) {
        if (err) {
        	resp.error("update error : " + JSON.stringify(data));
        } else {
        	resp.success(data);
        }
    };

   	var col = ClearBlade.Collection({collectionName: "result"});
    query.equalTo('idme', 0);
    col.remove(query, callback);
        ClearBlade.init({ request: req });
    var query = ClearBlade.Query();
    
    

}
