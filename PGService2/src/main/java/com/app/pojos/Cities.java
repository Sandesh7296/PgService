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
@Table(name = "Cities")
public class Cities extends CommonEntity {

	@Column
	private String name;
	@OneToMany(mappedBy ="myCity", cascade = CascadeType.ALL,orphanRemoval = true,fetch= FetchType.EAGER)
	private List<Properties> properties = new ArrayList<>();
	
	public Cities(Long id) {
		this.setId(id);
		
	}
	

	
}
