/*
*Gulp restart is needed after list of scripts edit
*Better to put in app/vendor folder unminified files because of better source mapping
*/

module.exports = function jslibs (){
	return [
		'./app/js/vendor/jquery.js',
	];
}

