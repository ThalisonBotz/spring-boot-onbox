package com.onbox.userweb.util;

import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;



@Component //

public class DateUtil {
public String formarLocalDateTimeToDatabaseStyle(LocalDateTime localDateTime) {
return DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm: ss ").format(localDateTime);

}


}
