using ProductManagement.DTOs;

namespace ProductManagement.Repositories.Interfaces
{
    public interface IProductRepository
    {
        Task<IEnumerable<ProductResponseDto>> GetAllAysync();
        Task<ProductResponseDto> GetByIdAysync(int id);

        Task<int> CreateAsync(ProductRequestDto dto);

        Task<bool> UpdateAsync(int id, ProductRequestDto dto);

        Task<bool> DeleteAsync(int id);
    }
}