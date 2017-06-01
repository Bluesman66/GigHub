var AttendanceService = function () {
	function createAttendance(gigId, done, fail) {
		$.post("/api/attendances", { gigId: gigId }).done(done).fail(fail);
	};

	function deleteAttendance(gigId, done, fail) {
		$.ajax({
			url: "/api/attendances/" + gigId,
			method: "DELETE"
		}).done(done).fail(fail);
	}

	return {
		createAttendance: createAttendance,
		deleteAttendance: deleteAttendance
	}
}();