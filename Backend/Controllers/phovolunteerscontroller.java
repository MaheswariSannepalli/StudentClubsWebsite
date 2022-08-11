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

import com.website.model.phovolunteers;
import com.website.service.phovolunteersservice;
//mark class as Controller
@RestController
public class phovolunteerscontroller 
{
	//autowire the BooksService class
	@Autowired
	phovolunteersservice booksService;
	//creating a get mapping that retrieves all the books detail from the database 
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/phovolunteer")
	private List<phovolunteers> getAllBooks() 
	{
	return booksService.getAllBooks();
	}
	//creating a get mapping that retrieves the detail of a specific book
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/phovolunteer/{studentid}")
	private phovolunteers getBooks(@PathVariable("studentid") String studentid) 
	{
	return booksService.getBooksById(studentid);
	}
	//creating a delete mapping that deletes a specified book
	@DeleteMapping("/phovolunteer/{studentid}")
	private void deleteBook(@PathVariable("studentid") String studentid) 
	{
	booksService.delete(studentid);
	}
	//creating post mapping that post the book detail in the database
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/phovolunteers")
	private String saveBook(@RequestBody phovolunteers books) 
	{
	booksService.saveOrUpdate(books);
	return books.getStudentid();
	}
	//creating put mapping that updates the book detail 
	@PutMapping("/photvolunteers")
	private phovolunteers update(@RequestBody phovolunteers books) 
	{
	booksService.saveOrUpdate(books);
	return books;
	}
	}