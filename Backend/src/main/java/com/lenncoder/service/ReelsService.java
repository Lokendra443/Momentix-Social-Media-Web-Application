package com.lenncoder.service;

import java.util.List;

import com.lenncoder.entity.Reels;
import com.lenncoder.entity.User;

public interface ReelsService {
	
	public Reels createReel(Reels reel, User user);
	
	public List<Reels> findAllReels();
	
	public List<Reels> findUsersReel(Integer userId) throws Exception;

}
