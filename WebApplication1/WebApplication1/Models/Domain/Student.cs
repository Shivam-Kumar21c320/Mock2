using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models.Domain
{
    public class Student
    {
        [Key]
        public Guid Id { get; set; }= Guid.NewGuid();
        [Required]
        [MaxLength(100)]
        public string FirstName { get; set; }
        [Required]
        [MaxLength(100)]
        public string LastName { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        public DateTime DateOfBirth { get; internal set; }
    }
}
