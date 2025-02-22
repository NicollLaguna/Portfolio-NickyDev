const { createApp } = Vue
const app = createApp({
  data() {
    return {
      activeButton: "all",
      isScrolled: false,
      activeSection: "home",
      proyects: [
        {
          name: "Amazing Events",
          description: "A website to showcase various events.",
          type: "frontend",
          image: "image/Amazing-events.png",
          url: "https://github.com/NicollLaguna/Amazing-Events_Vue",
          technologies: [
            { name: "HTML", icon: "icon/html5.png" },
            { name: "CSS", icon: "icon/css.png" },
            { name: "JavaScript", icon: "icon/js.png" },
            { name: "Vue.js", icon: "icon/vue.png" }
          ]
        },
        {
          name: "Home Banking",
          description: "A banking platform with user-friendly features.",
          type: "full",
          image: "image/Home Banking.png",
          url: "https://github.com/NicollLaguna/Home-Banking",
          technologies: [
            { name: "HTML", icon: "icon/html5.png" },
            { name: "CSS", icon: "icon/css.png" },
            { name: "JavaScript", icon: "icon/js.png" },
            { name: "Vue.js", icon: "icon/vue.png" },
            { name: "Java", icon: "icon/java.png" },
            { name: "Spring", icon: "icon/spring.png" },
            { name: "PostgreSQL", icon: "icon/postgreSQL.png" }
          ]
        },
        {
          name: "TripNow",
          description: "An eCommerce platform for a travel agency, designed to provide customers with the best tools to plan and book their trips.",
          type: "full",
          image: "image/tripNow.png", 
          url: "https://github.com/Flor87Posta/EcommerceTripNow",
          technologies: [
            { name: "HTML", icon: "icon/html5.png" },
            { name: "CSS", icon: "icon/css.png" },
            { name: "JavaScript", icon: "icon/js.png" },
            { name: "Vue.js", icon: "icon/vue.png" },
            { name: "Java", icon: "icon/java.png" },
            { name: "Spring Boot", icon: "icon/spring.png" },
            { name: "Bootstrap", icon: "icon/bootstrap.png" }
          ]
        }
        ,
        {
          name: "Pet Shop Final",
          description: "A website for a veterinary clinic, designed to showcase services, provide information, and facilitate communication with pet owners.",
          type: "frontend",
          image: "image/petshop.png",
          url: "https://github.com/5ag5/PET-SHOP-FINAL",
          technologies: [
            { name: "HTML", icon: "icon/html5.png" },
            { name: "CSS", icon: "icon/css.png" },
            { name: "JavaScript", icon: "icon/js.png" },
            { name: "Bootstrap", icon: "icon/bootstrap.png" },
            { name: "Vue.js", icon: "icon/vue.png" }
          ]
        }
        ,
        {
          name: "Juego Alura Oracle",
          description: "A number-guessing game created during Oracle's logic course.",
          type: "frontend",
          image: "image/Juego Alura.png",
          url: "https://github.com/NicollLaguna/Juego-Alura-Oracle",
          technologies: [
            { name: "HTML", icon: "icon/html5.png" },
            { name: "CSS", icon: "icon/css.png" },
            { name: "JavaScript", icon: "icon/js.png" }
          ]
        },
        {
          name: "Portfolio NickyDev",
          description: "A personal portfolio showcasing my projects, skills, and experience as a Full Stack Java Developer.",
          type: "frontend",
          image: "image/portfolio.png",
          url: "https://github.com/NicollLaguna/Portfolio-NickyDev", // Reemplázalo con el enlace real si es otro.
          technologies: [
            { name: "HTML", icon: "icon/html5.png" },
            { name: "CSS", icon: "icon/css.png" },
            { name: "JavaScript", icon: "icon/js.png" },
            { name: "Vue.js", icon: "icon/vue.png" }
          ]
        },
        {
          name: "Text Encryptor",
          description: "A tool for encrypting and decrypting text, developed as part of the Oracle Alura Challenge.",
          type: "frontend",
          image: "image/encriptador.png",
          url: "https://github.com/NicollLaguna/Challenge-Alura-Oracle",
          technologies: [
            { name: "HTML", icon: "icon/html5.png" },
            { name: "CSS", icon: "icon/css.png" },
            { name: "JavaScript", icon: "icon/js.png" }
          ]
        }
        ,
        {
          name: "NickyBooks",
          description: "A Java desktop app that searches books from Gutendex and shows top downloads.",
          type: "backend",
          image: "image/NickyBooks.png",
          url: "https://github.com/NicollLaguna/NickyBooks",
          technologies: [
            { name: "Java", icon: "icon/java.png" }
          ]
        },
        {
          name: "Currency Converter",
          description: "A console app that converts currencies using real-time exchange rates.",
          type: "backend",
          image: "image/conversor.jpg",
          url: "https://github.com/NicollLaguna/Conversor-monedas-Alura",
          technologies: [
            { name: "Java", icon: "icon/java.png" }
          ]
        },
        {
          name: "Simplemente Cesar",
          description: "An informational page for a remodeling company.",
          type: "frontend",
          image: "image/simplemente.png",
          url: "https://github.com/DonuTech-Inc/Proyect-Simplemente-Cesar",
          technologies: [
            { name: "HTML", icon: "icon/html5.png" },
            { name: "CSS", icon: "icon/css.png" },
            { name: "JavaScript", icon: "icon/js.png" },
            { name: "Bootstrap", icon: "icon/bootstrap.png" }
          ]
        },
        {
          name: "LiterAlura",
          description: "A Spring Boot app to search books and authors using Gutendex API.",
          type: "backend",
          image: "image/literalura.jpg",
          url: "https://github.com/NicollLaguna/LiterAlura",
          technologies: [
            { name: "Java", icon: "icon/java.png" },
            { name: "Spring", icon: "icon/spring.png" }
          ]
        },
        {
          name: "ForoHub",
          description: "A RESTful API for forum management with JWT authentication.",
          type: "backend",
          image: "image/forohub.jpg",
          url: "https://github.com/NicollLaguna/ForoHub",
          technologies: [
            { name: "Java", icon: "icon/java.png" },
            { name: "Spring", icon: "icon/spring.png" },
            { name: "MySQL", icon: "icon/mysql.png" }
          ]
        }
      ],
      filteredProyects: []
    };
  },
  created() {

    this.filteredProyects = this.proyects;
    window.addEventListener('scroll', this.handleScroll);
  },
  methods:
  {
    showAll() {
      this.filteredProyects = this.proyects;
      this.activeButton = 'all';
    },
    FilterFront() {
      this.filteredProyects = this.proyects.filter(proyect => proyect.type === 'frontend');
      this.activeButton = 'frontend';
    },
    FilterBack() {
      this.filteredProyects = this.proyects.filter(proyect => proyect.type === 'backend');
      this.activeButton = 'backend';
    },
    FilterFull() {
      this.filteredProyects = this.proyects.filter(proyect => proyect.type === 'full');
      this.activeButton = 'full';
    },
    handleScroll() {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50; // Ajuste para compensar el header
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        // Verifica si el scroll actual está dentro de esta sección
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          this.activeSection = sectionId;
        }
      });

      // Cambia el estado del header cuando se hace scroll
      this.isScrolled = scrollY > 900;
    }
  }
}
);
app.mount('#app');

// Obtener el botón
const scrollToTopButton = document.getElementById('scrollToTop');

// Mostrar/ocultar la flecha dependiendo de la posición de desplazamiento
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) { // Mostrar la flecha al bajar 200px
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

// Agregar evento para subir suavemente al inicio
scrollToTopButton.addEventListener('click', (event) => {
  event.preventDefault(); // Evita el comportamiento por defecto del ancla
  window.scrollTo({
    top: 0, // Posición en la que queremos estar
    behavior: 'smooth' // Hace que el scroll sea suave
  });
});

