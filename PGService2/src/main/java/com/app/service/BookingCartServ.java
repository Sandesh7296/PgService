package com.app.service;

import java.util.List;
import java.util.Set;

import com.app.dto.BookingCartdto;
import com.app.dto.CartProperitesdto;
import com.app.pojos.BookingCart;

public interface BookingCartServ {

	String addPropertiesToCart(Long propId, Long userId);
	Set<CartProperitesdto> getCartDetails(Long userId);	
	String deleteCartContents(Long userId);
	String updateProp(Long propId);
	
}
