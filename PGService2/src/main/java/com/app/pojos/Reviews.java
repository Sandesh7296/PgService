package com.app.pojos;

import javax.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name ="Reviews")
public class Reviews extends CommonEntity {

	@Column
	private String content;

	@Column
	private String fullName;
	@ManyToOne
	@JoinColumn(name = "property_id")
	private Properties property;

	@ManyToOne
	@JoinColumn(name = "User_id")
	private User user;

	public Reviews(Long id) {
		super();            
		setId(id);
	}

	
}
