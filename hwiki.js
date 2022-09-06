
          window.onload=function(){
            alert('긴장되는 순간')
          };

          var current = new Date();
          if(21 < current.getHours() <7){
            document.body.style.backgroundColor = "black";
            document.body.style.color ="white"}
          else{
            document.body.style.backgroundColor = "white";}
          
          let getDayOrNight
          if(21 < current.getHours() <7){
            getDayOrNight = "밤이 깊었습니다. 마피아는 고개를 들어 희생양을 지정해주세요."
          } else {
            getDayOrNight = "아침이 밝았습니다. 시민은 고개를 들어 마녀사냥을 시작해주세요."
          }
          document.write(getDayOrNight.fontcolor("red"));
