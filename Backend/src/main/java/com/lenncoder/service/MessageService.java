package com.lenncoder.service;

import java.util.List;

import com.lenncoder.entity.Message;
import com.lenncoder.entity.User;

public interface MessageService {
	
	public Message createMessage(User user, Integer chatId, Message req) throws Exception;
	
	public List<Message> findChatsMessages(Integer chatId) throws Exception;

}
