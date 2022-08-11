package com.website.controller;
import java.util.Base64;
import org.springframework.web.bind.annotation.RequestParam;
import java.util.Base64.Encoder;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.website.model.robadmins;
import com.website.model.robevents;
import com.website.service.robeventsservice;
//mark class as Controller
@RestController
public class robeventscontroller 
{
	//autowire the BooksService class
	@Autowired
	robeventsservice booksService;
	
	//creating a get mapping that retrieves all the books detail from the database 
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/robevent")
	private List<robevents> getAllBooks() 
	{
	return booksService.getAllBooks();
	}
	//creating a get mapping that retrieves the detail of a specific book
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/robevent/{name}")
	private robevents getBooks(@PathVariable("name") String name) 
	{
	return booksService.getBooksById(name);
	}
	//creating a delete mapping that deletes a specified book
	@CrossOrigin(origins = "http://localhost:3000")
	@DeleteMapping("/robevent/{name}")
	private void deleteBook(@PathVariable("name") String name) 
	{
	booksService.delete(name);
	}
	//creating post mapping that post the book detail in the database
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/robevents")
	private void saveBook(@RequestParam("file") MultipartFile file,@RequestParam("name") String  name,@RequestParam("date") String date,@RequestParam("time") String time,@RequestParam("description") String description) 
	{
		
	booksService.update(file,name,date,time,description);
	
	}
	}