package com.lenncoder.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lenncoder.entity.Comment;

public interface CommentRepository extends JpaRepository<Comment, Integer> {

	
}
