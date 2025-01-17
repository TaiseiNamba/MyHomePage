import "./About.css";

function About() {
  return (
    <section>
      <h2 className="about-me">About Me</h2>
      <div >
        <p className="myIntroduction">My name is Taisei Namba. I am a Tokushima University student, majoring in Astronomy.</p>
          <div>
            <p className="my-experience">My previous work experience:</p>       
            <ul className="myWork">
              <li><span>"Syabusyabu" restaurant </span> for 4 years in Tokushima</li>
              <li><span>Kaisen Izakaya</span>for a year</li>
              <li><span>Sushi-train </span> for 3 months</li>
              <li><span>Abattoir</span> in Australia for 5 months on a working holiday visa</li>
            </ul>
          </div> 
        <p>なかなか覚えれない…</p>
      </div>
    </section>
  );
}

export default About;
