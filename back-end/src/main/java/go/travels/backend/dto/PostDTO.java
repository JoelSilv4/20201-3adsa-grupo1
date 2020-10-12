package go.travels.backend.dto;

import go.travels.backend.document.Trip;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class PostDTO {
    private String id;
    private String title;
    private String description;
    private Integer likes;
    private String date;

    private Optional<Trip> trip;

    public PostDTO(String id, String title, String descripton, Integer likes, Optional<Trip> trip, String date) {
        this.id = id;
        this.title = title;
        this.description = descripton;
        this.likes = likes;
        this.trip = trip;
        this.date = date;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getLikes() {
        return likes;
    }

    public void setLikes(Integer likes) {
        this.likes = likes;
    }

    public Optional<Trip>  getTrip() {
        return trip;
    }

    public void setTrip(Optional<Trip> trip) {
        this.trip = trip;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
