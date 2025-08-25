using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models.DTO
{
    public class UpdateStudentRequestDto
    {
        [Required, MaxLength(100)]
        public string FirstName { get; set; }

        [Required, MaxLength(100)]
        public string LastName { get; set; }

        [Required, EmailAddress]
        public string Email { get; set; }

        public DateTime DateOfBirth { get; set; }
    }
}
