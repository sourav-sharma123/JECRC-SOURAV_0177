// namespace CourseManagementAPI.Models
// {
//     public class Student
//     {
//         public int StudentId { get; set; }

//         public string Name { get; set; }

//         public string Email { get; set; }

//         public string Phone { get; set; }

//         public string Role { get; set; }
//     }
// }



namespace CourseManagementApi.Models
{
    public class Student
    {
        public int StudentId { get; set; }

        public string Name { get; set; } = string.Empty;

        public string Email { get; set; } = string.Empty;

        public string Phone { get; set; } = string.Empty;

        public string Role { get; set; } = string.Empty;
    }
}