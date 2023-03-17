const filters = {
  tag: "all",
  init() {
    const dropdownItems = document.querySelectorAll(".ui.dropdown .item");
    const viewAllButton = document.querySelector("#view-all");

    dropdownItems.forEach((item) => {
      item.addEventListener("click", () => {
        this.tag = item.dataset.tag;
        this.filter();
      });
    });

    viewAllButton.addEventListener("click", () => {
      this.tag = "all";
      this.filter();
      const dropdown = document.querySelector(".ui.dropdown");
      dropdown.querySelector(".text").textContent = "Filter by tag";
      dropdown.querySelectorAll(".item").forEach((item) => {
        item.classList.remove("active");
      });
    });
  },
  filter() {
    const projects = document.querySelectorAll(".project");
    projects.forEach((project) => {
      if (this.tag === "all" || project.dataset.tag === this.tag) {
        project.classList.remove("hidden");
      } else {
        project.classList.add("hidden");
      }
    });
    const dropdown = document.querySelector(".ui.dropdown");
    dropdown.querySelector(".text").textContent = this.tag;
    dropdown.querySelectorAll(".item").forEach((item) => {
      if (item.dataset.tag === this.tag) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  },
};

filters.init();
