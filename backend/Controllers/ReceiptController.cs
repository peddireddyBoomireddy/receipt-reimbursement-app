using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using receipt_reimbursement_app.Data;
using receipt_reimbursement_app.Models;

namespace receipt_reimbursement_app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReceiptController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ReceiptController(AppDbContext context)
        {
            _context = context;
        }

        // POST: api/receipt
        [HttpPost]
        public async Task<ActionResult<Receipt>> PostReceipt([FromForm] Receipt receipt)
        {
            if (receipt == null || receipt.FilePath == null)
            {
                return BadRequest("Receipt data is invalid.");
            }

            // Save the file to the server
            var filePath = Path.Combine("uploads", receipt.FilePath.FileName);
            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await receipt.FilePath.CopyToAsync(stream);
            }

            receipt.FilePath = filePath;
            _context.Receipts.Add(receipt);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetReceipt", new { id = receipt.Id }, receipt);
        }

        // GET: api/receipt
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Receipt>>> GetReceipts()
        {
            return await _context.Receipts.ToListAsync();
        }

        // GET: api/receipt/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Receipt>> GetReceipt(int id)
        {
            var receipt = await _context.Receipts.FindAsync(id);

            if (receipt == null)
            {
                return NotFound();
            }

            return receipt;
        }
    }
}