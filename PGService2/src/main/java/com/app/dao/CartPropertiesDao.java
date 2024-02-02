package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.dto.CartProperitesdto;
import com.app.pojos.CartProperties;

public interface CartPropertiesDao extends JpaRepository<CartProperties, Long>{

	List<CartProperties>findByMyCartId(Long cartId);
	
}
