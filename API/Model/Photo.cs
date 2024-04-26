using System.ComponentModel.DataAnnotations.Schema;

[Table("Photos")]
public class Photo
{
    long Id{get;set;}
    string stringOfPhoto{get;set;}
    string NewsId{get;set;}
}