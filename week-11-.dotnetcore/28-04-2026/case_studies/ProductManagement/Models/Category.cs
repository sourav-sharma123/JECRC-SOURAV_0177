using System.ComponentModel.DataAnnotations;

namespace ProductManagement.Models
{
    public class Category
    {
        public int Id {get; set;}
        [Required]
        public string Name {get; set;}
        [Required]
        [Range (0, 100000)]
        public ICollection<Product> Products {get; set;}
        

    }
}