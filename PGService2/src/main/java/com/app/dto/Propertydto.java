package com.app.dto;


import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

import org.springframework.stereotype.Component;

import com.app.pojos.Cities;
import com.app.pojos.Gender;
import com.app.pojos.Properties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString 
public class Propertydto {
	
	private Long id;
	private String name;
	private String description;
	private String address;
	private String gender;
	private double rent;
	@Min(value = 1, message = "Minimum rating should be 1")
	@Max(value = 5, message = "Maximum rating should be 5")
	private	float ratingClean;
	@Min(value = 1, message = "Minimum rating should be 1")
	@Max(value = 5, message = "Maximum rating should be 5")
	private float ratingFood;
	@Min(value = 1, message = "Minimum rating should be 1")
	@Max(value = 5, message = "Maximum rating should be 5")
	private float ratingSafety;
	private Long city_id;
	
	private float totalvacancy;
	

	public Propertydto(Properties pro) {

		this.id=pro.getId();
		this.name = pro.getName();
		this.description = pro.getDescription();
		this.address = pro.getAddress();
		this.gender = pro.getGender();
		this.rent = pro.getRent();
		this.ratingClean = pro.getRatingClean();
		this.ratingFood = pro.getRatingFood();
		this.ratingSafety = pro.getRatingSafety();
		this.totalvacancy=pro.getTotalvacancy();
//		this.city_id=null;
	}
	
	
}
