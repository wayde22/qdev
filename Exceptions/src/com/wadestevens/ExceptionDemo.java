package com.wadestevens;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class ExceptionDemo {

    public static void main(String[] args) {

        ExceptionDemo exceptionDemo = new ExceptionDemo();
        System.out.println(exceptionDemo.calculator(10, 15, "ADD"));
        System.out.println(exceptionDemo.calculator(10, 15, "SUBTRACT"));
        System.out.println(exceptionDemo.calculator(10, 15, "MULTIPLY"));

        try{
            exceptionDemo.readFile();
        }
        catch(FileNotFoundException fne) {
            System.out.println("File not found " + fne.getMessage() );
            fne.printStackTrace();
        }
        catch(IOException ioe) {
            System.out.println("IOException");
        }
        finally {}

    }


    private int calculator( int a, int b, String operation) {
            switch(operation) {
                case "ADD" :
                    return a + b;
                case "SUBTRACT":
                    return a - b;
                case "MULTIPLY" :
                    return a * b;
                case "DIVIDE":
                    return a / b;
                default:
                    throw new IllegalArgumentException("Supported operation:ADD<SUBTRACT, MULTIPLY, DIVIDE");
            }
        }


    private void readFile() {
            FileReader fr = new FileReader("/Users/txt"); //<----Some path to the .txt file
            int i;
            while((i = fr.read())!=-1)
            System.out.println((char)i);
            fr.close();
            }
}

// Look up Exceptions
// Look up .stream(), Maps, filter, lambdas, findFirst() List, Arrays.asList(), collections, toArray(), toString()
