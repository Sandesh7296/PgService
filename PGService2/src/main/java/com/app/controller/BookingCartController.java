package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.BookingCartServ;

@RestController
@RequestMapping("/bookingCart")
@CrossOrigin(origins = {"*"})
public class BookingCartController {

	@Autowired
	public BookingCartServ bookingCartService;
	
	@PostMapping("/add")
	public String addToCart(@RequestParam Long propertyId,@RequestParam Long userId)  			//http://localhost:8080/bookingCart/add?propertyId=2&userId=3
	{		
		return bookingCartService.addPropertiesToCart(propertyId, userId);
	}
	
	
	@GetMapping("/show_cart/{userId}")
	public ResponseEntity<?> showCartContents(@PathVariable Long userId) {
		return  ResponseEntity.status(HttpStatus.OK).body(bookingCartService.getCartDetails(userId));
		
	}
	
	
	@PatchMapping("/update/{propId}")
	public String Update(@PathVariable Long propId) {
		System.out.println(propId);
	  return bookingCartService.updateProp(propId);
	} 
	
	@PatchMapping("/remove/{propId}")
	public String RemoveFromcart(@PathVariable Long propId) {
		System.out.println(propId);
	  return bookingCartService.deleteCartContents(propId);
	} 
}
