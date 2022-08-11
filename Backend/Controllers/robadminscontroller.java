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

import com.website.model.robadmins;
import com.website.service.robadminsservice;
//mark class as Controller
@RestController
public class robadminscontroller 
{
	//autowire the BooksService class
	@Autowired
	robadminsservice booksService;
	//creating a get mapping that retrieves all the books detail from the database 
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/robadmin")
	private List<robadmins> getAllBooks() 
	{
	return booksService.getAllBooks();
	}
	//creating a get mapping that retrieves the detail of a specific book
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/robadmin/{coid}")
	private robadmins getBooks(@PathVariable("coid") String coid) 
	{
	return booksService.getBooksById(coid);
	}
	//creating a delete mapping that deletes a specified book
	@CrossOrigin(origins = "http://localhost:3000")
	@DeleteMapping("/robadmin/{coid}")
	private void deleteBook(@PathVariable("coid") String coid) 
	{
	booksService.delete(coid);
	}
	//creating post mapping that post the book detail in the database
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/robadmins")
	private String saveBook(@RequestBody robadmins books) 
	{
	booksService.saveOrUpdate(books);
	return books.getCoid();
	}
	//creating put mapping that updates the book detail 
	@CrossOrigin(origins = "http://localhost:3000")
	@PutMapping("/robadmin/edit/{coid}")
	private String update(@RequestBody robadmins books) 
	{
	booksService.update(books);
	return books.getCoid();
	}
	
	}