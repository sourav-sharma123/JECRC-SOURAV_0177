using System.ComponentModel.DataAnnotations;

namespace EMPSystem.Models
{
    public class Employee
    {
        public int id { get; set;}
        [Required]
        public string Name {get; set;}

        public string Department { get; set;}

        public decimal Salary { get; set;}

        public DateTime CreatedDate {get; set;}
    }
}