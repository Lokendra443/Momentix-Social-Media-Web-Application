package com.lenncoder.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="posts")
public class Post {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	private String caption;
	
	private String image;
	
	private String video;
	
	private LocalDateTime createdAt;
	
	@ManyToMany
	private List<User> liked = new ArrayList<>();
	
	@ManyToOne
	private User user;
	
	@OneToMany
	private List<Comment> comments = new ArrayList<>();
	
	
	
	public Post() {
		// TODO Auto-generated constructor stub
	}



	public Post(int id, String caption, String image, String video, LocalDateTime createdAt, List<User> liked,
			User user, List<Comment> comments) {
		super();
		this.id = id;
		this.caption = caption;
		this.image = image;
		this.video = video;
		this.createdAt = createdAt;
		this.liked = liked;
		this.user = user;
		this.comments = comments;
	}








	public int getId() {
		return id;
	}







	public void setId(int id) {
		this.id = id;
	}







	public String getCaption() {
		return caption;
	}







	public void setCaption(String caption) {
		this.caption = caption;
	}







	public String getImage() {
		return image;
	}







	public void setImage(String image) {
		this.image = image;
	}







	public String getVideo() {
		return video;
	}







	public void setVideo(String video) {
		this.video = video;
	}







	public LocalDateTime getCreatedAt() {
		return createdAt;
	}







	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}







	public List<User> getLiked() {
		return liked;
	}







	public void setLiked(List<User> liked) {
		this.liked = liked;
	}







	public User getUser() {
		return user;
	}







	public void setUser(User user) {
		this.user = user;
	}



	public List<Comment> getComments() {
		return comments;
	}



	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}





	
	
	
	

}
