package com.app.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class ChangePasswordDTO {
private Long id;
	
	private String oldpassword;
	private String newpaasword;
}
