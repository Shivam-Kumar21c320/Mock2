using HealthCareAppointmentManagementSystem.Models.DTO;
using Microsoft.AspNetCore.Http;using Microsoft.AspNetCore.Mvc; // from mvc we used attribute like apicontroller and http
using WebApplication1.Models.Domain;
using WebApplication1.Models.DTO;
using WebApplication1.Repositories.Interface;
// this line allow to use class from these location 

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("api/[controller]")] //  
    public class StudentController : ControllerBase
    {
        private readonly IStudentRepository _studentRepository;

        public StudentController(IStudentRepository studentRepository)
        {
            _studentRepository = studentRepository;
        }

        // GET: api/student
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var students = await _studentRepository.GetAllAsync();

            var response = new List<StudentDto>();
            foreach (var s in students)
            {
                response.Add(new StudentDto
                {
                    Id = s.Id,
                    FirstName = s.FirstName,
                    LastName = s.LastName,
                    Email = s.Email,
                    DateOfBirth = s.DateOfBirth
                });
            }

            return Ok(response);
        }

        // GET: api/student/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            var student = await _studentRepository.GetByIdAsync(id);
            if (student == null)
                return NotFound();

            var dto = new StudentDto
            {
                Id = student.Id,
                FirstName = student.FirstName,
                LastName = student.LastName,
                Email = student.Email,
                DateOfBirth = student.DateOfBirth
            };

            return Ok(dto);
        }

       
        

        // POST: api/student
        [HttpPost]
        public async Task<IActionResult> Create(CreateStudentRequestDto request)
        {
            var student = new Student
            {
                Id = Guid.NewGuid(),
                FirstName = request.FirstName,
                LastName = request.LastName,
                Email = request.Email,
                DateOfBirth = request.DateOfBirth
            };

            await _studentRepository.AddAsync(student);

            var response = new StudentDto
            {
                Id = student.Id,
                FirstName = student.FirstName,
                LastName = student.LastName,
                Email = student.Email,
                DateOfBirth = student.DateOfBirth
            };

            return CreatedAtAction(nameof(GetById), new { id = student.Id }, response);
        }

        // PUT: api/student/{id}
        [HttpPut("{id:guid}")]
        public async Task<IActionResult> Update(Guid id, UpdateStudentRequestDto request)
        {
            var student = await _studentRepository.GetByIdAsync(id);
            if (student == null)
                return NotFound();

            student.FirstName = request.FirstName;
            student.LastName = request.LastName;
            student.Email = request.Email;
            student.DateOfBirth = request.DateOfBirth;

            await _studentRepository.UpdateAsync(student);

            var response = new StudentDto
            {
                Id = student.Id,
                FirstName = student.FirstName,
                LastName = student.LastName,
                Email = student.Email,
                DateOfBirth = student.DateOfBirth
            };

            return Ok(response);
        }

        // DELETE: api/student/{id}
        [HttpDelete("{id:guid}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var student = await _studentRepository.DeleteAsync(id);
            if (student == null)
                return NotFound();

            return NoContent();
        }
    }
}
