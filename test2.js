<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>简单计算器</title>
	</head>
	<body>
		<p align="center">简单计算器</p>
		<div align="center">
		<table border="1" style="position: center;">
			
			<tr>
				<td>第一个数：</td><td><input type="text" id="first"></td>
			</tr>
			<tr><td>第二个数：</td><td><input type="text" id="twice"></td>
			</tr>
			<tr>
				<td colspan="2">
					  
                 <button style="width:inherit" onclick="add()">+</button>
                   
                 <button style="width:inherit" onclick="subtract()">-</button>
                    
                 <button style="width:inherit" onclick="ride()">*</button>
                     
                 <button style="width:inherit" onclick="devide()">/</button>
				</td>
			</tr>
			<tr>
			<td colspan="2" rowspan="2">
				<p id="result"></p>
			</td>
			
			</tr>
		</table></div>
		<script type="text/javascript">
			//加法
			function add()
			{
				var a=getFirstNumber();
				var b=getTwiceNumber();
				var re=Number( a) +Number( b);
				sendResult(re);
				
			}
			//减法
			function subtract(){
				var a=getFirstNumber();
				var b=getTwiceNumber();
				var re=a-b;
				sendResult(re);
				
			}
			//乘法
			function ride(){
				var a=getFirstNumber();
				var b=getTwiceNumber();
				var re=a*b;
				sendResult(re);
			}
			//除法
			function devide(){
				var a=getFirstNumber();
				var b=getTwiceNumber();
				var re=a/b;
				sendResult(re);
			}
			
			function sendResult(result_1){
				var num=document.getElementById("result");
				num.innerHTML=result_1;
			}
			
			function getFirstNumber(){
				var firstNumber=document.getElementById("first").value;
				return firstNumber;
			}
		
			function getTwiceNumber(){
				var twiceNumber=document.getElementById("twice").value;
				return twiceNumber;
			}
			
			
			</script>
		
		
	</body>
</html>
