<html>
<head>
<!-- @author：zhangzhihong 2016年7月11日 -->
  <title>测试</title>
  <meta http-equiv="Content-Type" content="text/html; charset=GBK" />
  <script type="text/javascript">
    function ceshi(){//zzh
     var w = 50;
     var h = 50;
     eval(Operation(w,h));//zzh 接收回传的代码字符串为js代码，重新给变量赋值
     exe(w,h);//用新赋值后的变量
    }
    //运算并返回值 zzh
    function Operation(w,h){
     w = w-10;
     h = h-10;
     alert(w+"--"+h);
     var res = "w="+w+";h="+h+";";//拼接回传变量 zzh
     return res;
    }
    //运行 zzh
    function exe(w,h){
     alert("w="+w);
     alert("h="+h);
    }
    //-->
  </script>
</head>
<body>
<form>
<center>
<input type="button" onclick="ceshi()" value="测试">
</center>
</form>
</body>
</html>



