using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProductManagement.Models
{
    public class Tag
    {
        public int Id {get; set;}
        public string Name {get; set;}
        public ICollection<ProductTag> ProductTags {get; set;}

    }
}