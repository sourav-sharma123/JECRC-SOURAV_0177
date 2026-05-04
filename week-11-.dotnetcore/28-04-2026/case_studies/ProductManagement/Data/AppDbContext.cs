namespace ProductManagement.Data
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : 
        public DbSet<Product> Products {get; set;}
        public DbSet<ProductDetail> ProductDetails {get; set;}
        public DbSet<Category> CategoryDetails {get; set;}

        public DbSet<Tag> Tags {get; set;}
        public DbSet<ProductTags> ProductTags {get; set;}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ProductTag>()
            .Haskey(pt => new {pt.ProductId,pt.TagId})
        }
    }

}