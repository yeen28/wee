package com.wee.dm.controller;
import com.wee.dm.model.DmDTO;
import com.wee.dm.service.DmService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class DmController {
	private final DmService dmService;

	@Operation(summary = "Get DM")
	@GetMapping("/dm/message")
	public ResponseEntity<List<DmDTO>> getDm() {
		return ResponseEntity.ok(dmService.getDm());
	}

}
