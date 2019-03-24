// listen for scroll event
window.addEventListener('scroll', () =>{
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled=window.scrollY;
    if (Math.ceil(scrolled) === scrollable) {
        alert("You've reached the end!");
    }
});