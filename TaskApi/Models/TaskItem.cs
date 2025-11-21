namespace TaskApi.Models;

public class TaskItem
{
    public int Id { get; set; }

    public string Title { get; set; } = default!;

    public DateTime DueDate { get; set; }

    public string Status { get; set; } = "Doing";

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
