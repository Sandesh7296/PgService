package com.app.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.OTPRepository;
import com.app.dao.UserDao;
import com.app.dto.AuthRequest;
import com.app.dto.AuthResp;
import com.app.dto.ChangePasswordDTO;
import com.app.dto.Converterdto;
import com.app.dto.EditPassDTO;
import com.app.dto.EditPasswordDTO;
import com.app.dto.OTPDTO;
import com.app.dto.OTPVerificationDTO;
import com.app.dto.Propertydto;
import com.app.dto.UserDto;
import com.app.pojos.OTP;
import com.app.pojos.Properties;
import com.app.pojos.User;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	public UserDao userdao;
	OTPDTO userObj = new OTPDTO();

	@Autowired
	public ModelMapper mapper;

	@Autowired
	private OTPRepository otprepository;

	@Autowired
	private JavaMailSender javaMailSender;

	@Override
	public List<UserDto> getAllusers() {

		List<UserDto> UserDtoList = new ArrayList<UserDto>();
		List<User> users = userdao.findAll();
		UserDtoList = Arrays.asList(mapper.map(users, UserDto[].class));
		return UserDtoList;

	}

	@Override
	public UserDto getById(Long id) {

		User user = userdao.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid User ID !!!!!"));
		return mapper.map(user, UserDto.class);
	}

	@Override
	public User addUser(UserDto user) {

		Converterdto dto = new Converterdto();
		User u = dto.toUser(user);
		User u1 = userdao.save(u);
		return u1;
	}

	@Override
	public String deleteUser(Long id) {

		User u = userdao.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid User ID !!!!!"));
		userdao.delete(u);
		return "User Deleted";
	}

	@Override
	public User updateUser(UserDto udto) {
		User u = userdao.findById(udto.getId())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid User ID !!!!!"));
		Converterdto dto = new Converterdto();
		User u1 = dto.toUser(udto);
		return userdao.save(u1);

	}

	@Override
	public AuthResp Signin(AuthRequest req) {
		User user = userdao.findByEmailAndPassword(req.getEmail(), req.getPassword())
				.orElseThrow(() -> new ResourceNotFoundException("invalid email or Password....!"));
		System.out.println(user);
		return mapper.map(user, AuthResp.class);
	}

	public List<Propertydto> findById(Long userId) {
		User user = userdao.findById(userId).orElseThrow();
		List<Properties> list = user.getProperties();

		List<Propertydto> propertydtosList = new ArrayList<Propertydto>();

		for (Properties e : list) {

			Propertydto fd = new Propertydto();
			fd.setAddress(e.getAddress());
			fd.setDescription(e.getDescription());
			fd.setGender(e.getGender());
			fd.setName(e.getName());
			fd.setRatingClean(e.getRatingClean());
			fd.setRatingFood(e.getRatingFood());
			fd.setRatingSafety(e.getRatingSafety());
			fd.setRent(e.getRent());
			fd.setId(e.getId());
			propertydtosList.add(fd);
		}
		System.out.println(list.get(0).getAddress());
		user.getProperties().size();
		return propertydtosList;
	}

	@Override
	public String addToBook(Long userId, Long propertyId) {

		return null;
	}

	@Override
	public User getUserSById(Long id) {

		User user = userdao.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid User ID !!!!!"));

		return user;
	}

	@Override
	public String editCustomerPassword(EditPasswordDTO pass) {

		User cust = getUserSById(pass.getId());
		if (cust.getPassword().equals(pass.getOldpassword())) {
			cust.setPassword(pass.getNewpaasword());
			return "Password changed successfully";
		}
		return "Invalid email or old password";
	}

	OTP otpobj = new OTP();

	@Override
	public boolean verifyOTP(OTPVerificationDTO otpVerificationDTO) {
		// System.out.println("verify otp"+otpVerificationDTO.getOtp()+"and email
		// is"+otpVerificationDTO.getEmail());
		OTP storedOTP = otprepository.findByEmail(otpVerificationDTO.getEmail());
		System.out.println("in service=====>" + storedOTP.getOtp() + storedOTP.getEmail());

		if (storedOTP != null && storedOTP.getOtp().equals(otpVerificationDTO.getOtp())) {

			return true;

		}
		return false;
	}

	private String generateOTP() {
		int otpLength = 6;
		String numbers = "0123456789";
		StringBuilder otp = new StringBuilder();

		for (int i = 0; i < otpLength; i++) {
			int index = (int) (Math.random() * numbers.length());
			otp.append(numbers.charAt(index));
		}

		return otp.toString();
	}

	private void sendOTPEmail(String email, String otp) {

		MimeMessage message = javaMailSender.createMimeMessage();

		try {
			MimeMessageHelper helper = new MimeMessageHelper(message, true);
			helper.setTo(email);
			helper.setSubject("OTP Verification");
			helper.setText("Your OTP for registration is: " + otp);
			javaMailSender.send(message);
		} catch (MessagingException e) {
			// Handle exception
		}
	}

	User cust = new User();

	@Override
	public void getOtpForForgotPass(String emailId) {
		OTP dbotp = new OTP();
		User cust = userdao.findByEmail(emailId);
		System.out.println("-------" + cust.toString());
		userObj.setEmail(emailId);
		if (cust.getEmail() != null) {
			String otp = generateOTP();
			sendOTPEmail(emailId, otp);
			otpobj.setEmail(emailId);
			otpobj.setOtp(otp);
			dbotp.setOtp(otp);
			dbotp.setEmail(emailId);
			// dao.saveAll(dbotp);
			otprepository.save(dbotp);
		} else if (cust.getEmail() == null && cust != null)
			throw new ResourceNotFoundException("User Does not exist from userServiceImpl Class");

	}

	@Override
	public String changePassword(ChangePasswordDTO changepassdto) {
		// Optional<User> cust=dao.findById(changepassdto.getId());

		System.out.println(changepassdto.toString());
		User cust = userdao.findById(changepassdto.getId()).orElseThrow();
		System.out.println(cust.toString());
		if (cust.getPassword().equals(changepassdto.getOldpassword())) {
			cust.setPassword(changepassdto.getNewpaasword());
			userdao.save(cust);
			return "password changed successfully";

		} else {

			return ("password does not match");
		}

	}

	@Override
	public boolean forgotchangePassword(EditPassDTO changePasswordDTO) {

		System.out.println(changePasswordDTO.getEmail());
		User user = userdao.findByEmail(changePasswordDTO.getEmail());

		if (user != null && user.getEmail().equals(changePasswordDTO.getEmail())) {
			user.setPassword(changePasswordDTO.getNewPassword());
			userdao.save(user);
			return true;
		}

		return false;
	}

}
