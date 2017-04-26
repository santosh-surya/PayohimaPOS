function ascii_to_hexa(str)
  {
	var arr = [];
	for (var n = 0, l = str.length; n < l; n ++) 
	{
			arr.push(Number(str.charCodeAt(n)));
			console.log(Number(str.charCodeAt(n)).toString(10));
	}
	return arr;
}
function number_to_hexstring(num){
	var d = Number()
}
var a = ascii_to_hexa('\x1b\x0d\00');
a.push(24);
console.log(a);
