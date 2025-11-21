namespace TaskApi.Dtos;

public class CreateTaskDto
{
    public string Title { get; set; } = default!;
    public DateTime DueDate { get; set; }
}
