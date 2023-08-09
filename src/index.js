// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === []) {
        return [];
    } else {
        return matrix.reduce((array, item, i) => {
            item.sort((a, b) => (!(i & 1) ? a - b : b - a)).map((e) =>
                array.push(e)
            );
            return array;
        }, []);
    }
};
