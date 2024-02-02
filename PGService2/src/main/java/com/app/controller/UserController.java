package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.EditPassDTO;
import com.app.dto.EditPasswordDTO;
import com.app.dto.ForgetPassOtpDTO;
import com.app.dto.OTPVerificationDTO;
import com.app.dto.Propertydto;
import com.app.dto.UserDto;
import com.app.pojos.User;
import com.app.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = {"*"})
public class UserController {

	@Autowired
	public UserService userservice;
	
	public UserController() {
		System.out.println("UserControllerCalled");
	}
	
	@GetMapping("/{id}")
	public UserDto getById(@PathVariable Long id){
		System.out.println("in listUsers");
		return userservice.getById(id);
	}
	
	@PutMapping("/edit")
	public User updateUser(@RequestBody UserDto User)
	{
		return userservice.updateUser(User);		
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> addUser(@RequestBody UserDto User) {
	
		return ResponseEntity.ok(userservice.addUser(User));
	}
	
	@GetMapping("/showcart/{id}")
	public List<Propertydto> getPrpertiesById(@PathVariable Long id){
		return userservice.findById(id);
	}
	
	@PutMapping("/password")
	public ResponseEntity<?> changePassword(@RequestBody EditPasswordDTO password)
	{
		return ResponseEntity.status(HttpStatus.OK).body(userservice.editCustomerPassword(password));
	}
	
	 @PostMapping("/getotpforforgotpass")
	 public ResponseEntity<String> getOtpForForgotPass(@RequestBody ForgetPassOtpDTO emailId) {
		 System.out.println(emailId);
	      String email=emailId.getEmail();
	      System.out.println(email);
	      userservice.getOtpForForgotPass(email);
	        return ResponseEntity.ok("OTP sent for verification.");
	    }
	
	
	    @PostMapping("/verifyotpforforgot")
	    public ResponseEntity<?> verifyOTPForForgotPass(@RequestBody OTPVerificationDTO otpVerificationDTO) {
	    	
	    	System.out.println(otpVerificationDTO);
	        boolean isVerified = userservice.verifyOTP(otpVerificationDTO);
 	    	
	    	try {

		        if (isVerified) {
			         
		            return ResponseEntity.ok("OTP Verification is Successful");
		        } else {
		            return ResponseEntity.badRequest().body("OTP verification failed.");
		        }
				
			} catch (Exception e) {
				e.printStackTrace();
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("error occured during OTP verififcation");
				// TODO: handle exception
			}
//	        isVerified1=isVerified;
	      
	    }
	    
	       boolean isVerified1;

	 
	    @PostMapping("/storenewpass")
	    public ResponseEntity<?> storeNewPass(@RequestBody EditPassDTO editpassword) {
	    	 boolean isPasswordChanged = userservice.forgotchangePassword(editpassword);

	         if (isPasswordChanged) {
	             return ResponseEntity.ok("Password changed successfully");
	         } else {
	             return ResponseEntity.badRequest().body("Password change failed");
	         }
	     }
	
	

}

