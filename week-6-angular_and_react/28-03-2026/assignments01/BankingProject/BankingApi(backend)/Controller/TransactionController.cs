using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class TransactionController : ControllerBase
{
    private readonly AppDbContext _context;

    public TransactionController(AppDbContext context)
    {
        _context = context;
    }

    // ✅ Get all transactions
    [HttpGet]
    public IActionResult GetTransactions()
    {
        var data = _context.Transactions.ToList();
        return Ok(data);
    }
}