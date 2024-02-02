package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@ToString
@Table(name = "Properties")
public class Properties extends CommonEntity{
	
	@Column(length=20,nullable = false)
	private String name;
	@Column(length = 800)
	private String description;
	@Column
	private String address;
	@Column(name = "gender")
//	@Enumerated(EnumType.STRING) 
	private String gender;
	@Column
	private double rent;
	@Column
	private	float ratingClean;
	@Column
	private float ratingFood;
	@Column
	private float ratingSafety;
	@Column
	private float totalvacancy;
	@ManyToOne(fetch= FetchType.LAZY)
	@JoinColumn(name ="city_id")
	private Cities myCity;
	
	@OneToMany(mappedBy = "property",cascade = CascadeType.ALL)
	private List<Reviews>list=new ArrayList<Reviews>();
	
	@ManyToMany(fetch=FetchType.EAGER)
	@JoinTable(name="Properties_Facilities",
	joinColumns =  @JoinColumn(name="property_id"),
	inverseJoinColumns =  @JoinColumn(name="facility_id"))
	private List<Facilities> facilities=new ArrayList<Facilities>();
	
	@ManyToMany(mappedBy = "properties" ,fetch = FetchType.LAZY)
	private  List<User>users=new ArrayList<User>();
	
	@OneToOne(mappedBy = "properties",cascade = CascadeType.ALL,orphanRemoval = true)
	private CartProperties properties;
	
	public Properties(Long id) {
		super();
		setId(id);
	}
	
	public void addFacilities(List<Facilities> l) {
		for (Facilities facility : l) {
			this.facilities.add(facility);
			facility.getProperties().add(this);
		}
	}
	
	public Properties(Long id,String name, String address, String gender, double rent) {
		super();
		setId(id);
		this.name = name;
		this.address = address;
		this.gender = gender;
		this.rent = rent;
	}

	public Properties(Long id,String name, String description, String address, String gender, double rent, float ratingClean,
			float ratingFood, float ratingSafety,float totalvacancy ) {
		super();
		setId(id);
		this.name = name;
		this.description = description;
		this.address = address;
		this.gender = gender;
		this.rent = rent;
		this.ratingClean = ratingClean;
		this.ratingFood = ratingFood;
		this.ratingSafety = ratingSafety;
		this.totalvacancy=totalvacancy;
		
	}
	
	public Properties(float totalvacancy) {
		this.totalvacancy=totalvacancy;
	}

	
	
	
	
	
}
