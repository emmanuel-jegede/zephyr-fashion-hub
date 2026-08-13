function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.add("active");
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.remove("active");
}


   const filterButtons = document.querySelectorAll(".filter-btn");
    const collectionItems = document.querySelectorAll(".collection-item");
    
    filterButtons.forEach(button => {
      
      button.addEventListener("click", () => {
        
        const filter = button.dataset.filter;
        
        // Remove active from all buttons
        filterButtons.forEach(btn => {
          btn.classList.remove("active");
        });
        
        // Add active to clicked button
        button.classList.add("active");
        
        // Show or hide products
        collectionItems.forEach(item => {
          
          if (filter === "all" || item.classList.contains(filter)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
          
        });
        
      });
      
    });
