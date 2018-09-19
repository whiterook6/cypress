(function(){
	let drag_target = {
		enabled: false,
		handle: document.getElementById('pull-bar'),
		card: document.getElementById('card'),

		offset_y: 0,
	};

	let bounds = drag_target.card.getBoundingClientRect();
	drag_target.maximum_bounds = {
		top: -bounds.top,
		right: bounds.right - document.body.clientWidth,
		bottom: bounds.bottom - document.body.clientHeight,
		left: -bounds.left
	};

	function lerp(min, max, mix){
		return min + (max - min) * mix;
	}

	function delerp(min, max, actual){
		return (actual - min) / (max - min);
	}

	drag_target.handle.addEventListener('mousedown', function(event){
		drag_target.enabled = true;
		drag_target.offset_y = event.clientY - parseInt(window.getComputedStyle(drag_target.card).top);
	});

	document.addEventListener('mouseup', function(event){
		drag_target.enabled = false;
	});

	document.addEventListener('mousemove', function(event){
		if (!drag_target.enabled){
			return;
		}

		let offset_y = event.clientY - drag_target.offset_y,
			mix = delerp(0, drag_target.maximum_bounds.top, offset_y),
		    clamped_mix = Math.min(1, Math.max(0, mix));

		drag_target.card.style.top = lerp(0, drag_target.maximum_bounds.top, clamped_mix) + 'px';
		drag_target.card.style.right = lerp(0, drag_target.maximum_bounds.right, clamped_mix) + 'px';
		drag_target.card.style.bottom = lerp(0, drag_target.maximum_bounds.bottom, clamped_mix) + 'px';
		drag_target.card.style.left = lerp(0, drag_target.maximum_bounds.left, clamped_mix) + 'px';
	});
})();
