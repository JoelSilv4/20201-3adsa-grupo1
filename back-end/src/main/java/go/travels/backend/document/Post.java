package go.travels.backend.document;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Objects;
import java.util.Optional;

@Document
public class Post {
    @Id
    private String id;
    private String title;
    private String description;
    private Integer likes = 0;
    private String date;
    private String userId;

    private Optional<Trip> trip;

    public Post(String title, String description,  String userId, Optional<Trip> trip) {
        this.title = title;
        this.description = description;
        this.userId = userId;
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

    public Optional<Trip> getTrip() {
        return trip;
    }

    public void setTrip(Optional<Trip> trip) {
        this.trip = trip;
    }

    public String getDate() {
        return date;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
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
                ", descripton='" + description + '\'' +
                ", likes=" + likes +
                ", date='" + date + '\'' +
                ", trip=" + trip +
                '}';
    }
}
