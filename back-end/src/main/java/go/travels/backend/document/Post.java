package go.travels.backend.document;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Document
public class Post {
    @Id
    private String id;
    private String title;
    private String descripton;
    private Integer likes;
    private String date;

    private List<String> listLikes = new ArrayList<>();

    private Optional<Trip> trip;

    public Post(String title, String descripton, Optional<Trip> trip) {
        this.title = title;
        this.descripton = descripton;
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

    public Optional<Trip> getTrip() {
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Post post = (Post) o;
        return Objects.equals(id, post.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Post{" +
                "id='" + id + '\'' +
                ", title='" + title + '\'' +
                ", descripton='" + descripton + '\'' +
                ", likes=" + likes +
                ", date='" + date + '\'' +
                ", listLikes=" + listLikes +
                ", trip=" + trip +
                '}';
    }
}
