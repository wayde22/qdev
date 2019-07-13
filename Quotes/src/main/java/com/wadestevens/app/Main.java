package com.wadestevens.app;

import com.wadestevens.model.Address;
import com.wadestevens.model.Orders;
import com.wadestevens.services.AddressService;
import com.wadestevens.services.ContainerService;
import com.wadestevens.services.QuoteService;

import java.util.Arrays;
import java.util.List;

public class Main {

    public static void main(String[] args) {

        AddressService addressService = new AddressService();
        ContainerService containerService = new ContainerService();
        QuoteService quoteService = new QuoteService();

        List<Orders> order1 = Arrays.asList(new Orders("John", "east", "central", "domestic", 2000));
        List<Orders> order2 = Arrays.asList(new Orders("William", "west", "east", "domestic", 1000));
        List<Orders> order3 = Arrays.asList(new Orders("Mike", "mountain", "west", "domestic", 3000));

        List<Address> address1 = Arrays.asList(new Address("123 Main", "Jacksonville", "FL", "Lake", "23456"));
        List<Address> address2 = Arrays.asList(new Address("345 Front", "Chicago", "IL", "Cook", "66326"));
        List<Address> address3 = Arrays.asList(new Address("678 Second", "Oklahoma City", "OK", "Oky", "98493"));

    }


}


// Calculate the shipping cost per container by timezone.

// Make the model of Address and Orders.
    // Orders: customer name, from address, to address, type(Domestic, International), weight.
    // Address: street name, city, state, county, postal code.

// Create the Service files for Address, Containers and Quotes.
    // AddressService: determine zone.
    // ContainerService: determine the number of containers.
    // QuoteService: calculate domestic quote, calculate international quote.


//   weight  container
//  ------------------
// |        |         |
// |  1000  |   1     |
// |        |         |
//  ------------------
// |        |         |
// |  2000  |   2     |
// |        |         |
//  ------------------


//   ZONE      COST
//  ------------------
// |  E-P   | $3000   |
// |  E-M   | $2000   |
// |  E-C   | $1000   |
// |  C-P   | $2000   |
// |  C-M   | $1000   |
// |  C-E   | $1000   |
// |  M-P   | $1000   |
// |  M-C   | $1000   |
// |  M-E   | $2000   |
// |  P-M   | $1000   |
// |  P-C   | $2000   |
// |  P-E   | $3000   |
//  ------------------