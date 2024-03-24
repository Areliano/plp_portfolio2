<script>
    document.addEventListener("DOMContentLoaded", function() {
        const navLinks = document.querySelectorAll("nav a");

        navLinks.forEach(function(link) {
            link.addEventListener("click", function(event) {
                event.preventDefault();

                const targetId = this.getAttribute("href").substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    const yOffset = -60; // Adjust for header height or any fixed elements
                    const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

                    window.scrollTo({ top: y, behavior: "smooth" });
                }
            });
        });
    });
</script>
