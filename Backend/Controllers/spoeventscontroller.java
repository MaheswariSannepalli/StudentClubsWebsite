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

import com.website.model.spoadmins;
import com.website.model.spoevents;
import com.website.service.spoeventsservice;
//mark class as Controller
@RestController
public class spoeventscontroller 
{
	//autowire the BooksService class
	@Autowired
	spoeventsservice booksService;
	
	//creating a get mapping that retrieves all the books detail from the database 
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/spoevent")
	private List<spoevents> getAllBooks() 
	{
	return booksService.getAllBooks();
	}
	//creating a get mapping that retrieves the detail of a specific book
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/spoevent/{name}")
	private spoevents getBooks(@PathVariable("name") String name) 
	{
	return booksService.getBooksById(name);
	}
	//creating a delete mapping that deletes a specified book
	@CrossOrigin(origins = "http://localhost:3000")
	@DeleteMapping("/spoevent/{name}")
	private void deleteBook(@PathVariable("name") String name) 
	{
	booksService.delete(name);
	}
	//creating post mapping that post the book detail in the database
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/spoevents")
	private void saveBook(@RequestParam("file") MultipartFile file,@RequestParam("name") String  name,@RequestParam("date") String date,@RequestParam("time") String time,@RequestParam("description") String description) 
	{
		
	booksService.save(file,name,date,time,description);
	
	}
	//creating put mapping that updates the book detail 
	@CrossOrigin(origins = "http://localhost:3000")
	@PutMapping("/spoevent/event/{name}")
	private void update(@RequestParam("file") MultipartFile file,@RequestParam("name") String  name,@RequestParam("date") String date,@RequestParam("time") String time,@RequestParam("description") String description)  
	{
	booksService.update(file,name,date,time,description);
	}
	}