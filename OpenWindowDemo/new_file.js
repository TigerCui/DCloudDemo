


var a = {
	aa: '',
	bb: {
		bbb: ''
	},
	cc, ''
}


function test(a) {
	var bbb = '1';
	a && a.bb && a.bb.bbb && (bbb = a.bb.bbb);

}
