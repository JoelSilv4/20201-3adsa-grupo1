package go.travels.backend.services;

import go.travels.backend.document.Like;
import go.travels.backend.repositories.LikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LikeService {

    @Autowired
    LikeRepository likeRepository;

    public Like findPost(String userId, String postId) { return likeRepository.findByUserIdAndPostId(userId, postId);}

    public Like persist(Like like) {return likeRepository.save(like);}

    public void delete(String likeId) { likeRepository.deleteById(likeId);}
}
