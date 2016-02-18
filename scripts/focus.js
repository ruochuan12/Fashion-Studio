$(document).ready(function(e) {
	//定义焦点图的资源
	var picArray=[
			'images/focus1.png','images/focus2.png','images/focus3.png',
			'images/4four.jpg','images/5five.jpg','images/6six.jpg'
	];
	var titleArray=['第一个焦点图','第二个焦点图','第三个焦点图','第四个焦点图','第五个焦点图','最后一个'];
	var linkArray=['#','#','#','#','#','#'];
	var para={
			focusAreaBox:"focusBox",//焦点图大容器ID，默认为focusAreaBox
			focusNavBox:"page",//焦点图数字导航容器ID，默认为focusNavBox
			focusPicBox:"img",//焦点图图片容器ID，默认为focusPicBox
			focusTitleBox:"tit",//焦点图标题容器ID，默认为focusTitleBox
			focusPics:picArray,//焦点图图片数组
			focusTitle:titleArray,//焦点图标题数组
			focusLinks:linkArray,//焦点图链接数组
			focusNums:3,//需要显示的焦点图个数，默认5个
			focusSpeed:3000,//焦点图自动切换的时间（单位毫秒），默认3秒
			focusWidth:"990px",//焦点图宽度，默认300px
			focusHeight:"360px"//焦点图高度，默认250px
	};
	var focusObj=new Focus(para);
	focusObj.run();

});