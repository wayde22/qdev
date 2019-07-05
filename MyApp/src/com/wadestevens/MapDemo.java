package com.wadestevens;

import java.math.BigDecimal;
import java.math.MathContext;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


public class MapDemo {

    public static void main(String[] args) {
//		Map<String,BigDecimal> salaryTax=new HashMap<>();
//		salaryTax.put("TX",new BigDecimal(0.0));
//		salaryTax.put("MO",new BigDecimal(0.1));
//		salaryTax.put("CA",new BigDecimal(0.12));
//
        List<String> nameList = new ArrayList<>();
        nameList.add("Firdous");
        nameList.add("Miles");
        nameList.add("Emily");
        nameList.add("Firdous");

        nameList.forEach(name -> System.out.println(name));


        //System.out.println((salaryTax.get("MO")).round(new MathContext(2)));

    }

}

