package io.qdivision.qtp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication(scanBasePackages = {"io.qdivision"})
@EnableScheduling
public class SongServiceApplication{

    public static void main(String[] args) {
        SpringApplication.run(SongServiceApplication.class, args);
    }

}

