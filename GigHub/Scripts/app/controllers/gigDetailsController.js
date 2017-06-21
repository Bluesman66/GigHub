var GigDetailsController = function (followingService) {
	var followButton;

	function init() {
		$(".js-toggle-follow").click(toggleFollowing);
	};
	
	function toggleFollowing(e) {
		followButton = $(e.target);
		var followeeId = followButton.attr("data-user-id");
		if (followButton.hasClass("btn-default"))
			followingService.createFollowing(followeeId, done, fail);
		else
			followingService.deleteFollowing(followeeId, done, fail);
	};

	function done() {
		var text = (followButton.text().trim() === "Follow") ? "Following" : "Follow";
		followButton.toggleClass("btn-info")
			.toggleClass("btn-default")
			.text(text);
	};

	function fail() {
		alert("Something failed!");
	};

	return {
		init: init
	};
}(FollowingService);