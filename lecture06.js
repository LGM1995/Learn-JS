var height=prompt("키를 입력해 주세요");
console.log( height, typeof(height));

var height_int = parseInt(height);
console.log( height_int, typeof(height_int) );
// 소수점은 사라진다.

var height_float = parseFloat(height);
console.log( height_float, typeof( height_float) );
