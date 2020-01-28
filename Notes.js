var fmap = function(arr, func){
  var newArr = [];
  for (var i = 0; i < arr.length; i = i + 1){
    newArr.push(func(arr[i]));
  }
  return newArr;
};

const timestwo = function (num){return num*2};

doubled = fmap([1, 2, 3, 4, 5], timestwo);

"abc123;abc123".split("2")
