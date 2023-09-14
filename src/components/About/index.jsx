import profilepic from '../../assets/large/portraits/ai_portrait.jpg'

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
        <img id="profilePic" src={profilepic} alt ='ai-profile-image'></img>
        </div>
        <p>
          Hello there. - General Kenobi
        </p>
        <p>
          I am a full stack developer leveraging some of the newest technologies to create responsive and simple web applications.
        </p>
      </div>
    </section>
  );
}

export default About;
