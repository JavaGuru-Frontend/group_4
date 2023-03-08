function cal()
		{
			var number1,number2,res,opr;
			number1=parseInt(document.getElementById("t1").value);
			number2=parseInt(document.getElementById("t2").value);
			opr=document.getElementById("s1").value;
			switch(opr)
			{
				case '+':
				res=number1 + number2;
				document.getElementById("t3").value=res;
				break;
				case '-':
				res=number1 - number2;
				document.getElementById("t3").value=res;
				break;
				case '*':
				res=number1*number2;
				document.getElementById("t3").value=res;
				break;
				case '/':
				res=number1 / number2;
				document.getElementById("t3").value=res;
				break;
				default:
				document.getElementById("t3").value="Invalid Operator";
			}
		}

   

    

