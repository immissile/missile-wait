module.exports = function (sec, cb) {
    var start = Date.now();
    var wait = sec * 1000;

    while(1) {
        var stop = Date.now();
        if (stop - start >= wait) {
            break;
        }
    }
    if (cb) {
        cb();
    }
};
