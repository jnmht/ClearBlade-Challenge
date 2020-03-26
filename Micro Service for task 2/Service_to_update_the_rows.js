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

// function jain2(req,resp){
//     // These are parameters passed into the code service
//     ClearBlade.init({ request: req });
//     var callback = function (err, data) {
//         if (err) {
//         	resp.error("fetch error : " + JSON.stringify(data));
//         } else {
//         	resp.success(data);
//         }
//     };

//    	var col = ClearBlade.Collection({collectionName:"result"});
//    	var query = ClearBlade.Query();
//    	query.equalTo("idme", 1);
//     col.fetch(query, callback);
// }
function jain2(req,resp){
    
    ClearBlade.init({ request: req });
    //This example assumes a collection of items that have the columns name and age.
    var query = ClearBlade.Query();
    query.equalTo('idme', 4);
    var changes = {
        users: req.params.am
    };
    var callback = function (err, data) {
        if (err) {
        resp.error("update error : " + JSON.stringify(data));
        } else {
            log("Exists. Updating Tag ID: " + data)
        	resp.success(data);
        }
    };

var col = ClearBlade.Collection({collectionName:"result"});
col.update(query, changes, callback);
// Example


}
