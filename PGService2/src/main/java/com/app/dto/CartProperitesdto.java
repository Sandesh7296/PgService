package com.app.dto;

import java.util.List;

import com.app.pojos.Properties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CartProperitesdto {
	
	//private Properties properties;
	private Long id;
	private String name;
	private String address;
	private String description;
	private String gender;
	private double rent;
	
}
