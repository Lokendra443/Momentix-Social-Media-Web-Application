package com.lenncoder.service;

import com.lenncoder.entity.Comment;

public interface CommentService {
	
	public Comment createComment(Comment comment, Integer postId, Integer userId) throws Exception;

	public Comment findCommentByid(Integer commentId) throws Exception;
	
	public Comment likeComment(Integer commentId, Integer userId) throws Exception;
	
	
}
