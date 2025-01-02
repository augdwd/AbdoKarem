let title = document.querySelector('.title');
let turn='x';
let squares =[]
function end(num1,num2,num3)
{
    title.innerHTML = `${squares[num1]} winnwer`;
    document.getElementById('item' +num1).style.background = 'rgb(0, 255, 0)';
    document.getElementById('item' +num2).style.background = 'rgb(0, 255, 0)';
    document.getElementById('item' +num3).style.background = 'rgb(0, 255, 0)';
 
    setInterval(function (){title.innerHTML+="."},1000)
    setTimeout(function(){location.reload()},4000)
}

function winner()
{
for(let i = 1; i<10; i++)
{
     squares[i] = document.getElementById('item' + i).innerHTML;
}

if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] !='')//الصف الاول
{
   end(1,2,3)
}

if(squares[4] == squares[5] && squares[5] == squares[6] && squares[4] !='')//الصف الثاني
{
   end(4,5,6)
}

if(squares[7] == squares[8] && squares[8] == squares[9] && squares[7] !='')//3ص
{
   end(7,8,9)
}

 else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[5] !='')//4ع
{
   end(3,5,7)
}

else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[5] !='')//5ع
{
end(2,5,8)
}

else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[6] !='')//6ع
{
   end(3,6,9)
}
else if(squares[1] == squares[5] && squares[5] == squares[9] &&  squares[5] !=''){
    end(1,5,9)
}
else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[4] !='')
{
end(1,4,7)
}
}





function game(id)

{
    let element =document.getElementById(id);
    if(turn === 'x' && element.innerHTML == '')
    {
      element.innerHTML ='x';  
      turn='o';
      title.innerHTML='O';
    }


    else if(turn==='o' && element.innerHTML == ''){
           element.innerHTML ='o';
turn ='x'
title.innerHTML='x'; 
    }

    winner();
}
