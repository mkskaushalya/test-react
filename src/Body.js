import "./Body.css";
function Body() {
  return (
    <main className="AppBody" id="mainBody">
      <section id="hero" className="hero">
        <h2>Hero</h2>
        <p>Welcome to my website</p>
      </section>
      <section id="about" className="about">
        <h2>About</h2>
        <p>Learn more about us</p>
      </section>
      <section id="services" className="services">
        <h2>Services</h2>
        <p>What we offer</p>
      </section>
      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>Get in touch</p>
      </section>
    </main>
  );
}

export default Body;