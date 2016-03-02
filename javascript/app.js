var pageBuilder = {
	$wrapper : $('#wrapper'),
	prepareView : function() {
		var newDiv = $('<div id="prepareContainer"><h2>title</h2></div>');
		(this.$wrapper).empty();
		(this.$wrapper).append(newDiv)
	}	
};