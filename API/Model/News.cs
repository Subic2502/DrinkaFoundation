using System.ComponentModel.DataAnnotations.Schema;

[Table("News")]
public class News
{
    long Id{get;set;}
    string Author{get;set;}
    string shortText{get;set;}
    string longText{get;set;}
    DateOnly published{get;set;}

    List<Photo> listPhotos{get;set;}
    public News(DateOnly published, string longText, string shortText, string author, List<Photo> listPhotos)
    {
        this.published = published;
        this.longText = longText;
        this.shortText = shortText;
        this.Author = author;
        this.listPhotos = listPhotos;
    }
}