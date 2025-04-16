document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(
    "section, .container__cards--card"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("aparecer");
        } else {
          entry.target.classList.remove("aparecer"); // Remove o efeito ao sair da tela
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  elementos.forEach((el) => {
    el.classList.add("escondido");
    observer.observe(el);
  });
});
