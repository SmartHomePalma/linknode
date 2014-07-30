{"filter":false,"title":"server.js","tooltip":"/server.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":81,"column":60},"end":{"row":81,"column":61}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":81,"column":61},"end":{"row":81,"column":62}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":81,"column":62},"end":{"row":81,"column":63}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":50,"column":29},"end":{"row":50,"column":32}},"text":"msg"},{"action":"insertText","range":{"start":{"row":50,"column":29},"end":{"row":50,"column":30}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":30},"end":{"row":50,"column":31}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":31},"end":{"row":50,"column":32}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":50,"column":32},"end":{"row":50,"column":33}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":81,"column":64},"end":{"row":81,"column":65}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":84,"column":0},"end":{"row":84,"column":52}},"text":"    \t\tconsole.log('data: %s',packet_heartbeat.data);"},{"action":"removeLines","range":{"start":{"row":83,"column":0},"end":{"row":84,"column":0}},"nl":"\n","lines":["    \t\tconsole.log('id: %s',packet_heartbeat.id);"]},{"action":"removeText","range":{"start":{"row":82,"column":44},"end":{"row":83,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":53,"column":0},"end":{"row":53,"column":2}},"text":"\t}"},{"action":"removeLines","range":{"start":{"row":52,"column":0},"end":{"row":53,"column":0}},"nl":"\n","lines":["\t    "]},{"action":"removeText","range":{"start":{"row":51,"column":1},"end":{"row":51,"column":23}},"text":"if (redis_connected) {"},{"action":"removeText","range":{"start":{"row":51,"column":1},"end":{"row":52,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":51,"column":1},"end":{"row":52,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":52,"column":0},"end":{"row":53,"column":0}},"lines":["    \t\tconsole.log('id: %s',packet_heartbeat.id);"]},{"action":"insertText","range":{"start":{"row":53,"column":0},"end":{"row":53,"column":52}},"text":"    \t\tconsole.log('data: %s',packet_heartbeat.data);"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":52,"column":0},"end":{"row":52,"column":4}},"text":"    "},{"action":"removeText","range":{"start":{"row":53,"column":0},"end":{"row":53,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":52,"column":0},"end":{"row":52,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":53,"column":0},"end":{"row":53,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":51,"column":0},"end":{"row":51,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":50,"column":36},"end":{"row":51,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":51,"column":22},"end":{"row":51,"column":38}},"text":"packet_heartbeat"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":52,"column":24},"end":{"row":52,"column":40}},"text":"packet_heartbeat"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":52,"column":23},"end":{"row":52,"column":24}},"text":","}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":52,"column":23},"end":{"row":52,"column":24}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":51,"column":22},"end":{"row":51,"column":23}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":52,"column":23},"end":{"row":52,"column":24}},"text":","}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":52,"column":30},"end":{"row":53,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":53,"column":0},"end":{"row":53,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":53,"column":1},"end":{"row":53,"column":29}},"text":"\tvar json_out = DeviceState;"},{"action":"insertText","range":{"start":{"row":53,"column":29},"end":{"row":54,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":54,"column":0},"end":{"row":69,"column":0}},"lines":["\tjson_out.DeviceId = req.params.id;","\tjson_out.ServerTime = moment().zone(timezone).format('YYYY-MM-DD, HH:mm:ss');","\tif (req.params.operation !== undefined) {","\t\tdata_obj.setRedis(req.params.id, null, req.params.slot, req.params.operation, function(temp) {","\t\t\tjson_out.State = temp;","\t\t\tsocket_obj.broadcast('SYSTEM',JSON.stringify(json_out) + '\\n');","\t\t\tres.send(JSON.stringify(json_out));","\t\t});","\t}","\telse {","\t\tdata_obj.getRedis(req.params.id , function(temp) {\t\t\t","\t\t\tjson_out.State = temp;\t\t\t","\t\t\tsocket_obj.broadcast('SYSTEM',JSON.stringify(json_out) + '\\n');","\t\t\tres.send(JSON.stringify(json_out));","\t\t});"]},{"action":"insertText","range":{"start":{"row":69,"column":0},"end":{"row":69,"column":2}},"text":"\t}"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":53,"column":1},"end":{"row":53,"column":2}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":54,"column":25},"end":{"row":54,"column":31}},"text":"params"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":54,"column":24},"end":{"row":54,"column":25}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":54,"column":23},"end":{"row":54,"column":24}},"text":"q"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":54,"column":22},"end":{"row":54,"column":23}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":54,"column":21},"end":{"row":54,"column":22}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":54,"column":21},"end":{"row":54,"column":22}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":52,"column":30},"end":{"row":53,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":53,"column":0},"end":{"row":53,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":70,"column":0},"end":{"row":70,"column":2}},"text":"\t}"},{"action":"removeLines","range":{"start":{"row":64,"column":0},"end":{"row":70,"column":0}},"nl":"\n","lines":["\telse {","\t\tdata_obj.getRedis(req.params.id , function(temp) {\t\t\t","\t\t\tjson_out.State = temp;\t\t\t","\t\t\tsocket_obj.broadcast('SYSTEM',JSON.stringify(json_out) + '\\n');","\t\t\tres.send(JSON.stringify(json_out));","\t\t});"]},{"action":"removeText","range":{"start":{"row":63,"column":2},"end":{"row":64,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":58,"column":20},"end":{"row":58,"column":31}},"text":"req.params."}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":58,"column":24},"end":{"row":58,"column":28}},"text":"null"},{"action":"insertText","range":{"start":{"row":58,"column":24},"end":{"row":58,"column":25}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":58,"column":25},"end":{"row":58,"column":26}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":58,"column":26},"end":{"row":58,"column":27}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":58,"column":27},"end":{"row":58,"column":28}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":58,"column":30},"end":{"row":58,"column":67}},"text":"req.params.slot, req.params.operation"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":58,"column":29},"end":{"row":58,"column":30}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":58,"column":28},"end":{"row":58,"column":29}},"text":","}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":57,"column":0},"end":{"row":57,"column":42}},"text":"\tif (req.params.operation !== undefined) {"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":63,"column":0},"end":{"row":63,"column":2}},"text":"\t}"},{"action":"removeText","range":{"start":{"row":62,"column":5},"end":{"row":63,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":58,"column":0},"end":{"row":58,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":59,"column":0},"end":{"row":59,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":60,"column":0},"end":{"row":60,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":61,"column":0},"end":{"row":61,"column":1}},"text":"\t"},{"action":"removeText","range":{"start":{"row":62,"column":0},"end":{"row":62,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":61,"column":2},"end":{"row":61,"column":5}},"text":"res"},{"action":"insertText","range":{"start":{"row":61,"column":2},"end":{"row":61,"column":9}},"text":"console"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":61,"column":10},"end":{"row":61,"column":14}},"text":"send"},{"action":"insertText","range":{"start":{"row":61,"column":10},"end":{"row":61,"column":11}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":61,"column":11},"end":{"row":61,"column":12}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":61,"column":12},"end":{"row":61,"column":13}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":58,"column":22},"end":{"row":58,"column":23}},"text":","}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":58,"column":23},"end":{"row":58,"column":24}},"text":"5"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":58,"column":24},"end":{"row":58,"column":25}},"text":","}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":58,"column":22},"end":{"row":58,"column":23}},"text":","}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":58,"column":22},"end":{"row":58,"column":23}},"text":"5"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":58,"column":22},"end":{"row":58,"column":23}},"text":"3"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":58,"column":22},"end":{"row":58,"column":23}},"text":"3"},{"action":"insertText","range":{"start":{"row":58,"column":22},"end":{"row":58,"column":23}},"text":"6"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":58,"column":22},"end":{"row":58,"column":23}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":59,"column":0},"end":{"row":59,"column":24}},"text":"\t\tjson_out.State = temp;"},{"action":"removeText","range":{"start":{"row":58,"column":48},"end":{"row":59,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":59,"column":2},"end":{"row":59,"column":3}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":59,"column":3},"end":{"row":59,"column":4}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":46,"column":17},"end":{"row":47,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":47,"column":0},"end":{"row":47,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":47,"column":1},"end":{"row":47,"column":3}},"text":"\"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":47,"column":2},"end":{"row":47,"column":3}},"text":"S"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":47,"column":3},"end":{"row":47,"column":4}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":47,"column":4},"end":{"row":47,"column":5}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":47,"column":5},"end":{"row":47,"column":6}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":47,"column":6},"end":{"row":47,"column":7}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":47,"column":7},"end":{"row":47,"column":8}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":47,"column":9},"end":{"row":47,"column":10}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":47,"column":10},"end":{"row":47,"column":11}},"text":":"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":47,"column":11},"end":{"row":47,"column":12}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":47,"column":12},"end":{"row":47,"column":14}},"text":"\"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":47,"column":14},"end":{"row":47,"column":15}},"text":","}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":59,"column":13},"end":{"row":59,"column":18}},"text":"Redis"},{"action":"insertText","range":{"start":{"row":59,"column":13},"end":{"row":59,"column":22}},"text":"heartbeat"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":90,"column":42},"end":{"row":90,"column":43}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":90,"column":43},"end":{"row":90,"column":44}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":90,"column":44},"end":{"row":90,"column":45}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":90,"column":45},"end":{"row":90,"column":46}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":90,"column":46},"end":{"row":90,"column":47}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":90,"column":47},"end":{"row":90,"column":48}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":90,"column":48},"end":{"row":90,"column":49}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":90,"column":49},"end":{"row":90,"column":50}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":90,"column":50},"end":{"row":90,"column":51}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":90,"column":51},"end":{"row":90,"column":52}},"text":","}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":90,"column":49},"end":{"row":90,"column":50}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":90,"column":48},"end":{"row":90,"column":49}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":90,"column":47},"end":{"row":90,"column":48}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":90,"column":46},"end":{"row":90,"column":47}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":90,"column":45},"end":{"row":90,"column":46}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":90,"column":44},"end":{"row":90,"column":45}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":90,"column":43},"end":{"row":90,"column":44}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":90,"column":43},"end":{"row":90,"column":44}},"text":"6"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":51,"column":29},"end":{"row":51,"column":30}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":51,"column":30},"end":{"row":51,"column":31}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":51,"column":31},"end":{"row":51,"column":32}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":51,"column":32},"end":{"row":51,"column":33}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":51,"column":33},"end":{"row":51,"column":34}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":51,"column":34},"end":{"row":51,"column":35}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":51,"column":35},"end":{"row":51,"column":36}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":51,"column":36},"end":{"row":51,"column":37}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":51,"column":37},"end":{"row":51,"column":38}},"text":","}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":51,"column":36},"end":{"row":51,"column":37}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":51,"column":37},"end":{"row":51,"column":38}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":59,"column":27},"end":{"row":59,"column":28}},"text":"6"},{"action":"insertText","range":{"start":{"row":59,"column":27},"end":{"row":59,"column":34}},"text":"timeout"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":61,"column":29},"end":{"row":61,"column":37}},"text":"json_out"},{"action":"insertText","range":{"start":{"row":61,"column":29},"end":{"row":61,"column":33}},"text":"temp"}]}]]},"ace":{"folds":[],"scrolltop":420,"scrollleft":0,"selection":{"start":{"row":61,"column":36},"end":{"row":61,"column":36},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":29,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1406691329448,"hash":"ea798a3300dc6503869312b000e693ace47672fd"}