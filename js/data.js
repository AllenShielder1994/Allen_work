// the screen width of 4 mode (desktop, tablet_W, tablet_T, mobile)
var pcX = 720;
var tabletX_W = 512;
var tabletX_T = 384;
var phoneX = 160;

var mobileMode = {
   // 1st part args
   'scrnWdth': phoneX,
   'crrctNum': 0,
   'mainBanner': [195, 'cover'],
   'Rectangle_2': [0, 0, 195, 'rgba(0,0,0,0.35)'],
   'Need_a_dog_sitter': [10, 34, 135, 19, 15],
   'Find_a_trusted_sitte': [10, 58, 140, 52, 10],
   'Rectangle': [10, 118.5, 83.5, 24, 0, 2],
   'Learn_More_Copy_3': [27, 125, 50, 11.5, 9],
   'Group_2': [0, 167, 28.3],
   // 2nd part args
   'Our_Services': [30+6, 206.5, 140, 19, 15],
   'Local_trusted_pet': [17+3, 235.5, 126.5, 84, 10],
   // 3rd part args
   //block
   'Mask': [10, 0, 140, 239, 0, 4],
   'MaskBlock1': ['top', 344],
   'MaskBlock2': ['top', 593],
   'MaskBlock3': ['top', 842],
   //pic
   'Unsplash': [0, 0, 140, 98, 'border-top-left-radius', 'border-top-right-radius'],
   //others
   'MaskSbTtl': [10, 10.5, 110, 15, 12],
   'MaskTxt': [10, 15, 120, 84, 9],
   'Learn_More': [10, 22, 50.5, 11.5, 9],
   'More_Sybm': [63, 10, 5.5, 11.5, 9],
}

var tabletTMode = {
   // 1st part args
   'scrnWdth': tabletX_T,
   'crrctNum': 0,
   'mainBanner': [250.5, 'cover'],
   'Rectangle_2': [0, 0, 250.5, 'rgba(1,1,1,0)'],
   'Need_a_dog_sitter': [40, 62, 201, 28, 22.5],
   'Find_a_trusted_sitte': [41.5, 95, 207, 51, 12],
   'Rectangle': [41.5, 158.5, 83.5, 24, 0, 2],
   'Learn_More_Copy_3': [58.5, 165, 50, 11.5, 9],
   'Group_2': [0, 225.9, 28.3],
   // 2nd part args
   'Our_Services': [123.5, 275.5, 137.5, 28, 22.5],
   'Local_trusted_pet': [20, 310.5, 344.5, 51, 12],
   // 3rd part args
   //block
   'Mask': [10.5, 0, 363.5, 134, 0, 4],
   'MaskBlock1': ['top', 391.5],
   'MaskBlock2': ['top', 535.5],
   'MaskBlock3': ['top', 679.5],
   //pic
   'Unsplash': [0, 0, 176, 134, 'border-top-left-radius', 'border-bottom-left-radius'],
   //others
   'MaskSbTtl': [11, -110, 136, 17.5, 14],
   'MaskTxt': [188, -100, 172, 65, 9],
   'Learn_More': [188, -95, 50, 11.5, 9],
   'More_Sybm': [242, -107, 5.5, 11.5, 9],
}

var tabletWMode = {
   // 1st part args
   'scrnWdth': tabletX_W,
   'crrctNum': 0,
   'mainBanner': [300, 'cover'],
   'Rectangle_2': [0, 0, 300, 'rgba(1,1,1,0)'],
   'Need_a_dog_sitter': [50.5, 92.5, 201, 28, 22.5],
   'Find_a_trusted_sitte': [52.5, 125.5, 292, 34, 12],
   'Rectangle': [52.5, 172, 83.5, 24, 0, 2],
   'Learn_More_Copy_3': [69.5, 178, 50, 11.5, 9],
   'Group_2': [0, 280.9, 28.3],
   // 2nd part args
   'Our_Services': [187.5, 325, 137.5, 28, 22.5],
   'Local_trusted_pet': [84, 360, 344.5, 51, 12],
   // 3rd part args
   //block
   'Mask': [52.5, 0, 407, 150.5, 0, 4],
   'MaskBlock1': ['top', 446],
   'MaskBlock2': ['top', 606.5],
   'MaskBlock3': ['top', 767],
   //pic
   'Unsplash': [0, 0, 197, 150.5, 'border-top-left-radius', 'border-bottom-left-radius'],
   //others
   'MaskSbTtl': [14.5, -125, 152.5, 17.5, 14],
   'MaskTxt': [212, -110, 172, 65, 9],
   'Learn_More': [212, -100, 50, 11.5, 9],
   'More_Sybm': [265, -112, 5.5, 11.5, 9],
}

var desktopMode = {
   // 1st part args
   'scrnWdth': pcX,
   'crrctNum': 0,
   'mainBanner': [300, 'cover'],
   'Rectangle_2': [0, 0, 300, 'rgba(1,1,1,0)'],
   'Need_a_dog_sitter': [109.5, 88.5, 201, 28, 22.5],
   'Find_a_trusted_sitte': [111.5, 121.5, 292, 34, 12],
   'Rectangle': [111.5, 168.5, 83.5, 24, 0, 2],
   'Learn_More_Copy_3': [128.5, 175, 50, 11.5, 9],
   'Group_2': [0, 270.5, 34],
   // 2nd part args
   'Our_Services': [291.5, 327.5, 137.5, 28, 22.5],
   'Local_trusted_pet': [188, 360.5, 344.5, 51, 12],
   // 3rd part args
   //block
   'Mask': [0, 446.5, 190, 268, 0, 4],
   'MaskBlock1': ['left', 60],
   'MaskBlock2': ['left', 265],
   'MaskBlock3': ['left', 470],
   //pic
   'Unsplash': [0, 0, 190, 133, 'border-top-left-radius', 'border-top-right-radius'],
   //others
   'MaskSbTtl': [12.5, 12.5, 86, 17.5, 14],
   'MaskTxt': [12.5, 15, 165, 65, 9],
   'Learn_More': [12.5, 25, 50, 11.5, 9],
   'More_Sybm': [67, 13, 5.5, 11.5, 9],
}


