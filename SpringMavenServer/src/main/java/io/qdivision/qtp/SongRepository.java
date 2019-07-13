package io.qdivision.qtp;

import io.qdivision.qtp.model.Song;

import java.util.*;

public class SongRepository {

    Map<String, Song> songMap = new HashMap<>();

    public Song save(Song newSong) {

        var id = UUID.randomUUID().toString();
        validate(newSong);
        newSong.setId(id);
        songMap.put(id, newSong);
        return newSong;
    }

    public void validate(Song newSong) {
        if(newSong.getArtist() == null || newSong.getName() == null) {
            throw new IllegalArgumentException("artist and name cannot be null");
        }
    }

    public Song findById(String id) {
        var song = songMap.get(id);
        if (song == null) {
            throw new SongNotFoundException();
        } else {
            return song;
        }
    }

    public List<Song> getAllSongs() {
        return new ArrayList<Song>(songMap.values());
    }

    public void deleteById(String id) {
        var song = songMap.remove(id);
        if (song == null) {
            throw new SongNotFoundException();
        }
    }

    public Song findAndUpdate(String id, Song updateSong) {
        validate(updateSong);
        updateSong.setId(id);
        songMap.put(id, updateSong);
        return updateSong;
    }

}


// Assignment:
// -Return 400 & 404 using Java Exceptions
// -PUT /songs/{id}
// -on POST success - Return 201



//public class SongRepository {
//
//    Map<String, Song> songMap = new HashMap<>();
//
//    public Song save(Song newSong) {
//
//        var id = UUID.randomUUID().toString();
//        newSong.setId(id);
//        songMap.put(id, newSong);
//        return newSong;
//    }
//
//    public Song findById(String id) {
//        return songMap.get(id);
//    }
//}
