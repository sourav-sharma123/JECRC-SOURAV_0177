using ProductManagement.Data;
using ProductManagement.DTOs;

namespace ProductManagement.Repositories.Interfaces
{
    public class ProductRepository : IProductRepository
    {
        private readonly AppDbContext _context;

        public ProductRepository(AppDbContext context)
        {
            _context = context;
        }
        public Task<int> CreateAsync(ProductRequestDto dto)
        {
            throw new NotImplementedException();
        }
        public Task<>
    }
}