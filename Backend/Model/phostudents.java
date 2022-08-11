package com.website.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
//mark class as an Entity 
@Entity
//defining class name as Table name
@Table
public class phostudents
{
//Defining book id as primary key
@Id
@Column
private String studentid;
@Column
private String name;
@Column
private String stream;
@Column
private String dept;
@Column
private int year;
@Column
private String email;
@Column
private String password;
public String getStudentid() 
{
return studentid;
}
public void setStudentid(String studentid) 
{
this.studentid = studentid;
}
public String getName()
{
return name;
}
public void setName(String name) 
{
this.name = name;
}
public String getStream() 
{
return stream;
}
public void setStream(String stream) 
{
this.stream = stream;
}
public String getDept() 
{
return dept;
}
public void setDept(String dept) 
{
this.dept = dept;
}
public int getYear() 
{
return year;
}
public void setYear(int year) 
{
this.year = year;
}
public String getEmail() 
{
return email;
}
public void setEmail(String email) 
{
this.email = email;
}
public String getPassword() 
{
return password;
}
public void setPassword(String password) 
{
this.password = password;
}
}