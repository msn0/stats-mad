const median = require('stats-median').calc;

module.exports = function (data) {
    const dataMedian = median(data);
    return median(data.map(x => Math.abs(x - dataMedian)));
};
