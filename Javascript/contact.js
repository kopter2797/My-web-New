const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");
const closeSidebarBtn = document.querySelector(".close-sidebar-btn");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

closeSidebarBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
