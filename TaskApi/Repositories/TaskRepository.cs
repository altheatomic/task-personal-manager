using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using TaskApi.Data;
using TaskApi.Models;

namespace TaskApi.Repositories;

public class TaskRepository : ITaskRepository
{
    private readonly AppDbContext _db;

    public TaskRepository(AppDbContext db)
    {
        _db = db;
    }

    public async Task<TaskItem?> GetByIdAsync(int id)
    {
        return await _db.TaskItems
            .AsNoTracking()
            .FirstOrDefaultAsync(t => t.Id == id);
    }

    public async Task<IReadOnlyList<TaskItem>> ListAsync(
        Expression<Func<TaskItem, bool>>? predicate = null)
    {
        IQueryable<TaskItem> query = _db.TaskItems.AsNoTracking();

        if (predicate != null)
        {
            query = query.Where(predicate);
        }

        return await query
            .OrderByDescending(t => t.CreatedAt)
            .ToListAsync();
    }

    public async Task AddAsync(TaskItem entity)
    {
        await _db.TaskItems.AddAsync(entity);
    }

    public void Update(TaskItem entity)
    {
        _db.TaskItems.Update(entity);
    }

    public void Remove(TaskItem entity)
    {
        _db.TaskItems.Remove(entity);
    }

    public Task<int> SaveChangesAsync()
    {
        return _db.SaveChangesAsync();
    }

    public Task<bool> ExistsByTitleAsync(string title)
    {
        return _db.TaskItems.AnyAsync(t => t.Title == title);
    }
}
