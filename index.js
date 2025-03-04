const input = document.getElementById('button');
input.addEventListener('click', function() {
  alert('Wupps! Nothing here');
});
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(event) {
      event.preventDefault(); 
      const targetId = this.getAttribute("href");
      document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
  });
});
