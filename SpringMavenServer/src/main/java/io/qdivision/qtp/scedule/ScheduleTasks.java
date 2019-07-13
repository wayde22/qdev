package io.qdivision.qtp.scedule;

import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.Date;

@Component
@Slf4j
public class ScheduleTasks {

    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");

    @Scheduled( cron = "0/5 * * * * MON-FRI")
    public void tellTheTime( ) {
        log.info("The time is now {}", dateFormat.format(new Date()));
        log.debug("debugging");
        log.warn("This is a warning");
    }

}
