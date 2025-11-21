namespace TaskApi.Dtos;

public class UpdateTaskDto
{
    public string Title { get; set; } = default!;
    public DateTime DueDate { get; set; }
    public string Status { get; set; } = default!;
}
