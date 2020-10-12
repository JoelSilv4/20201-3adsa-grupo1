package go.travels.backend.repositories;

import go.travels.backend.document.Like;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Repository
public interface LikeRepository extends MongoRepository<Like, String> {
    Like findByUserIdAndPostId(String userId, String postId);
}
