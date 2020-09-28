package go.travels.backend.dto;


public class FilterDTO {
    private String localName;
    private String latitude;
    private String longitude;
    private String tripId;
    private String id;

    public FilterDTO(String localName, String latitude, String longitude, String tripId, String id) {
        this.localName = localName;
        this.latitude = latitude;
        this.longitude = longitude;
        this.tripId = tripId;
        this.id = id;
    }

    public String getLocalName() {
        return localName;
    }

    public void setLocalName(String localName) {
        this.localName = localName;
    }

    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    public String getTripId() {
        return tripId;
    }

    public void setTripId(String tripId) {
        this.tripId = tripId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
