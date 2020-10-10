package go.travels.backend.services;

import go.travels.backend.document.Post;
import go.travels.backend.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PostService {

    @Autowired
    PostRepository postRepository;

    public Post persist(Post post) { return  postRepository.save(post); }

    public Page<Post> findAll(PageRequest pageRequest) { return postRepository.findAll(pageRequest); }

    public Optional<Post> findById(String id) { return postRepository.findById(id);}

    public Boolean exist(String id) { return postRepository.existsById(id);}
}
