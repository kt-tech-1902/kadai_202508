const array = ["apple", "orange", "banana"];

// 第３引数には処理対象の配列が入る
// filterも同様
array.forEach((fruit, index, arr) => {
    console.log(`${index}: ${fruit}`, arr);
});

// 省略なしの場合
array.forEach(function (fruit, index, arr) {
    console.log(`${index}: ${fruit}`, arr);
});

// 結果
// 0: apple [ 'apple', 'orange', 'banana' ]
// 1: orange [ 'apple', 'orange', 'banana' ]
// 2: banana [ 'apple', 'orange', 'banana' ]
