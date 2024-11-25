var _myJson="VzNzaWMyOXlkQ0k2TVRjek1qa3hNRFF3TUN3aWEyVjVJam9pUlc1bmJHbHphRjlRY21WdGFXVnlYMHhsWVdkMVpVSnlhV2RvZEc5dVgwaHZkbVZmUVd4aWFXOXVVMjkxZEdoaGJYQjBiMjRpTENKdVlXMWhYMlYyWlc1MElqb2lSVzVuYkdsemFDQlFjbVZ0YVdWeUlFeGxZV2QxWlNJc0ltcGhaSGRoYkY5bGRtVnVkQ0k2SWpJd01qUXRNVEV0TXpCVU1EUTZNREFpTENKemRHOXdYMlYyWlc1MElqb2lNakF5TkMweE1TMHpNRlF3TmpveE5TSXNJbkJzWVhsbGNsOHhJam9pUW5KcFoyaDBiMjRnU0c5MlpTQkJiR0pwYjI0aUxDSndiR0Y1WlhKZk1pSTZJbE52ZFhSb1lXMXdkRzl1SWl3aWJHOW5iMTh4SWpvaWFIUjBjSE02THk5cGJXY3dMbUZwYzJOdmNtVXVZMjl0TDJadmIzUmlZV3hzTDNSbFlXMHZPV0kwTTJFMk9UQmtOV0V3T1dZeFpUTXhPV1l3TXpZNE1qRmxPR1V4WkRNdWNHNW5JWGN6TUNJc0lteHZaMjlmTWlJNkltaDBkSEJ6T2k4dmFXMW5NQzVoYVhOamIzSmxMbU52YlM5bWIyOTBZbUZzYkM5MFpXRnRMelEyTWpOa00yWmhNV05rWVRJd1pERm1Namc1WkdObE9XUmpPREF6TlRJM0xuQnVaeUYzTXpBaUxDSjFjbXhmYlROMU9DSTZJaUo5WFE9PQ==";var _parseEvent = function(_str){
	$('#event_list').html('');
	var _myJson = JSON.parse(atob(atob(str)));	
	for(var _x=0,len=_myJson.length;_x<_len;_x++){
		var _localHTML = '<a data-url="'+_myJson[_x].url_m3u8+'" class="item" href="" target="frame">';
			_localHTML += '<div class="event-name">'+_myJson[_x].nama_event+'</div>';
			_localHTML += '<div class="fixture">';
			_localHTML += '<div class="first">'+_myJson[_x].player_1+'</div>';
			_localHTML += '<div class="vs">'+_myJson[_x].jadwal_event+'</div>';
			_localHTML += '<div class="second">'+_myJson[_x].player_2+'</div>';
			_localHTML += '</div>';
			_localHTML += '</a>';
			$('#event_list').append(_localHTML);
	}
}
_parseEvent(_myJson);
