	window.onload = function() {
	  const close = document.querySelector("span.close");
	  close.addEventListener('click', () => {
	    const alert = document.querySelector(".alert");
	    alert.style.display = 'none';
	  });
	  
	  const toggle = document.querySelector(".toggle");
	  const toggleOn = document.querySelector(".toggleOn");
	  const toggleOff = document.querySelector(".toggleOff");
	  const toggleProfile = document.querySelector(".toggleProfile");
	  const toggleProfOn = document.querySelector(".toggleProfOn");
	  const toggleProfOff = document.querySelector(".toggleProfOff");
	  const alertBell = document.querySelector(".bell");
	  const divs = document.getElementsByTagName("div");
	  const messageUser = document.querySelector(".messageUser");
	  const userSearch = document.querySelector("#userSearch");
	  const userMessage = document.querySelector("#userMessage");
	  const mainSearch = document.querySelector("#mainSearch");
	  const trafficOption = document.querySelector("#trafficOption");
	  const trafficHour = document.querySelector("#trafficHour");
	  const trafficDay = document.querySelector("#trafficDay");
	  const trafficWeek = document.querySelector("#trafficWeek");
	  const trafficMonth = document.querySelector("#trafficMonth");
	  const lineChart = document.querySelector("#lineChart");
	  const sendMessage = document.querySelector("#messageForm");
      const submitMessage = document.querySelector("#submitMessage");
	  const save = document.querySelector("#save"); 
	  const timeZone = document.querySelector("#timeZone");
	  var emailCheck = "yes";
	  var profileCheck = "yes";
	  
	  
	  toggle.addEventListener('click', () => {
	    /*If statement to check to see what checked state input is in */
	    /*display the correct ON or OFF position */
	    if (toggle.checked) {
	      toggleOn.style.color = "white";
	      toggleOff.style.color = "transparent";
		  emailCheck = "yes";
	    } else {
	      toggleOn.style.color = "transparent";
	      toggleOff.style.color = "#4c516d";
		  emailCheck = "no";
	    }
	  });
	  
	  toggleProfile.addEventListener('click', () => {
	    /*If statement to check to see what checked state input is in */
	    /*display the correct ON or OFF position */
	    if (toggleProfile.checked) {
	      toggleProfOn.style.color = "white";
	      toggleProfOff.style.color = "transparent";
		  profileCheck = "yes";		  
	    } else {
	      toggleProfOn.style.color = "transparent";
	      toggleProfOff.style.color = "#4c516d";
		  profileCheck = "no";
	    }
	  });
	  
	  alertBell.addEventListener('click', () => {
	    alert("Eating too much pineapple is bad for you");
	    if (confirm("Do not hit Ok. IT IS A TRAP!!") == true) {
	      for (var i = 0; i < divs.length; i++) {
	        divs[i].style.backgroundColor = "#FF69B4";
	      }
	    } else {
	      txt = "You are safe, for now...";
	    }
	  });

	  function supportsLocalStorage() {
	    try {
	      return 'localStorage' in window && window['localStorage'] !== null;
	    } catch (e) {
	      return false;
	    }
	  }
	  /* Adding local storage */
	  let searchString = [];
	  mainSearch.addEventListener('keypress', () => {
	    if (supportsLocalStorage) {
	      let lastString = searchString.length + 1;	     
	      searchString = mainSearch.value;	     
	      localStorage.setItem('lastString', 'searchString');
	    } else {
	      return false;
	    }		
	  });
	  
	  save.addEventListener('click', () => {
	      event.preventDefault();
	      if (supportsLocalStorage) {
	        let getEmailId = 'Email Notification' + searchString.length + 1;
			let getProfileId = 'Public Profile' + searchString.length + 1;
			let timeZoneId = 'Timezone' + searchString.length + 1;
				        
	        localStorage.setItem('getEmailId', 'emailCheck');
			localStorage.setItem('getProfileId', 'profileCheck');
			localStorage.setItem('timeZoneId', 'timeZone.value');
			
	      } else {
	        return false;
	      }		
	  });
	  
	  
	  
	  
	  trafficOption.addEventListener('click', (e) => {
	    if (event.target.id !== "trafficOption") {
	      trafficOption.style.backgroundColor = 'initial';
	      trafficHour.style.backgroundColor = 'initial';
	      trafficDay.style.backgroundColor = 'initial';
	      trafficWeek.style.backgroundColor = 'initial';
	      trafficMonth.style.backgroundColor = 'initial';
	      e.target.style.backgroundColor = '#82C994';
	    }

	    function changeChartData(labelChange, dataChange) {
	      myChart.data.labels = labelChange;
	      myChart.data.datasets = dataChange;
	      myChart.update();
	    };
	    if (event.target.id === "trafficHour") {
	      changeChartData(labelHour, dataHour);
	    }
	    if (event.target.id === "trafficDay") {
	      changeChartData(labelDay, dataDay);
	    }
	    if (event.target.id === "trafficWeek") {
	      changeChartData(labelWeek, dataWeek);
	    }
	    if (event.target.id === "trafficMonth") {
	      changeChartData(labelMonth, dataMonth);
	    }
	  });	
	
   	submitMessage.addEventListener('click', (e) => {
	  event.preventDefault();


	  if(userSearch.value === ''){
		alert("Please select a name.");
		 return false; 
	  }else if(userMessage.value === ''){
		alert("Please type a message");  
		 return false;
	  }else{
		alert("Thank you for your message!");
	    messageForm.submit();
	  }		  


    });
    
	

     
	
    }; 
 