namespace API.DTOs;

public class AddingNewsDto
{
    public string ShortText { get; set; }

    public string LongText { get; set; }

    public string Author { get; set; }

    public DateOnly Date { get; set; }
    
    public List<string> Photos { get; set; }

    public AddingNewsDto(string shortText, string longText, string author, DateOnly date, List<string> photos)
    {
        ShortText = shortText;
        LongText = longText;
        Author = author;
        Date = date;     
        Photos = photos;
    }

}