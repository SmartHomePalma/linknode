{"filter":false,"title":"redis.js","tooltip":"/redis.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":195,"column":0},"end":{"row":195,"column":75}},"text":"exports.setRedis = function(devId, userId, slotId , slotState , callback) {"},{"action":"insertText","range":{"start":{"row":195,"column":75},"end":{"row":196,"column":0}},"text":"\r\n"},{"action":"insertLines","range":{"start":{"row":196,"column":0},"end":{"row":241,"column":0}},"lines":["\tif (redis_connected) {","\t\tif(devId === null) {","\t\t\tclient.get(userId, function(err, deviceId) {","\t\t\t\tif (err) {","\t\t\t\t\tconsole.log(err);","\t\t\t\t}","\t\t\t\tif (deviceId === null) {","\t\t\t\t\tconsole.log(\"NOTFOUND\");","\t\t\t\t\tcallback(\"NOTFOUND\"); ","\t\t\t\t} else {","\t\t\t\t\tif(deviceId.length == 8) {","\t\t\t\t\t\tclient.get(deviceId , function(err, result) {","\t\t\t\t\t\t\tif (err) {","\t\t\t\t\t\t\t\tconsole.log(err);","\t\t\t\t\t\t\t}","\t\t\t\t\t\t\treplacePos(result, slotId, slotState ,function(deviceState) {","\t\t\t\t\t\t\t\tclient.set(deviceId, deviceState);","\t\t\t\t\t\t\t\tconsole.log('Device State Update [' + deviceId + ':(' + result + '->' + deviceState + ')]');","\t\t\t\t\t\t\t\tcallback(deviceState); ","\t\t\t\t\t\t\t});","\t\t\t\t\t\t}); ","\t\t\t\t\t}","\t\t\t\t}","\t\t\t}); ","\t\t} else {","\t\t\tif(devId.length == 8) {","\t\t\t\tclient.get(devId , function(err, result) {","\t\t\t\t\tif (err) {","\t\t\t\t\t\tconsole.log(err);","\t\t\t\t\t}","\t\t\t\t\treplacePos(result, slotId, slotState ,function(deviceState) {","\t\t\t\t\t\tclient.set(devId, deviceState);","\t\t\t\t\t\tconsole.log('Device State Update [' + devId + ':(' + result + '->' + deviceState + ')]');","\t\t\t\t\t\tcallback(deviceState); ","\t\t\t\t\t});","\t\t\t\t}); ","\t\t\t} else {","\t\t\t\tconsole.log(\"NOTFOUND\");","\t\t\t\tcallback(\"NOTFOUND\"); ","\t\t\t}","\t\t}","\t} else {","\t\tconsole.log(\"Error :Redis not connected!\");","\t\tcallback(\"DB_ERR\");","\t}"]},{"action":"insertText","range":{"start":{"row":241,"column":0},"end":{"row":241,"column":2}},"text":"};"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":220,"column":0},"end":{"row":220,"column":9}},"text":"\t\t} else "},{"action":"removeLines","range":{"start":{"row":197,"column":0},"end":{"row":220,"column":0}},"nl":"\r\n","lines":["\t\tif(devId === null) {","\t\t\tclient.get(userId, function(err, deviceId) {","\t\t\t\tif (err) {","\t\t\t\t\tconsole.log(err);","\t\t\t\t}","\t\t\t\tif (deviceId === null) {","\t\t\t\t\tconsole.log(\"NOTFOUND\");","\t\t\t\t\tcallback(\"NOTFOUND\"); ","\t\t\t\t} else {","\t\t\t\t\tif(deviceId.length == 8) {","\t\t\t\t\t\tclient.get(deviceId , function(err, result) {","\t\t\t\t\t\t\tif (err) {","\t\t\t\t\t\t\t\tconsole.log(err);","\t\t\t\t\t\t\t}","\t\t\t\t\t\t\treplacePos(result, slotId, slotState ,function(deviceState) {","\t\t\t\t\t\t\t\tclient.set(deviceId, deviceState);","\t\t\t\t\t\t\t\tconsole.log('Device State Update [' + deviceId + ':(' + result + '->' + deviceState + ')]');","\t\t\t\t\t\t\t\tcallback(deviceState); ","\t\t\t\t\t\t\t});","\t\t\t\t\t\t}); ","\t\t\t\t\t}","\t\t\t\t}","\t\t\t}); "]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":196,"column":23},"end":{"row":197,"column":0}},"text":"\r\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":196,"column":23},"end":{"row":197,"column":0}},"text":"\r\n"},{"action":"insertText","range":{"start":{"row":197,"column":0},"end":{"row":197,"column":2}},"text":"\t\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":213,"column":0},"end":{"row":213,"column":3}},"text":"\t\t}"},{"action":"removeText","range":{"start":{"row":212,"column":4},"end":{"row":213,"column":0}},"text":"\r\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":197,"column":0},"end":{"row":197,"column":3}},"text":"\t\t{"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":196,"column":23},"end":{"row":197,"column":0}},"text":"\r\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":197,"column":0},"end":{"row":197,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":198,"column":0},"end":{"row":198,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":199,"column":0},"end":{"row":199,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":200,"column":0},"end":{"row":200,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":201,"column":0},"end":{"row":201,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":202,"column":0},"end":{"row":202,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":203,"column":0},"end":{"row":203,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":204,"column":0},"end":{"row":204,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":205,"column":0},"end":{"row":205,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":206,"column":0},"end":{"row":206,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":207,"column":0},"end":{"row":207,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":208,"column":0},"end":{"row":208,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":209,"column":0},"end":{"row":209,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":210,"column":0},"end":{"row":210,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":211,"column":0},"end":{"row":211,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":195,"column":35},"end":{"row":195,"column":41}},"text":"userId"},{"action":"insertText","range":{"start":{"row":195,"column":35},"end":{"row":195,"column":36}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":195,"column":36},"end":{"row":195,"column":37}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":195,"column":37},"end":{"row":195,"column":38}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":195,"column":38},"end":{"row":195,"column":39}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":195,"column":39},"end":{"row":195,"column":40}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":195,"column":40},"end":{"row":195,"column":41}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":195,"column":41},"end":{"row":195,"column":42}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":195,"column":44},"end":{"row":195,"column":50}},"text":"slotId"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":195,"column":43},"end":{"row":195,"column":44}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":195,"column":46},"end":{"row":195,"column":55}},"text":"slotState"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":195,"column":45},"end":{"row":195,"column":46}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":195,"column":44},"end":{"row":195,"column":45}},"text":","}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":195,"column":43},"end":{"row":195,"column":44}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":195,"column":42},"end":{"row":195,"column":43}},"text":","}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":195,"column":42},"end":{"row":195,"column":43}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":195,"column":44},"end":{"row":195,"column":45}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":195,"column":45},"end":{"row":195,"column":46}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":195,"column":46},"end":{"row":195,"column":47}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":195,"column":47},"end":{"row":195,"column":48}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":195,"column":48},"end":{"row":195,"column":49}},"text":","}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":195,"column":49},"end":{"row":195,"column":50}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":202,"column":65},"end":{"row":203,"column":0}},"text":"\r\n"},{"action":"insertText","range":{"start":{"row":203,"column":0},"end":{"row":203,"column":5}},"text":"\t\t\t\t\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":203,"column":5},"end":{"row":203,"column":6}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":203,"column":6},"end":{"row":203,"column":7}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":203,"column":7},"end":{"row":203,"column":8}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":203,"column":5},"end":{"row":203,"column":8}},"text":"res"},{"action":"insertText","range":{"start":{"row":203,"column":5},"end":{"row":203,"column":11}},"text":"result"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":203,"column":11},"end":{"row":203,"column":12}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":203,"column":12},"end":{"row":203,"column":21}},"text":"Heartbeat"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":203,"column":21},"end":{"row":203,"column":22}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":203,"column":22},"end":{"row":203,"column":23}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":203,"column":23},"end":{"row":203,"column":24}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":203,"column":24},"end":{"row":203,"column":31}},"text":"timeout"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":203,"column":31},"end":{"row":203,"column":32}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":203,"column":32},"end":{"row":204,"column":0}},"text":"\r\n"},{"action":"insertText","range":{"start":{"row":204,"column":0},"end":{"row":204,"column":5}},"text":"\t\t\t\t\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":204,"column":5},"end":{"row":204,"column":6}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":204,"column":6},"end":{"row":204,"column":7}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":204,"column":7},"end":{"row":204,"column":8}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":204,"column":5},"end":{"row":204,"column":8}},"text":"res"},{"action":"insertText","range":{"start":{"row":204,"column":5},"end":{"row":204,"column":11}},"text":"result"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":204,"column":11},"end":{"row":204,"column":12}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":204,"column":12},"end":{"row":204,"column":18}},"text":"Sensor"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":204,"column":18},"end":{"row":204,"column":19}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":204,"column":19},"end":{"row":204,"column":20}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":204,"column":20},"end":{"row":204,"column":21}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":204,"column":21},"end":{"row":204,"column":22}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":204,"column":22},"end":{"row":204,"column":23}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":204,"column":23},"end":{"row":204,"column":24}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":204,"column":24},"end":{"row":204,"column":25}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":204,"column":25},"end":{"row":204,"column":26}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":208,"column":0},"end":{"row":208,"column":7}},"text":"\t\t\t\t});"},{"action":"removeText","range":{"start":{"row":207,"column":28},"end":{"row":208,"column":0}},"text":"\r\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":202,"column":0},"end":{"row":202,"column":65}},"text":"\t\t\t\treplacePos(result, slotId, slotState ,function(deviceState) {"},{"action":"removeText","range":{"start":{"row":201,"column":5},"end":{"row":202,"column":0}},"text":"\r\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":204,"column":23},"end":{"row":204,"column":34}},"text":"deviceState"},{"action":"insertText","range":{"start":{"row":204,"column":23},"end":{"row":204,"column":29}},"text":"result"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":206,"column":14},"end":{"row":206,"column":25}},"text":"deviceState"},{"action":"insertText","range":{"start":{"row":206,"column":14},"end":{"row":206,"column":20}},"text":"result"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":205,"column":74},"end":{"row":205,"column":85}},"text":"deviceState"},{"action":"insertText","range":{"start":{"row":205,"column":74},"end":{"row":205,"column":80}},"text":"result"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":205,"column":25},"end":{"row":205,"column":30}},"text":"State"},{"action":"insertText","range":{"start":{"row":205,"column":25},"end":{"row":205,"column":34}},"text":"Heartbeat"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":205,"column":78},"end":{"row":205,"column":84}},"text":"result"},{"action":"insertText","range":{"start":{"row":205,"column":78},"end":{"row":205,"column":94}},"text":"result.Heartbeat"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":202,"column":5},"end":{"row":203,"column":0}},"text":"\r\n"},{"action":"insertText","range":{"start":{"row":203,"column":0},"end":{"row":203,"column":5}},"text":"\t\t\t\t\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":202,"column":5},"end":{"row":202,"column":6}},"text":"v"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":202,"column":6},"end":{"row":202,"column":7}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":202,"column":7},"end":{"row":202,"column":8}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":202,"column":8},"end":{"row":202,"column":9}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":202,"column":9},"end":{"row":202,"column":10}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":202,"column":10},"end":{"row":202,"column":11}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":202,"column":11},"end":{"row":202,"column":12}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":202,"column":12},"end":{"row":202,"column":13}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":202,"column":13},"end":{"row":202,"column":14}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":202,"column":14},"end":{"row":202,"column":15}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":202,"column":15},"end":{"row":202,"column":31}},"text":"result.Heartbeat"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":202,"column":31},"end":{"row":202,"column":32}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":206,"column":62},"end":{"row":206,"column":68}},"text":"result"},{"action":"insertText","range":{"start":{"row":206,"column":62},"end":{"row":206,"column":63}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":206,"column":63},"end":{"row":206,"column":64}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":206,"column":64},"end":{"row":206,"column":65}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":195,"column":8},"end":{"row":195,"column":16}},"text":"setRedis"},{"action":"insertText","range":{"start":{"row":195,"column":8},"end":{"row":195,"column":20}},"text":"setheartbeat"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":195,"column":65},"end":{"row":196,"column":0}},"text":"\r\n"},{"action":"insertText","range":{"start":{"row":196,"column":0},"end":{"row":196,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":196,"column":1},"end":{"row":196,"column":22}},"text":"var userinfo = Users;"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":196,"column":5},"end":{"row":196,"column":9}},"text":"user"},{"action":"insertText","range":{"start":{"row":196,"column":5},"end":{"row":196,"column":6}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":196,"column":6},"end":{"row":196,"column":7}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":196,"column":7},"end":{"row":196,"column":8}},"text":"v"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":202,"column":5},"end":{"row":203,"column":0}},"text":"\r\n"},{"action":"insertText","range":{"start":{"row":203,"column":0},"end":{"row":203,"column":4}},"text":"\t\t\t\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":203,"column":4},"end":{"row":203,"column":32}},"text":"userinfo = JSON.parse(temp);"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":204,"column":0},"end":{"row":204,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":205,"column":0},"end":{"row":205,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":206,"column":0},"end":{"row":206,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":207,"column":0},"end":{"row":207,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":208,"column":0},"end":{"row":208,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":209,"column":0},"end":{"row":209,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":203,"column":4},"end":{"row":203,"column":12}},"text":"userinfo"},{"action":"insertText","range":{"start":{"row":203,"column":4},"end":{"row":203,"column":11}},"text":"devinfo"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":203,"column":25},"end":{"row":203,"column":29}},"text":"temp"},{"action":"insertText","range":{"start":{"row":203,"column":25},"end":{"row":203,"column":31}},"text":"result"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":207,"column":22},"end":{"row":207,"column":28}},"text":"result"},{"action":"insertText","range":{"start":{"row":207,"column":22},"end":{"row":207,"column":29}},"text":"devinfo"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":206,"column":4},"end":{"row":206,"column":10}},"text":"result"},{"action":"insertText","range":{"start":{"row":206,"column":4},"end":{"row":206,"column":11}},"text":"devinfo"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":209,"column":13},"end":{"row":209,"column":19}},"text":"result"},{"action":"insertText","range":{"start":{"row":209,"column":13},"end":{"row":209,"column":20}},"text":"devinfo"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":205,"column":4},"end":{"row":205,"column":10}},"text":"result"},{"action":"insertText","range":{"start":{"row":205,"column":4},"end":{"row":205,"column":11}},"text":"devinfo"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":204,"column":14},"end":{"row":204,"column":20}},"text":"result"},{"action":"insertText","range":{"start":{"row":204,"column":14},"end":{"row":204,"column":21}},"text":"devinfo"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":196,"column":15},"end":{"row":196,"column":20}},"text":"Users"},{"action":"insertText","range":{"start":{"row":196,"column":15},"end":{"row":196,"column":26}},"text":"DeviceState"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":0},"end":{"row":6,"column":0}},"text":"\r\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":0},"end":{"row":6,"column":19}},"text":"var DeviceState = {"},{"action":"insertText","range":{"start":{"row":6,"column":19},"end":{"row":7,"column":0}},"text":"\r\n"},{"action":"insertLines","range":{"start":{"row":7,"column":0},"end":{"row":15,"column":0}},"lines":["\t\"DeviceId\"  : \"00000000\",","\t\"IsSuccess\" : true,","\t\"NSlots\"    : 5,","\t\"State\"     : \"00000\",","\t\"IsOnline\"  : false,","\t\"Heartbeat\" : 0,","\t\"Sensor\" : \"\",","\t\"ServerTime\": \"2014-5-19 14:47:56\""]},{"action":"insertText","range":{"start":{"row":15,"column":0},"end":{"row":15,"column":2}},"text":"};"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":2},"end":{"row":16,"column":0}},"text":"\r\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":15},"end":{"row":6,"column":16}},"text":"1"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":207,"column":26},"end":{"row":207,"column":27}},"text":"1"}]}]]},"ace":{"folds":[],"scrolltop":2589,"scrollleft":0,"selection":{"start":{"row":160,"column":7},"end":{"row":160,"column":17},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":10,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1406692094894,"hash":"b92bb4fccaa08cb153860c20c6e0f87a1415cd17"}