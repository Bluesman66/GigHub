using FluentAssertions;
using GigHub.Controllers.Api;
using GigHub.Core;
using GigHub.Core.Models;
using GigHub.Core.Repositories;
using GigHub.Tests.Extensions;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System.Web.Http.Results;

namespace GigHub.Tests.Controllers.Api
{
	[TestClass]
	public class GigsControllerTests
	{
		private GigsController _gigsController;
		private Mock<IGigRepository> _mockRepository;

		public GigsControllerTests()
		{
			_mockRepository = new Mock<IGigRepository>();

			var mockUoW = new Mock<IUnitOfWork>();
			mockUoW.SetupGet(u => u.Gigs).Returns(_mockRepository.Object);

			_gigsController = new GigsController(mockUoW.Object);
			_gigsController.MockCurrentUser("1", "user@domain.com");
		}

		[TestMethod]
		public void Cancel_NoGigWithGivenIdExists_ShouldReturnNotFound()
		{
			var result = _gigsController.Cancel(1);

			result.Should().BeOfType<NotFoundResult>();
		}

		[TestMethod]
		public void Cancel_GigIsCancelled_ShouldReturnNotFound()
		{
			var gig = new Gig();
			gig.Cancel();

			_mockRepository.Setup(r => r.GetGigWithAttendees(1)).Returns(gig);

			var result = _gigsController.Cancel(1);

			result.Should().BeOfType<NotFoundResult>();
		}
	}
}
