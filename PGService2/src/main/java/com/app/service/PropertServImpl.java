package com.app.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.CityDao;
import com.app.dao.FacilitiesDao;
import com.app.dao.PropertDao;
import com.app.dto.ApiResponse;
import com.app.dto.Citiesdto;
import com.app.dto.Converterdto;
import com.app.dto.Facilitiesdto;
import com.app.dto.Facilitiesdto2;
import com.app.dto.PropertyFacilitydto;
import com.app.dto.Propertydto;
import com.app.exception_handler.GlobalExceptionHandler;
import com.app.pojos.Cities;
import com.app.pojos.Facilities;
import com.app.pojos.Properties;

@Service
@Transactional
public class PropertServImpl implements PropertServ {

	@Autowired
	private PropertDao propertyDao;

	@Autowired
	private CityDao citiesDao;

	@Autowired
	public ModelMapper mapper;

	@Autowired
	private FacilitiesDao facilitiesDao;

	public List<Propertydto> maptoDto(List<Properties> list) {
		List<Propertydto> propertyDtoList = new ArrayList<Propertydto>();

		for (Properties e : list) {
			Propertydto d = new Propertydto();
			d.setId(e.getId());
			d.setAddress(e.getAddress());
			d.setDescription(e.getDescription());
			d.setName(e.getName());
			d.setGender(e.getGender());
			d.setRatingClean(e.getRatingClean());
			d.setRatingFood(e.getRatingFood());
			d.setRatingSafety(e.getRatingSafety());
			d.setRent(e.getRent());
			d.setCity_id(e.getMyCity().getId());
			d.setTotalvacancy(e.getTotalvacancy());

			propertyDtoList.add(d);                 
		}

		return propertyDtoList;
	}
	
	Converterdto converter = new Converterdto();

	@Override
	public List<Propertydto> getPropertiesByCityName(String cityName) {
		Cities city = citiesDao.findByCityName(cityName);
		
			System.out.println(city.getId());
			List<Properties>prop=propertyDao.findByMyCityId(city.getId());
//			System.out.println(prop.get(1));
			System.out.println(prop);
			
			List<Propertydto>propdto=new ArrayList<>();
			
			for(Properties p:prop) {
				System.out.println(p.getMyCity().getId());
				Properties pro=new Properties(p.getId(),p.getName(),p.getDescription(),p.getAddress(),p.getGender(),p.getRent(),p.getRatingClean(),p.getRatingFood(),p.getRatingSafety(),p.getTotalvacancy());
					
					propdto.add(new Propertydto(pro));
			}
			
		return propdto;
//		return maptoDto(city.getProperties());
	}

	@Override
	public ApiResponse addProperty(Propertydto property) {

		Converterdto converter = new Converterdto();
		Properties propt = converter.toPropertyEntity(property);
		Properties prop = propertyDao.save(propt);

		return new ApiResponse("Property Added Successfully");
	}

	@Override
	public Properties updateProperty(Propertydto pt) {
		Properties prot = propertyDao.findById(pt.getId())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid city ID !!!!!"));
		
		Properties propt = converter.toProperty(pt);
		return propertyDao.save(propt);
	}

	@Override
	public List<Propertydto> getAllProperties() {

		List<Propertydto>propertyDtoList = new ArrayList<Propertydto>();
		List<Properties> prop = propertyDao.findAll();
		System.out.println(prop.get(0).getMyCity().getId());
		
	//	List<Propertydto> propertyDtoList=maptoDto(prop);
		
		propertyDtoList = Arrays.asList(mapper.map(prop,Propertydto[].class));
		
		return propertyDtoList;
	}

	@Override
	public List<Facilitiesdto> findById(Long propId) {
		Properties prop = propertyDao.findById(propId).orElseThrow();
		List<Facilities> list = prop.getFacilities();

		List<Facilitiesdto> facilityDtoList = new ArrayList<Facilitiesdto>();
		for (Facilities e : list) {
			Facilitiesdto fd = new Facilitiesdto();
			fd.setId(e.getId());
			fd.setName(e.getName());
			fd.setType(e.getType());
			facilityDtoList.add(fd);
		}
//		System.out.println(list.get(0).getName());
		prop.getFacilities().size();// avoid lazy init
		return facilityDtoList;
	}

	public String addPropertiesAndFacilities(PropertyFacilitydto prorFac) {

		Properties entity = new Properties();
		List<Facilitiesdto2> list = prorFac.getFacilities();

		entity.setId(prorFac.getId());
		entity.setAddress(prorFac.getAddress());
		entity.setDescription(prorFac.getDescription());
		entity.setName(prorFac.getName());
		entity.setGender(prorFac.getGender());
		entity.setRatingClean(prorFac.getRatingClean());
		entity.setRatingFood(prorFac.getRatingFood());
		entity.setRatingSafety(prorFac.getRatingSafety());
		entity.setRent(prorFac.getRent());
		entity.setTotalvacancy(prorFac.getTotalvacancy());
		Cities ct=citiesDao.findByCityName(prorFac.getCityName().getName());
		entity.setMyCity(ct);
		
		List<Facilities> l = new ArrayList<Facilities>();
		for (Facilitiesdto2 facilities : list) {
			Facilities f = new Facilities();
			f.setName(facilities.getName());
			f.setType(facilities.getType());
			f.addProperties(entity);
			facilitiesDao.save(f);
		}
		entity.addFacilities(l);
		propertyDao.save(entity);
		return "added";
	}

	@Override
	public PropertyFacilitydto getPropertyFacility(Long id) {
		
		Properties prop=propertyDao.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid Property ID !!!!!"));
		return mapper.map(prop,PropertyFacilitydto.class);
	}
	
	@Override
	public List<Propertydto> getPropertiesByGender(String gender) {
		List<Properties> prop = propertyDao.findByGender(gender);
		System.out.println(prop);
		
		return Arrays.asList(mapper.map(prop,Propertydto[].class));
//	return null;
	}

	@Override
	public List<Propertydto> getPropertiesByCity(String cityName) {				//for this we used join query//
		// TODO Auto-generated method stub
		List<Properties>prop=propertyDao.findPropertiesByCityName(cityName);
		List<Propertydto>propdto=new ArrayList<>();
		
		for(Properties p:prop) {
			System.out.println(p.getMyCity().getId());
			Properties pro=new Properties(p.getId(),p.getName(),p.getDescription(),p.getAddress(),p.getGender(),p.getRent(),p.getRatingClean(),p.getRatingFood(),p.getRatingSafety(),p.getTotalvacancy());
				System.out.println(prop);
			propdto.add(new Propertydto(pro));
		}
		
	return propdto;

		
	}
	
	
//	@Override
//	public String addFacilityToProperty(Long propertyId, Facilitiesdto facilitiesDto) {
//
//		Properties prop = propertyDao.findById(propertyId).orElseThrow();
//		PropertyFacilitydto pf= new PropertyFacilitydto(prop.getId(),prop.getAddress(),prop.getDescription(),prop.getName(),prop.getGender(),prop.getRatingClean(),
//								prop.getRatingFood(),prop.getRatingSafety(),prop.getRent(),facilitiesDto.getId(),facilitiesDto.getName(),facilitiesDto.getType());
//		
//		
//				
//		return null;
//	}
	
	
}
