using GigHub.Core.Models;
using System.Collections.Generic;

namespace GigHub.Core.Repositories
{
	public interface IGigRepository
	{
		Gig GetGigWithAttendances(int gigId);
		IEnumerable<Gig> GetGigsUserAttending(string userId);
		Gig GetGig(int gigId);
		IEnumerable<Gig> GetUpcomingGigsByArtist(string artistId);
		void Add(Gig gig);
		IEnumerable<Gig> GetUpcomingGigs(string searchTerm = null);
		Gig GetGigWithAttendees(int gigId);
	}
}