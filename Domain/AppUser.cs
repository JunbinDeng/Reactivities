using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class AppUser : IdentityUser
    {
        public required string DisplayName { get; set; }
        public int Bio { get; set; }
    }
}