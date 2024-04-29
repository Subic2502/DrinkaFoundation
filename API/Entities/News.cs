using API.Entities;

namespace Api.Entities;

public class News{
    public int Id { get; set; }
    public string ShortText { get; set; }
    public string LongText { get; set; }
    public string Author { get; set; }
    public DateOnly Date { get; set; }

    public ICollection<Photo> ListOfPhotos { get; set; }
}