function deduplication(content, chunkSize) {
    var cache = {};
    var opstr = "";
    for (var i = 0; i < content.length; i += chunkSize) {
        var chunk = content.slice(i, i + chunkSize); 
        if (cache[chunk]) {
            cache[chunk].push({ "pos": i/chunkSize });
        } else {
            cache[chunk] = [];
        }
    }
    for (var key in cache) {
        var arr = cache[key];
        var len = arr.length;
        if (len) {
            opstr += key;
            for (var k = 0; k < len; k++) {
                opstr += arr[k].pos;
            }
        } else {
            opstr += key;
        }
    }
    // to do convert number to ascii so that "42" index is not read as "4" and then "2".
    return opstr;
}
