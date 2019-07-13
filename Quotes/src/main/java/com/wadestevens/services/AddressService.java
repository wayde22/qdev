package com.wadestevens.services;

import com.wadestevens.model.Address;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class AddressService {

    private Map<String, BigDecimal> timeZoneQoute = new HashMap<String, BigDecimal>();

    public AddressService() {
        timeZoneQoute.put("EastToCentral", new BigDecimal("1000.00"));
        timeZoneQoute.put("EastToMountain", new BigDecimal("2000.00"));
        timeZoneQoute.put("EastToPacific", new BigDecimal("3000.00"));
        timeZoneQoute.put("CentralToEast", new BigDecimal("1000.00"));
        timeZoneQoute.put("CentralToMountain", new BigDecimal("1000.00"));
        timeZoneQoute.put("CentralToPacific", new BigDecimal("2000.00"));
        timeZoneQoute.put("MountainToEast", new BigDecimal("2000.00"));
        timeZoneQoute.put("MountainToCentral", new BigDecimal("1000.00"));
        timeZoneQoute.put("MountainToPacific", new BigDecimal("1000.00"));
        timeZoneQoute.put("PacificToEast", new BigDecimal("3000.00"));
        timeZoneQoute.put("PacificToCentral", new BigDecimal("2000.00"));
        timeZoneQoute.put("PacificToMountain", new BigDecimal("1000.00"));
    }

    public void printAddress(Address address) {

    }

}
