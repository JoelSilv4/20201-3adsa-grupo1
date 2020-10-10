package go.travels.backend.dto;

import go.travels.backend.document.Trip;

import java.util.List;
import java.util.Optional;

public class PostDTO {
    private String id;
    private String title;
    private String descripton;
    private Integer likes;

    private List<String> listLikes;

    private Optional<Trip> trip;

    public PostDTO(String id, String title, String descripton, Integer likes, List<String> listLikes, Optional<Trip> trip) {
        this.id = id;
        this.title = title;
        this.descripton = descripton;
        this.likes = likes;
        this.listLikes = listLikes;
        this.trip = trip;
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

    public String getDescripton() {
        return descripton;
    }

    public void setDescripton(String descripton) {
        this.descripton = descripton;
    }

    public Integer getLikes() {
        return likes;
    }

    public void setLikes(Integer likes) {
        this.likes = likes;
    }

    public List<String> getListLikes() {
        return listLikes;
    }

    public void setListLikes(List<String> listLikes) {
        this.listLikes = listLikes;
    }

    public Optional<Trip>  getTrip() {
        return trip;
    }

    public void setTrip(Optional<Trip> trip) {
        this.trip = trip;
    }
}
