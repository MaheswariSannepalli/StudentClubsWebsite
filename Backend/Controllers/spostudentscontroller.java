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

import com.website.model.spostudents;
import com.website.service.spostudentsservice;
//mark class as Controller
@RestController
public class spostudentscontroller 
{
	//autowire the BooksService class
	@Autowired
	spostudentsservice booksService;
	//creating a get mapping that retrieves all the books detail from the database 
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/spostudent")
	private List<spostudents> getAllBooks() 
	{
	return booksService.getAllBooks();
	}
	//creating a get mapping that retrieves the detail of a specific book
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/spostudent/{studentid}")
	private spostudents getBooks(@PathVariable("studentid") String studentid) 
	{
	return booksService.getBooksById(studentid);
	}
	//creating a delete mapping that deletes a specified book
	@DeleteMapping("/spostudent/{studentid}")
	private void deleteBook(@PathVariable("studentid") String studentid) 
	{
	booksService.delete(studentid);
	}
	//creating post mapping that post the book detail in the database
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/spostudents")
	private String saveBook(@RequestBody spostudents books) 
	{
	booksService.saveOrUpdate(books);
	return books.getStudentid();
	}
	//creating put mapping that updates the book detail 
	@PutMapping("/spostudents")
	private spostudents update(@RequestBody spostudents books) 
	{
	booksService.saveOrUpdate(books);
	return books;
	}
	}
