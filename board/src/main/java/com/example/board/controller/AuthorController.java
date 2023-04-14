package com.example.board.controller;

import com.example.board.domain.Author;
import com.example.board.domain.Role;
import com.example.board.service.AuthorService;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.time.LocalDateTime;
import java.util.List;

@RestController
public class AuthorController {
    private final AuthorService authorService;

    public AuthorController(AuthorService authorService) {
        this.authorService = authorService;
    }

    @GetMapping("/authors/new")
    public String createForm(){
        return "authors/createAuthorForm";
    }
    @PostMapping("/authors/new")
    public void create(@RequestBody AuthorPostForm authorPostForm){
        Author author = Author.builder()
                .password(authorPostForm.getPassword())
                .name(authorPostForm.getName())
                .email(authorPostForm.getEmail())
                .build();
        authorService.create(author);
    }
    @GetMapping("/authors")
    public List<Author> authorList(){
        return authorService.findAll();
    }

    @GetMapping("authors/findById/{id}")
    public Author findById(@PathVariable("id") Long id) throws Exception {
        return authorService.findById(id).orElseThrow(Exception::new);
    }

}
