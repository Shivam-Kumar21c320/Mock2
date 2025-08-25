using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Models.Domain;
using WebApplication1.Repositories.Interface;

namespace WebApplication1.Repositories.Implementation
{
    public class StudentRepository : IStudentRepository
    {
        private readonly ApplicationDbContext _context;

        public StudentRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Student>> GetAllAsync()
        {
            return await _context.Students.ToListAsync();
        }

        public async Task<Student> GetByIdAsync(Guid id)
        {
            return await _context.Students.FirstOrDefaultAsync(s => s.Id == id);
        }

        public async Task<Student> AddAsync(Student student)
        {
            await _context.Students.AddAsync(student);
            await _context.SaveChangesAsync();
            return student;
        }

        public async Task<Student> UpdateAsync(Student student)
        {
            _context.Students.Update(student);
            await _context.SaveChangesAsync();
            return student;
        }

        public async Task<Student> DeleteAsync(Guid id)
        {
            var student = await _context.Students.FindAsync(id);
            if (student != null)
            {
                _context.Students.Remove(student);
                await _context.SaveChangesAsync();
            }
            return student;
        }
    }

}

