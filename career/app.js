const title = document.querySelector('.section-title')
const section= [...document.querySelectorAll('.section')]


let option= {
    threshold:0.5
}

let callback = (entry) =>{
entry.map((entries) =>{
    if(entries.isIntersecting){
        entries.target.classList.add('active')
    }else{
            entries.target.classList.remove('active')
        }
    }
)
}
const observer = new IntersectionObserver(callback, option)

observer.observe(title)

section.map((value) =>{
    observer.observe(value)
}) 