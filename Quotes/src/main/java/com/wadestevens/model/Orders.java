package com.wadestevens.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Orders {

    private String customerName;
    private String originAddress;
    private String destination;
    private String type;
    private int weight;
}
