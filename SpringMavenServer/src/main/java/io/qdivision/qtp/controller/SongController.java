package io.qdivision.qtp.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.qdivision.qtp.model.Song;

@RestController
public class SongController {

    @RequestMapping("/songs")
    public List<Song> getSongs() {
        var song = new Song();
        song.setArtist("Rush");
        song.setName("Spirit of Radio");
        List<Song> songs = new ArrayList<>();
        songs.add(song);
        return songs;
    }

}


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

