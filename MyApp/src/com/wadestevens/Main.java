package com.wadestevens;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {

    public static void main(String[] args) {

        EmployeeService employeeService = new EmployeeService();

        List<PerformanceLevel> performanceLevels1 = Arrays.asList(new PerformanceLevel(2017, 1), new PerformanceLevel(2018, 2), new PerformanceLevel(2019, 1));
        List<PerformanceLevel> performanceLevels2 = Arrays.asList(new PerformanceLevel(2017, 2), new PerformanceLevel(2018, 3), new PerformanceLevel(2019, 4));
        List<PerformanceLevel> performanceLevels3 = Arrays.asList(new PerformanceLevel(2017, 3), new PerformanceLevel(2018, 2), new PerformanceLevel(2019, 1));

        List<Address> addresses1 = Arrays.asList(new Address("Residential", "1234 Abcd Drive", "Apt A", "City1", "TX", 73301), new Address("Work", "10 Abcd Road", "Suite -600", "City1", "TX", 73301));
        List<Address> addresses2 = Arrays.asList(new Address("Residential", "5467 Efgh Drive", "Apt B", "City1", "MO", 73301), new Address("Work", "10 Abcd Road", "Suite -600", "City1", "TX", 73301));
        List<Address> addresses3 = Arrays.asList(new Address("Residential", "8910 Ijkl Drive", "Apt C", "City1", "CA", 73301), new Address("Work", "10 Abcd Road", "Suite -600", "City1", "TX", 73301));


        List<Employee> employeeList = Arrays.asList(
                new Employee("Mark", 32, new BigDecimal("70000"), performanceLevels1, addresses1, "SALES")
                , new Employee("James", 35, new BigDecimal("65000"), performanceLevels2, addresses2, "SALES")
                , new Employee("Peter", 39, new BigDecimal("75000"), performanceLevels3, addresses3, "IT")
                , new Employee("Thomas", 32, new BigDecimal("70000"), performanceLevels1, addresses1, "IT")
                , new Employee("Adam", 35, new BigDecimal("65000"), performanceLevels2, addresses2, "SALES")
                , new Employee("John", 39, new BigDecimal("75000"), performanceLevels3, addresses3, "IT")
        );

//		for(Employee employee:employeeList) {
//
//			employeeService.printSalaryDetails(employee);
//		}

        employeeService.printDepartmentExpense(employeeList);


    }


}
