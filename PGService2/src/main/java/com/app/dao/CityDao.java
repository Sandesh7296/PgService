package com.app.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.pojos.Cities;

@Repository
public interface CityDao extends JpaRepository<Cities, Long> {

	
	@Query("SELECT c FROM Cities c WHERE c.name = ?1")
	Cities findByCityName(String name);


	//	public Cities findByName(String cityName);
}
