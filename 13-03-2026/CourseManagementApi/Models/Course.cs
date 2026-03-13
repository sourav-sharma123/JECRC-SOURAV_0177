// namespace CourseManagementAPI.Models
// {
//     public class Course
//     {
//         public int CourseId { get; set; }

//         public string CourseName { get; set; }

//         public int DepartmentId { get; set; }

//         public int Credits { get; set; }

//         public bool SeatsAvailable { get; set; } = true;
//     }
// }

namespace CourseManagementApi.Models
{
    public class Course
    {
        public int CourseId { get; set; }

        public string CourseName { get; set; } = string.Empty;

        public int DepartmentId { get; set; }

        public int Credits { get; set; }

        public bool SeatsAvailable { get; set; } = true;
    }
}