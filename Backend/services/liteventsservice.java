package com.website.service;
import java.util.ArrayList;
import java.util.List;
import java.io.IOException;
import java.util.Base64;
import java.util.Base64.Decoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.util.StringUtils;

import com.website.model.litadmins;
import com.website.model.litevents;
import com.website.repository.liteventsrepository;

//defining the business logic
@Service
public class liteventsservice 
{
@Autowired
liteventsrepository booksRepository;
//getting all books record by using the method findaAll() of CrudRepository
public List<litevents> getAllBooks() 
{
List<litevents> books = new ArrayList<litevents>();
booksRepository.findAll().forEach(books1 -> books.add(books1));

return books;
}
//getting a specific record by using the method findById() of CrudRepository
public litevents getBooksById(String id) 
{
return booksRepository.findById(id).get();
}

//saving a specific record by using the method save() of CrudRepository
public void saveOrUpdate(litevents books) 
{
booksRepository.save(books);
}
//deleting a specific record by using the method deleteById() of CrudRepository
public void delete(String id) 
{
booksRepository.deleteById(id);
}
//updating a record
public void save(MultipartFile file, String name,String date,String time,String description) 
{
	litevents event = new litevents();
	event.setName(name);
	event.setDate(date);
	event.setTime(time);
	event.setDescription(description);
	  String fileName = StringUtils.cleanPath(file.getOriginalFilename());
	  if(fileName.contains("..")) {
	   System.out.println("not a valid file");
	  }
	  try {
	   event.setFile(Base64.getEncoder().encodeToString(file.getBytes()));
	  } catch (IOException e) {
	   // TODO Auto-generated catch block
	   e.printStackTrace();
	  }
	
	booksRepository.save(event);
	
}
public void update(MultipartFile file, String name,String date,String time,String description) 
{
	litevents event = booksRepository.findById(name).get();
	event.name=name;
	event.date=date;
	event.time=time;
	event.description=description;
	String fileName = StringUtils.cleanPath(file.getOriginalFilename());
	  if(fileName.contains("..")) {
	   System.out.println("not a valid file");
	  }
	  try {
	   event.file = Base64.getEncoder().encodeToString(file.getBytes());
	  } catch (IOException e) {
	   // TODO Auto-generated catch block
	   e.printStackTrace();
	  }
	  booksRepository.save(event);
}
}