namespace TaskApi.Dtos;

public record TaskDto(
    int Id,
    string Title,
    DateTime DueDate,
    string Status,
    DateTime CreatedAt
);

