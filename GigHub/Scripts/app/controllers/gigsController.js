var GigsController = function (attendanceService) {
	var button;

	function init(container) {
		$(container).on("click", ".js-toggle-attendance", toggleAttendance);
	};

	function toggleAttendance(e) {
		button = $(e.target);
		var gigId = button.attr("data-gig-id");
		if (button.hasClass("btn-default"))
			attendanceService.createAttendance(gigId, done, fail);
		else
			attendanceService.deleteAttendance(gigId, done, fail);
	};

	function done() {
		var text = (button.text().trim() === "Going") ? "Going?" : "Going";
		button.toggleClass("btn-info")
			.toggleClass("btn-default")
			.text(text);
	};

	function fail() {
		alert("Something failed!");
	};

	return {
		init: init
	};
}(AttendanceService);