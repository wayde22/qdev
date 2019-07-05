import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Employee {
    private String name;
    private int age;
    private BigDecimal salary;
    private List<Performance.PerformanceLevel> performanceLevels;

    public Employee(String name, int age, BigDecimal salary, List<Performance.PerformanceLevel> performanceLevels) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.performanceLevels = performanceLevels;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public BigDecimal getSalary() {
        return salary;
    }

    public void setSalary(BigDecimal salary) {
        this.salary = salary;
    }

    public List<Performance.PerformanceLevel> getPerformanceLevels() {
        return performanceLevels;
    }

    public void setPerformanceLevels(List<Performance.PerformanceLevel> performanceLevels) {
        this.performanceLevels = performanceLevels;
    }
}

