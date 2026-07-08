package com.cognizant.singleton;

public class Logger {

    // Step 1: Create a single instance
    private static Logger instance = new Logger();

    // Step 2: Private constructor
    private Logger() {
        System.out.println("Logger Instance Created");
    }

    // Step 3: Public method to access the instance
    public static Logger getInstance() {
        return instance;
    }

    // Step 4: Logging method
    public void log(String message) {
        System.out.println("[LOG] " + message);
    }
}