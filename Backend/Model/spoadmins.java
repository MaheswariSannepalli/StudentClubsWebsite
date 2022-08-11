package com.website.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
//mark class as an Entity 
@Entity
//defining class name as Table name
@Table
public class spoadmins
{
//Defining book id as primary key
@Id
@Column
public String coid;
@Column
public String coname;
@Column
public String codept;
@Column
public String corole;
@Column
public String coemail;
@Column
public String copassword;
public String getCoid() 
{
return coid;
}
public void setCoid(String coid) 
{
this.coid = coid;
}
public String getConame()
{
return coname;
}
public void setConame(String coname) 
{
this.coname = coname;
}
public String getCodept() 
{
return codept;
}
public void setCodept(String codept) 
{
this.codept = codept;
}
public String getCorole() 
{
return corole;
}
public void setCorole(String corole) 
{
this.corole = corole;
}
public String getCoemail() 
{
return coemail;
}
public void setCoemail(String coemail) 
{
this.coemail = coemail;
}
public String getCopassword() 
{
return copassword;
}
public void setCopassword(String copassword) 
{
this.copassword = copassword;
}
}