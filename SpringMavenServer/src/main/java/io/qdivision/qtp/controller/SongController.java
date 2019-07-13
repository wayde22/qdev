package io.qdivision.qtp.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import io.qdivision.qtp.SongNotFoundException;
import io.qdivision.qtp.SongRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import io.qdivision.qtp.model.Song;

@Slf4j
@RestController
public class SongController {

    private SongRepository repository = new SongRepository();

    @GetMapping("/songs")
    public List<Song> getSongs() { // <--- took out the RequestParam()
        log.info("GetMapping info warning");
        return repository.getAllSongs();
    }

    @PostMapping("/songs")
    public Song newSong(@RequestBody Song newSong) {
        log.info("New song:{}, which is nice", newSong);
        return repository.save(newSong);
    }

    @GetMapping("/songs/{id}")
    public Song findSong(@PathVariable String id) {
        log.error("GetMapping error"); //<---
        return repository.findById(id);
    }


    @ResponseBody
    @ExceptionHandler(SongNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public String employeeNotFoundHandler(SongNotFoundException ex) {
        return "Song Not Found";
    }

    @ResponseBody
    @ExceptionHandler(IllegalArgumentException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public String employeeNotFoundHandler(IllegalArgumentException ex) {
        log.error("You can't do that", ex);
        return ex.getMessage();
    }

    @DeleteMapping("/songs/{id}")
    void deleteSong(@PathVariable String id) {
        log.error("DeleteMapping error");
        repository.deleteById(id);
    }

    @PutMapping("/songs/{id}")
    public Song updateSong(@RequestBody Song newSong, @PathVariable String id) {
        log.error("PutMapping error"); //<---
        return repository.findAndUpdate(id, newSong);

    }

}

// Scheduled
//      cron
//      fixed
//
// log all of the Rest Endpoints
// INFO io.qdiv
// WARN spring


//    @RequestMapping("/songs")
//    public List<Song> getSongs(@RequestParam String artist) {
//
//        List<Song> songs;
//
//        var song1 = new Song();
//        song1.setArtist("Rush");
//        song1.setName("Spirit of Radio");
//
//        var song2 = new Song();
//        song2.setArtist("Zach");
//        song2.setName("old school");
//
//        var song3 = new Song();
//        song3.setArtist("Chris Tomlin");
//        song3.setName("Indescribable");
//
//        songs = new ArrayList<>();
//        songs.add(song1);
//        songs.add(song2);
//        songs.add(song3);
//
//       return songs.stream()
//               .filter(song -> song.getArtist().equals(artist))
//               .collect(Collectors.toList());
//
//    }





// collect(Collectors.toList()) - converts stream back to list to print to screen.

//@RestController
//public class SongController {
//
//    @RequestMapping("/songs")
//    public List<Song> getSongs() {
//        var song = new Song();                  // creates a song object
//        song.setArtist("Rush");                 // sets the artist in the song object
//        song.setName("Spirit of Radio");        // sets the name in the song object
//        List<Song> songs = new ArrayList<>();   // creates an arraylist called songs from the Song class
//        songs.add(song);                        // adds the song objects variable to the arraylist
//        return songs;
//    }
//
//}


// http://localhost:8080/songs
// ?artist="OneRepucblic"

// @RequestParam

// Return a list of songs by an artist:

// [
//  {
//      "name" = "Counting Stars";
//      "artist" = "One Republic";
//  }
//  {
//      name = "Connection";
//      artist = "One Republic"
//  }
// ]
//
// Take the list stream and filter it.

