/*
*   fileQuery.files[0]   //file控件的files特性其实就是一个FileList类型的对象 ,上传一张图片
*   imgArr = imgSrc.split('.')    //split可以用字符或字符串分割
*   strSrc = imgArr[imgArr.length - 1].toLowerCase();  //imgArr[imgArr.length - 1] ---这就是要取得的图片名称    toLowerCase转换成大写
*   strSrc.localeCompare('jpg')   //localeCompare()是js对象，用本地特定的顺序来比较两个字符串。 jpg以本地特定的顺序与 strSrc 进行比较的字符串
*   var reader = new FileReader()  //新建一个FileReader类型的对象  
*   reader.onload = function(e) {}  //绑定读取操作完成的事件  
*   reader.readAsDataURL(file)   //按文本格式读取file控件中的1个文件  
*   setAttribute()  //HTML DOM setAttribute() 方法,添加指定的属性，并为其赋指定的值。如果这个指定的属性已存在，则仅设置/更改值。
*   e.target.result  
*      // target 事件属性可返回事件的目标节点（触发该事件的节点），如生成事件的元素、文档或窗口。语法：event.target    js
*      // event.result 属性包含由被指定事件触发的事件处理程序返回的最后一个值。语法：event.result  jq
*   change()  //当元素的值发生改变时，会发生 change 事件。该事件仅适用于文本域（text field），以及 textarea 和 select 元素。
*/
function getPath(obj, fileQuery, transImg) {
	var imgSrc = '',
		imgArr = [],
		strSrc = '';

	var file = fileQuery.files[0];
	var reader = new FileReader();
	reader.onload = function(e) {
		imgSrc = fileQuery.value;
		imgArr = imgSrc.split('.');
		strSrc = imgArr[imgArr.length - 1].toLowerCase();
		if(strSrc.localeCompare('jpg') === 0 || strSrc.localeCompare('jpeg') === 0 || strSrc.localeCompare('gif') === 0 || strSrc.localeCompare('png') === 0) {
			obj.setAttribute("src", e.target.result);
			$(".supp-tip").html("请提供2M以内的图片").hide();
		} else {
			$(".supp-tip").html("请上传.jpg，.png等正确格式的图片").show();
			throw new Error('File type Error! please image file upload..');
		}
	}
	reader.readAsDataURL(file);
}

function show() {
	//以下即为完整客户端路径
	var file_img = document.getElementById("img"),
		iptfileupload = document.getElementById('iptfileupload');
	getPath(file_img, iptfileupload, file_img);
}

function show2() {
	//以下即为完整客户端路径
	var file_img = document.getElementById("img2"),
		iptfileupload = document.getElementById('iptfileupload2');
	getPath(file_img, iptfileupload, file_img);
}