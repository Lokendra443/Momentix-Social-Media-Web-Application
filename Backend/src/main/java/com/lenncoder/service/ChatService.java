package com.lenncoder.service;

import java.util.List;

import com.lenncoder.entity.Chat;
import com.lenncoder.entity.User;

public interface ChatService {
	
	public Chat createChat(User reqUser, User user2);
	
	public Chat findChatById(Integer chatId) throws Exception;
	
	public List<Chat> findUsersChat(Integer userId);
	
	
	

}
