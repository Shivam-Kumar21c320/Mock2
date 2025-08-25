using WebApplication1.Models.Domain;

namespace WebApplication1.Repositories.Interface
{
   
        public interface IStudentRepository
        {
            Task<IEnumerable<Student>> GetAllAsync();
            Task<Student> GetByIdAsync(Guid id);
            Task<Student> AddAsync(Student student);
            Task<Student> UpdateAsync(Student student);
            Task<Student> DeleteAsync(Guid id);
        }
    }

