using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("Photo")]
public class Photo
{
    [Key]
    int Id{get;set;}
    string stringOfPhoto{get;set;}
    public int NewsId { get; set; }

  // Navigation property for the many-to-one relationship with News
  public News News { get; set; }

  public Photo()
  {
    
  }

  public Photo(string stringPhoto,int newsId)
  {
    this.stringOfPhoto = stringPhoto;
    this.NewsId = newsId;
  }
}