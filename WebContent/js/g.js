$(document).ready(function() {
	
	$.ajax({
	
		url: "https://api.github.com/users"
		
	}).then(function(data) {
		
		console.log(data);
		var table = $("#usersTable");
		var contents = "";
		$.each(data, function(idx) {
			
			contents +=  "<tr>";
			contents += "<td width='10%' class='login' >" + data[idx].id + 1 + "</td>";
			contents += "<td width='10%' class='fp' id='"+ (idx+1) +"'>" + data[idx].login + "</td>";
			contents += "<td id='"+(idx+1)*100+"'+></td>";
			contents += "</tr>";
			
		})
		
		console.log(contents);
		table.append(contents);
		
	});
	$("table").on('click', 'td', function() {
		
		id = $(this).attr('id') * 100;
		console.log(id);
		url = "https://api.github.com/users/" + $(this).html() + "/followers",
		$.ajax({
			url: url,
		}).then(function(data) {
			console.log(data);
			var contents = "";
			$.each(data, function(idx) {
				
				
				contents += "<img src='" + data[idx].avatar_url + "' width=50 height=50 />";
			})
			$("#"+id).append(contents);
		})
	});
	
	
});