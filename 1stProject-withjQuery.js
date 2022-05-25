document.addEventListener("click", e => {
    let handle
    if (e.target.matches(".handle")){
       handle = e.target 
    } 
    else {
       handle = e.target.closest(".handle")
    }
    if (handle !== null) { onHandleClick(handle)  
    }
}) 

const throttleProgressBar = throttle(() => {
    document.querySelectorAll(".progress-bar").forEach(calculateProgressBar)
  
}, 250)
window.addEventListener("resize", throttleProgressBar)

document.querySelectorAll(".progress-bar").forEach(calculateProgressBar)

function calculateProgressBar(progressBar){
    progressBar.innerHTML = ""
    const slider = progressBar.closest(".team-title-container").querySelector(".slider")
    const itemCount = slider.children.length
    const itemPerScreen = parseInt(
        getComputedStyle(slider).getPropertyValue("--item-per-screen"))

    const sliderIndex = parseInt(
        getComputedStyle(slider).getPropertyValue("--slider-index"))

    const progressBarItemCount = Math.ceil(itemCount / itemPerScreen)

    for (let i = 0; i < progressBarItemCount; i++){
        const barItem = document.createElement("div")
        barItem.classList.add("progress-item")
        if (i === sliderIndex){
            barItem.classList.add("active")
        }
        progressBar.append(barItem)
    }
}

function onHandleClick(handle){
    const progressBar = handle.closest(".team-title-container").querySelector(".progress-bar")
    const slider = handle.closest(".team-container").querySelector(".slider")
    const sliderIndex = parseInt(
        getComputedStyle(slider).getPropertyValue("--slider-index"))

    const progressBarItemCount = progressBar.children.length

    if (handle.classList.contains("left-handle")){
        if (sliderIndex - 1 < 0){
            slider.style.setProperty("--slider-index", progressBarItemCount - 1)
            progressBar.children[sliderIndex].classList.remove("active")
            progressBar.children[progressBarItemCount - 1].classList.add("active")
        }else{
              slider.style.setProperty("--slider-index", sliderIndex - 1)
            progressBar.children[sliderIndex].classList.remove("active")
            progressBar.children[sliderIndex - 1].classList.add("active")
        }
    }
    if (handle.classList.contains("right-handle")){
        if (sliderIndex + 1 >= progressBarItemCount){
            slider.style.setProperty("--slider-index", 0)
            progressBar.children[sliderIndex].classList.remove("active")
            progressBar.children[0].classList.add("active")
        }else{
            slider.style.setProperty("--slider-index", sliderIndex + 1)
            progressBar.children[sliderIndex].classList.remove("active")
            progressBar.children[sliderIndex + 1].classList.add("active")
        }
        
    }
} 

function throttle(cb, delay = 1000) {
    let shouldWait = false
    let waitingArgs
    const timeoutFunc = () => {
      if (waitingArgs == null) {
        shouldWait = false
      } else {
        cb(...waitingArgs)
        waitingArgs = null
        setTimeout(timeoutFunc, delay)
      }
    }
  
    return (...args) => {
      if (shouldWait) {
        waitingArgs = args
        return
      }
  
      cb(...args)
      shouldWait = true
      setTimeout(timeoutFunc, delay)
    }
  }

  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar-light").style.top = "0";
    document.querySelector(".navbar-black").style.top = "0";

  } else {
    document.querySelector(".navbar-light").style.top = "-100px";
    document.querySelector(".navbar-black").style.top = "-70px";

  }
  prevScrollpos = currentScrollPos;
}
