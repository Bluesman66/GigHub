var FollowingService = function() {
	function createFollowing(followeeId, done, fail) {
		$.post("/api/followings", { followeeId: followeeId }).done(done).fail(fail);
	};

	function deleteFollowing(followeeId, done, fail) {
		$.ajax({
			url: "/api/followings/" + followeeId,
			method: "DELETE"
		}).done(done).fail(fail);
	}

	return {
		createFollowing: createFollowing,
		deleteFollowing: deleteFollowing
	}
}();