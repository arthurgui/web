function Pager(tableName, itemsPerPage) {
	this.tableName		=	tableName;
	this.itemsPerPage	=	itemsPerPage;
	this.currentPage	=	1;
	this.pages			=	0;
	this.inited			=	false;
	
	this.showRecords	=	function(from, to) {
		var rows	=	document.getElementById(tableName).rows;
		// i starts from 1 to skip table header row
		for (var i = 1; i < rows.length; i++) {
			if (i < from || i > to)  
				rows[i].style.display = 'none';
			else
				rows[i].style.display = '';
		}
	}
	
	this.showPage		=	function(pageNumber) {
		if (! this.inited) {
			alert("jsPaging não iniciado");
			return;
		}

		var oldPageAnchor		=	document.getElementById('pg'+this.currentPage);
		oldPageAnchor.className	=	'pg-normal';
		
		this.currentPage		=	pageNumber;
		var newPageAnchor		=	document.getElementById('pg'+this.currentPage);
		newPageAnchor.className	=	'pg-selected';
		
		var from				=	(pageNumber - 1) * itemsPerPage + 1;
		var to					=	from + itemsPerPage - 1;
		this.showRecords(from, to);
	}

	this.prior	=	function(){
		if (this.currentPage > 1){
			this.showPage(1);
		}
	}
	
	this.prev	=	function() {
		if (this.currentPage > 1){
			this.showPage(this.currentPage - 1);
		}
	}
	
	this.next	=	function() {
		if (this.currentPage < this.pages) {
			this.showPage(this.currentPage + 1);
		}
	}

	this.last	=	function(){
		if (this.currentPage < this.pages) {
			this.showPage(this.pages);
		}
	}
	
	this.init	=	function() {
		var rows	=	document.getElementById(tableName).rows;
		var records	=	(rows.length - 1); 
		this.pages	=	Math.ceil(records / itemsPerPage);
		this.inited	=	true;
	}

	this.showPageNav = function(pagerName, positionId) {
		if (! this.inited) {
			alert("jsPaging não iniciado");
			return;
		}
		var element = document.getElementById(positionId);
		
		var pagerHtml	=	'<li class="li-paging"><a href="javascript:;" onclick="' + pagerName + '.prior();" class="pg-ctrl">&#171;&#171;</a></li>';
		pagerHtml		+=	'<li class="li-paging"><a href="javascript:;" onclick="' + pagerName + '.prev();" class="pg-ctrl">&#171;</a></li>';
		for (var page = 1; page <= this.pages; page++){
			pagerHtml	+=	'<li class="li-paging"><a href="javascript:;" id="pg' + page + '" class="pg-normal" onclick="' + pagerName + '.showPage(' + page + ');">' + page + '</a></li>';
		}
		pagerHtml		+=	'<li class="li-paging"><a href="javascript:;" onclick="'+pagerName+'.next();" class="pg-ctrl">&#187;</a></li>';
		pagerHtml		+=	'<li class="li-paging"><a href="javascript:;" onclick="'+pagerName+'.last();" class="pg-ctrl">&#187;&#187;</a></li>';
		
		element.innerHTML = pagerHtml;
	}
}