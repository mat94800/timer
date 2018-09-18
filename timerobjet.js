function TimerObj (id, duree){

this.compteurElt = document.getElementById(id);
    
this.compteurElt.textContent ="La réservation expire dans " + duree + " minutes et " + 0 + " secondes";
    
    this.compteurElt.style.backgroundColor = "#428ff4";
    this.compteurElt.style.color = "white";
    this.compteurElt.style.padding = "15px";
    this.compteurElt.style.width = "350px";
    this.compteurElt.style.border ="3px solid #171096";

    this.tempsSecondes = (duree * 60);

    
    this.intervalId = setInterval(function(){
    this.diminuerCompteur()
    }.bind(this), 1000);

    this.diminuerCompteur = function () {

        console.log("test");
    
      

            if (this.tempsSecondes > 1) {

                this.tempsSecondes = this.tempsSecondes - 1;
        
        
        var minutes = Math.floor(this.tempsSecondes / 60);
        
        var secondes = Math.floor(this.tempsSecondes - (minutes * 60 ));
        
        this.compteurElt.textContent ="La réservation expire dans " + minutes + " minutes et " + secondes + " secondes !";
        
            

    } else {


        clearInterval(this.intervalId);

        var finTimer = this.compteurElt;

        finTimer.textContent = "La réservation a expiré !";
        

    }

        
}

    
}

var timer = new TimerObj("timer",2);
var timer2 = new TimerObj("timer2",0.2);