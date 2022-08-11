package com.website.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
//mark class as an Entity 
@Entity
//defining class name as Table name
@Table
public class spoevents
{
//Defining book id as primary key
@Id
@Column
public String name;
@Column
public String date;
@Column
public String time;
@Column
public String description;
@Lob
@Column(columnDefinition = "MEDIUMBLOB")
public String file;

public String getName() 
{
return name;
}
public void setName(String name) 
{
this.name = name;
}
public String getDate()
{
return date;
}
public void setDate(String date) 
{
this.date = date;
}
public String getTime() 
{
return time;
}
public void setTime(String time) 
{
this.time = time;
}
public String getDescription() 
{
return description;
}
public void setDescription(String description) 
{
this.description = description;
}
public String getFile() 
{
return file;
}
public void setFile(String file) 
{
this.file = file;
}
}