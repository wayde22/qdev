package com.wadestevens;

import java.math.BigDecimal;
import java.math.MathContext;
import java.util.BitSet;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class EmployeeService {

    private Map<Integer, BigDecimal> performanceLevelMap = new HashMap<Integer, BigDecimal>();
    private Map<String, BigDecimal> stateSalaryTaxMap = new HashMap<String, BigDecimal>();
    private Map<String, BigDecimal> stateBonusTaxMap = new HashMap<String, BigDecimal>();


    public EmployeeService() {
        performanceLevelMap.put(1, new BigDecimal("0.5"));
        performanceLevelMap.put(2, new BigDecimal("0.4"));
        performanceLevelMap.put(3, new BigDecimal("0.3"));
        performanceLevelMap.put(4, new BigDecimal("0.1"));

        stateSalaryTaxMap.put("TX", new BigDecimal("0.0"));
        stateSalaryTaxMap.put("MO", new BigDecimal("0.1"));
        stateSalaryTaxMap.put("CA", new BigDecimal("0.12"));

        stateBonusTaxMap.put("TX", new BigDecimal("0.03"));
        stateBonusTaxMap.put("MO", new BigDecimal("0.15"));
        stateBonusTaxMap.put("CA", new BigDecimal("0.20"));

    }

    public void printSalaryDetails(Employee employee) {
        BigDecimal bonus = null;
        for (PerformanceLevel performanceLevel : employee.getPerformanceLevels()) {
            bonus = employee.getSalary().multiply(performanceLevelMap.get(performanceLevel.getLevel()));
            String state = employee.getAddresses().stream()
                    .filter(address -> address.getAddressType().equals("Residential"))
                    .map(address -> address.getState())
                    .findFirst().orElse(null);

            BigDecimal taxOnSalary = employee.getSalary().multiply(stateSalaryTaxMap.get(state)).round(new MathContext(2));
            BigDecimal taxOnBonus = bonus.multiply(stateBonusTaxMap.get(state)).round(new MathContext(2));
            BigDecimal takeHomeSalary = employee.getSalary().add(bonus).subtract(taxOnBonus).subtract(taxOnSalary);

            System.out.println(" Employee : " + employee.getName() + " had tax on Salary  :" + taxOnSalary.toPlainString() + " $ , tax on Bonus: " + taxOnBonus.toPlainString() + "$  and his total take home"
                    + " was  " + takeHomeSalary + " in year  " + performanceLevel.getYear());
        }

    }

    public void printDepartmentExpense(List<Employee> employees) {
        BigDecimal expenseforIT = BigDecimal.ZERO;
        BigDecimal expenseforSales = BigDecimal.ZERO;
        for (Employee employee : employees) {
            BigDecimal bonus = null;
            for (PerformanceLevel performanceLevel : employee.getPerformanceLevels()) {
                bonus = employee.getSalary().multiply(performanceLevelMap.get(performanceLevel.getLevel()));
                System.out.println("Employee:" + employee.getName() + ", Department:" + employee.getDepartment() + ", Year:" + performanceLevel.getYear() + ", Salary:" + employee.getSalary() + ", Bonus:" + bonus);

                if (employee.getDepartment().equals("IT"))
                    expenseforIT = expenseforIT.add(employee.getSalary()).add(bonus);
                if (employee.getDepartment().equals("SALES"))
                    expenseforSales = expenseforSales.add(employee.getSalary()).add(bonus);
            }

        }
        System.out.println("IT Expense: " + expenseforIT.toPlainString() + " ,Sales Expense: " + expenseforSales.toPlainString());
    }



}