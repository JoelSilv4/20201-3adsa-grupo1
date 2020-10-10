package go.travels.backend.services;

import go.travels.backend.document.Post;
import go.travels.backend.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostService {

    @Autowired
    PostRepository postRepository;

    public Post persist(Post post) { return  postRepository.save(post); }
}
