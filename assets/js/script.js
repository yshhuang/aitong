$(function () {
    'use strict';
    var note = $('#note'),
        ts = new Date(2020, 11, 21),
        newYear = true;


	$('#countdown').countdown({
		timestamp: ts,
	callback: function (days, hours, minutes, seconds) {
            var message = "";
			message += days + " day" + (days == 1 ? '' : 's') + ", ";
			message += hours + " hour" + (hours == 1 ? '' : 's') + ", ";
			message += minutes + " minute" + (minutes == 1 ? '' : 's') + " and ";
			message += seconds + " second" + (seconds == 1 ? '' : 's') + " <br />";

			if (newYear) {
				message += "left until 2020/12/21!";
			}
			else {
				message += "left to 10 days from now!";
			}
			note.html(message);
		}
	});

});
