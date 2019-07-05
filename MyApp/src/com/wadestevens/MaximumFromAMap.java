package com.wadestevens;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Optional;

public class MaximumFromAMap {

    public static void main(String[] args) {
        Map<String, BigDecimal> maxSalaryMap = new HashMap<String, BigDecimal>();

        maxSalaryMap.put("Peter", new BigDecimal("70000.00"));
        maxSalaryMap.put("John", new BigDecimal("50000.00"));
        maxSalaryMap.put("Adam", new BigDecimal("75000.00"));
        maxSalaryMap.put("James", new BigDecimal("170000.00"));
        maxSalaryMap.put("Mark", new BigDecimal("117000.00"));

        MaximumFromAMap maximumFromAMap = new MaximumFromAMap();
        System.out.println(maximumFromAMap.maxUsingStreamAndLambda(maxSalaryMap));

    }


    private String maxUsingStreamAndLambda(Map<String, BigDecimal> map) {
        Optional<Entry<String, BigDecimal>> maxEntry = map.entrySet()
                .stream()
                .max((Entry<String, BigDecimal> e1, Entry<String, BigDecimal> e2) -> e1.getValue()
                        .compareTo(e2.getValue())
                );

        return maxEntry.get().getKey();
    }

}

