package com.lenncoder.service;

import java.util.List;

import com.lenncoder.entity.Story;
import com.lenncoder.entity.User;

public interface StoryService {
	
	public Story createStory (Story story, User user);
	
	public List<Story> findStoryByUserId(Integer userId) throws Exception;

}
