// using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;
// using CourseManagementApi.Data;
// using CourseManagementAPI.Models;

// namespace CourseManagementAPI.Controllers
// {
//     [ApiController]
//     [Route("api/[controller]")]
//     public class CourseController : ControllerBase
//     {
//         private readonly AppDbContext _context;

//         public CourseController(AppDbContext context)
//         {
//             _context = context;
//         }

//         [HttpGet]
//         public async Task<IEnumerable<Course>> GetCourses()
//         {
//             return await _context.Courses.ToListAsync();
//         }

//         [HttpPost]
//         public async Task<IActionResult> AddCourse(Course course)
//         {
//             _context.Courses.Add(course);
//             await _context.SaveChangesAsync();

//             return Ok(course);
//         }

//         [HttpPut("{id}")]
//         public async Task<IActionResult> UpdateCourse(int id, Course course)
//         {
//             if (id != course.CourseId)
//                 return BadRequest();

//             _context.Entry(course).State = EntityState.Modified;

//             await _context.SaveChangesAsync();

//             return Ok();
//         }

//         [HttpDelete("{id}")]
//         public async Task<IActionResult> DeleteCourse(int id)
//         {
//             var course = await _context.Courses.FindAsync(id);

//             if (course == null)
//                 return NotFound();

//             _context.Courses.Remove(course);

//             await _context.SaveChangesAsync();

//             return Ok();
//         }
//     }
// }



using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CourseManagementApi.Data;
using CourseManagementApi.Models;

namespace CourseManagementApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CourseController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CourseController(AppDbContext context)
        {
            _context = context;
        }

        // Get all courses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Course>>> GetCourses()
        {
            return await _context.Courses.ToListAsync();
        }

        // Add new course
        [HttpPost]
        public async Task<ActionResult<Course>> AddCourse(Course course)
        {
            _context.Courses.Add(course);
            await _context.SaveChangesAsync();

            return Ok(course);
        }

        // Update course
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCourse(int id, Course course)
        {
            if (id != course.CourseId)
                return BadRequest();

            _context.Entry(course).State = EntityState.Modified;

            await _context.SaveChangesAsync();

            return Ok("Course Updated");
        }

        // Delete course
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCourse(int id)
        {
            var course = await _context.Courses.FindAsync(id);

            if (course == null)
                return NotFound();

            _context.Courses.Remove(course);
            await _context.SaveChangesAsync();

            return Ok("Course Deleted");
        }
    }
}