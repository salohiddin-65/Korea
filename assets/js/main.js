const navitemlist = document.getElementsByClassName("navitem");
for(let i = 0; i < navitemlist.length; i++)
{
    navitemlist[i].addEventListener("click", ()=> {
        if(navitemlist[i].classList.contains("navitem-active"))
            return true;
        else {
            for(let j = 0; j < navitemlist.length; j++){
                navitemlist[j].classList.remove("navitem-active");
            }
            navitemlist[i].classList.add("navitem-active");
        }
    });
}

window.addEventListener('scroll', function() {
	var element1 = document.querySelector('#about');
	var position1 = element1.getBoundingClientRect();
	var element2 = document.querySelector('#skill');
	var position2 = element2.getBoundingClientRect();
	var element3 = document.querySelector('#experience');
	var position3 = element3.getBoundingClientRect();
console.log(position1.bottom);
console.log(window.innerHeight / 2);
	if(position1.bottom > this.window.innerHeight / 2) {
        for(let j = 0; j < navitemlist.length; j++){
            navitemlist[j].classList.remove("navitem-active");
        }
        navitemlist[0].classList.add("navitem-active");
	}
	else if(position2.bottom > this.window.innerHeight / 2) {
        for(let j = 0; j < navitemlist.length; j++){
            navitemlist[j].classList.remove("navitem-active");
        }
        navitemlist[1].classList.add("navitem-active");
	}
	else {
        for(let j = 0; j < navitemlist.length; j++){
            navitemlist[j].classList.remove("navitem-active");
        }
        navitemlist[2].classList.add("navitem-active");
	}
});