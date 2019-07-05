public class Address {

    private String streetName1;
    private String streetName2;
    private String city;
    private String state;
    private String zip;
    private String residence;

    public Address(String streetName1, String streetName2, String city, String state, String zip, String residence) {
        this.streetName1 = streetName1;
        this.streetName2 = streetName2;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.residence = residence;
    }

    public String getStreetName1() {
        return streetName1;
    }

    public void setStreetName1(String streetName1) {
        this.streetName1 = streetName1;
    }

    public String getStreetName2() {
        return streetName2;
    }

    public void setStreetName2(String streetName2) {
        this.streetName2 = streetName2;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public String getResidence() {
        return residence;
    }

    public void setResidence(String residence) {
        this.residence = residence;
    }
}
