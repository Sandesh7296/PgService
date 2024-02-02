package com.app.service;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.AuthRequest;
import com.app.dto.AuthResp;
import com.app.dto.ChangePasswordDTO;
import com.app.dto.EditPassDTO;
import com.app.dto.EditPasswordDTO;
import com.app.dto.OTPVerificationDTO;
import com.app.dto.Propertydto;
import com.app.dto.UserDto;
import com.app.pojos.User;



public interface UserService {
	
public List<UserDto> getAllusers();
	
	public UserDto getById(Long id);
	public User getUserSById(Long id);
	public User addUser(UserDto user);
	
	public String deleteUser(Long id);
	
	public User updateUser(UserDto dto);
	public AuthResp Signin(AuthRequest req);
	
	public List<Propertydto> findById(Long id);
	
	public String addToBook(Long userId,Long propertyId);
	public String editCustomerPassword(EditPasswordDTO pass);

	public void getOtpForForgotPass(String emailId);
	 public boolean verifyOTP(OTPVerificationDTO otpVerificationDTO);
//	public SignUpResponseDTO storeUserDataWithNewPass(EditPassDTO newPass);
	
	public boolean forgotchangePassword(EditPassDTO changePasswordDTO);
//public void sendOTPAndStoreUserData(SignUpDTO userRegistrationDTO);
	public String changePassword(ChangePasswordDTO changepassdto );
	
}
