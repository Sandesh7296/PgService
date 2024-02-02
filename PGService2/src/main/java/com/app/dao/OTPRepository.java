package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.OTP;

public interface OTPRepository extends JpaRepository<OTP, Long> {

	OTP findByEmail(String email);
}
