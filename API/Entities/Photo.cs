using Api.Entities;

namespace API.Entities;

public class Photo
{
    public int Id { get; set; }
    public string PhotoString { get; set; }
    public int NewsId { get; set; }
    //public News News { get; set; }

    public Photo(string photoString)
    {
        PhotoString = photoString;
    }

}