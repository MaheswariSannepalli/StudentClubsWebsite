package com.website.controller;
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

import com.website.model.spoadmins;
import com.website.service.spoadminsservice;
//mark class as Controller
@RestController
public class spoadminscontroller 
{
	//autowire the BooksService class
	@Autowired
	spoadminsservice booksService;
	//creating a get mapping that retrieves all the books detail from the database 
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/spoadmin")
	private List<spoadmins> getAllBooks() 
	{
	return booksService.getAllBooks();
	}
	//creating a get mapping that retrieves the detail of a specific book
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/spoadmin/{coid}")
	private spoadmins getBooks(@PathVariable("coid") String coid) 
	{
	return booksService.getBooksById(coid);
	}
	//creating a delete mapping that deletes a specified book
	@CrossOrigin(origins = "http://localhost:3000")
	@DeleteMapping("/spoadmin/{coid}")
	private void deleteBook(@PathVariable("coid") String coid) 
	{
	booksService.delete(coid);
	}
	//creating post mapping that post the book detail in the database
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/spoadmins")
	private String saveBook(@RequestBody spoadmins books) 
	{
	booksService.saveOrUpdate(books);
	return books.getCoid();
	}
	//creating put mapping that updates the book detail 
	@CrossOrigin(origins = "http://localhost:3000")
	@PutMapping("/spoadmin/edit/{coid}")
	private String update(@RequestBody spoadmins books) 
	{
	booksService.update(books);
	return books.getCoid();
	}
	
	}