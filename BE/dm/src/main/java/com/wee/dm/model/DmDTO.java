package com.wee.dm.model;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class DmDTO {
	private int id;
	private String name;
	private String avatar;
	private String preview;
	private String time;
	private String messages;
}
