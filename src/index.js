// You should implement your task here.

module.exports = function towelSort(matrix) {
    return matrix
        .reduce(function (array, item) {
            return array.concat(item);
        }, [])
        .sort((a, b) => {
            return a - b;
        });
};
