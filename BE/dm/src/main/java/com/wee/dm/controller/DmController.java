package com.wee.dm.controller;
import com.wee.dm.model.DmDTO;
import com.wee.dm.service.DmService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/dm")
@RequiredArgsConstructor
public class DmController {
	private final DmService dmService;

	@Operation(summary = "Get DM")
	@GetMapping("/message")
	public ResponseEntity<List<DmDTO>> getDm() {
		return ResponseEntity.ok(dmService.getDm());
	}

	@PostMapping("/send")
	public ResponseEntity<?> sendMessage(@RequestBody DmDTO message) {
		dmService.sendMessage(message);
		return ResponseEntity.ok().build();
	}

	@PutMapping("/read/{messageId}")
	public ResponseEntity<?> markAsRead(@PathVariable Long messageId) {
		dmService.markAsRead(messageId);
		return ResponseEntity.ok().build();
	}
}
