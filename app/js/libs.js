/*
*Gulp restart is needed after list of scripts edit
*Better to include unminified files because of better source mapping
*/

module.exports = function jslibs (){
	return [
		'./node_modules/jquery/dist/jquery.js',
		// './node_modules/jquery-validation/dist/jquery.validate.js',
	];
}

