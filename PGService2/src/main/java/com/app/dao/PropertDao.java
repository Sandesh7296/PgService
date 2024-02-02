package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.dto.Propertydto;
import com.app.pojos.Properties;

@Repository
public interface PropertDao extends JpaRepository<Properties, Long> {

	List<Properties> findByGender(String gender);
	
//	@Query("SELECT p FROM Properties p WHERE p.myCity.city_Id =?1")
//	List<Properties> findByMyCityId(Long cityId);
////	@Query("SELECT p FROM Properties p WHERE p.city_id =?1")
	
//	 @Query("SELECT p FROM Properties p WHERE p.city_id IN (SELECT c.id FROM Cities c WHERE c.cityname =?1)")
//	 List<Properties> findPropertiesByCityName(String cityname);

	 @Query("SELECT p FROM Properties p JOIN p.myCity c WHERE c.name = :cityname")
	 List<Properties> findPropertiesByCityName(String cityname);
	 
	 List<Properties> findByMyCityId(Long CityId);
	
	
}
