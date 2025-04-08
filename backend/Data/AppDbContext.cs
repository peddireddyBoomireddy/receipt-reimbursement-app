using Microsoft.EntityFrameworkCore;
using receipt_reimbursement_app.Models;

namespace receipt_reimbursement_app.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Receipt> Receipts { get; set; }
    }
}