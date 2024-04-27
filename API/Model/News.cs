using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("News")]
public class News
{
    [Key]
    int Id{get;set;}
    string Author{get;set;}
    string shortText{get;set;}
    string longText{get;set;}
    DateOnly published{get;set;}

    public ICollection<Photo> Photos { get; set; }

    public News()
    {
        
    }
    public News(DateOnly published, string longText, string shortText, string author)
    {
        this.published = published;
        this.longText = longText;
        this.shortText = shortText;
        this.Author = author;
        this.Photos = new HashSet<Photo>();
    }
}