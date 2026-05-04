using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProductManagement.Models
{
    public class ProductTag
    {
        [Key]
        public int ProductId {get; set;}
        public Product Product {get; set;}
    }
}