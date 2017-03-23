function ajax(opt){
		opt = opt || {};
		opt.method = opt.method.toUpperCase() || "GET";
		opt.url = opt.url || "";
		opt.async = opt.async || true;
		opt.data = opt.data || null;
		opt.success = opt.success || function(){};
		opt.error = opt.error || function(){};

		var ajax = null;
		if(XMLHttpRequest){
			ajax = new XMLHttpRequest();
		}else{
			ajax = new ActiveXObject('Microsoft.XMLHTTP');
		}

		if(opt.method == "GET"){
			ajax.open(opt.method,opt.url+"?"+encodeURI(opt.data),opt.async);
			ajax.send();
			
		}

		if(opt.method == "POST"){
			ajax.open(opt.method,opt.url,opt.async);
			xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
			ajax.send(opt.data);
		}
	
		ajax.onreadystatechange = function(){
			if(ajax.readyState == 4){
				if(ajax.status == 200){
					opt.success && opt.success(ajax.responseText);
				}else{
					opt.error && opt.error(ajax.status);
					// alert("出错了:"+ajax.status);
				}
			}
		}
	}
