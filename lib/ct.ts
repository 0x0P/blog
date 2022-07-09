export function changeTitle(title : string){
    document.querySelector(".navTitle2").innerHTML = title
    const onScroll: EventListener = () => { 
        if(window.scrollY > 100){
          document.querySelector(".navTitle").setAttribute("data-change", "true")
          document.querySelector(".navTitle2").setAttribute("data-change", "false")
        }else{
          document.querySelector(".navTitle").setAttribute("data-change", "false")
          document.querySelector(".navTitle2").setAttribute("data-change", "true")
      }
    };

    const win: Window = window; 
    win.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }