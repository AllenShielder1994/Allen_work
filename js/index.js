function deviceType() {
	var deviceInfo = navigator.userAgent; //get userAgent info
	var device = null;
	// convert userAgent info to array type
	deviceInfo = deviceInfo.substring(deviceInfo.indexOf("(") + 1, deviceInfo.indexOf(")")).split(';')

	// check the device type
	if (screen.width * screen.height < 768 * 1024) {
		device = 'Phone';
	}
	else if ((screen.width * screen.height >= 768 * 1024 && deviceInfo[0] == 'Linux') || deviceInfo.indexOf("iPad") != -1) {
		device = 'Tablet';
	}
	else {
		device = 'PC';
	}

	console.log('Device Info: ' + deviceInfo);
	console.log('Device Screen Size: ' + screen.width + '*' + screen.height);
	console.log('Device Type: ' + device);

	return device;
}

// Correct the error of design parameters and actual parameters
function argCrrct(scrnX, name, argX, argY, argW, argH, fntSz, brdRd) {
	var crrctValPC = screen.width / scrnX;
	var crrctX = crrctValPC * argX;
	var crrctY = crrctValPC * argY;
	var crrctW = crrctValPC * argW;
	var crrctH = crrctValPC * argH;
	var crrctFntSz = crrctValPC * fntSz;
	var crrctBrdRd = crrctValPC * brdRd;
	var decoration = {
		"left": crrctX,
		"top": crrctY,
		"width": crrctW,
		"height": crrctH,
		"font-size": crrctFntSz,
		"border-radius": crrctBrdRd,
	};

	$(name).css(decoration);

}

// Widget after whole page abstraction
function pageType(pageMode) {

	// 1st part of the page
	$('#mainBanner')
		.css('width', function () { return screen.width+pageMode.crrctNum; })
		.css('height', function () { return screen.width / pageMode.scrnWdth * pageMode.mainBanner[0]; })
		.css('object-fit', pageMode.mainBanner[1])


	argCrrct(pageMode.scrnWdth, ".Rectangle-2", pageMode.Rectangle_2[0],pageMode.Rectangle_2[1] , pageMode.scrnWdth+pageMode.crrctNum, pageMode.Rectangle_2[2]);
	$(".Rectangle-2").css("background-color", pageMode.Rectangle_2[3]);

	argCrrct(pageMode.scrnWdth, ".Need-a-dog-sitter", pageMode.Need_a_dog_sitter[0], pageMode.Need_a_dog_sitter[1],
		pageMode.Need_a_dog_sitter[2], pageMode.Need_a_dog_sitter[3],pageMode.Need_a_dog_sitter[4]);

	argCrrct(pageMode.scrnWdth, ".Find-a-trusted-sitte", pageMode.Find_a_trusted_sitte[0], pageMode.Find_a_trusted_sitte[1],
		pageMode.Find_a_trusted_sitte[2], pageMode.Find_a_trusted_sitte[3], pageMode.Find_a_trusted_sitte[4]);

	argCrrct(pageMode.scrnWdth, ".Rectangle", pageMode.Rectangle[0], pageMode.Rectangle[1], pageMode.Rectangle[2],
		pageMode.Rectangle[3], pageMode.Rectangle[4], pageMode.Rectangle[5]);

	argCrrct(pageMode.scrnWdth, ".Learn-More-Copy-3", pageMode.Learn_More_Copy_3[0], pageMode.Learn_More_Copy_3[1],
		pageMode.Learn_More_Copy_3[2], pageMode.Learn_More_Copy_3[3], pageMode.Learn_More_Copy_3[4]);

	argCrrct(pageMode.scrnWdth, ".Group-2", pageMode.Group_2[0], pageMode.Group_2[1], pageMode.scrnWdth+pageMode.crrctNum, pageMode.Group_2[2]);

	// 2nd part of the page

	argCrrct(pageMode.scrnWdth, ".Our-Services", pageMode.Our_Services[0], pageMode.Our_Services[1],
		pageMode.Our_Services[2], pageMode.Our_Services[3], pageMode.Our_Services[4]);

	argCrrct(pageMode.scrnWdth, ".Local-trusted-pet", pageMode.Local_trusted_pet[0], pageMode.Local_trusted_pet[1],
		pageMode.Local_trusted_pet[2], pageMode.Local_trusted_pet[3], pageMode.Local_trusted_pet[4]);

	// 3rd part of the page
	//block
	argCrrct(pageMode.scrnWdth, ".Mask", pageMode.Mask[0], pageMode.Mask[1], pageMode.Mask[2], pageMode.Mask[3], pageMode.Mask[4], pageMode.Mask[5]);
	$('#MaskBlock1').css(pageMode.MaskBlock1[0], function () { return screen.width / pageMode.scrnWdth * pageMode.MaskBlock1[1]; });
	$('#MaskBlock2').css(pageMode.MaskBlock2[0], function () { return screen.width / pageMode.scrnWdth * pageMode.MaskBlock2[1]; });
	$('#MaskBlock3').css(pageMode.MaskBlock3[0], function () { return screen.width / pageMode.scrnWdth * pageMode.MaskBlock3[1]; });

	// pic
	argCrrct(pageMode.scrnWdth, ".Unsplash", pageMode.Unsplash[0], pageMode.Unsplash[1], pageMode.Unsplash[2], pageMode.Unsplash[3]);
	$(".Unsplash")
		.css(pageMode.Unsplash[4], function () { return screen.width / pageMode.scrnWdth * 4; })
		.css(pageMode.Unsplash[5], function () { return screen.width / pageMode.scrnWdth * 4; });

	//orthers
	argCrrct(pageMode.scrnWdth, '.MaskSbTtl', pageMode.MaskSbTtl[0], pageMode.MaskSbTtl[1], pageMode.MaskSbTtl[2], pageMode.MaskSbTtl[3], pageMode.MaskSbTtl[4]);

	argCrrct(pageMode.scrnWdth, '.MaskTxt', pageMode.MaskTxt[0], pageMode.MaskTxt[1], pageMode.MaskTxt[2], pageMode.MaskTxt[3], pageMode.MaskTxt[4]);

	argCrrct(pageMode.scrnWdth, '.Learn-More', pageMode.Learn_More[0], pageMode.Learn_More[1], pageMode.Learn_More[2], pageMode.Learn_More[3], pageMode.Learn_More[4]);

	argCrrct(pageMode.scrnWdth, '.More-Sybm', pageMode.More_Sybm[0], pageMode.More_Sybm[1], pageMode.More_Sybm[2], pageMode.More_Sybm[3], pageMode.More_Sybm[4]);
}