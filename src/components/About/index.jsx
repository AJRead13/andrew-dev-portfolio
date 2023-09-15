import profilepic from '../../assets/large/portraits/ai_portrait.jpg'

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
          <img id="profilePic" src={profilepic} alt='ai-profile-image'></img>
        </div>
        <p>
          Hello there. - General Kenobi
        </p>
        <p>
          Greetings Adventurer, I'm Andrew Read, a passionate Full Stack Web Developer certified through the University of Pennsylvania. With a background as a veteran, I bring discipline, dedication, and a commitment to excellence to every project. Since completing my certification, I've been on a journey through the realms of front-end and back-end development, crafting robust and elegant web solutions. Beyond coding, I've stepped into the role of an educator, guiding aspiring developers through the same Full Stack Web Development Boot Camp that kick-started my career.</p>

        <p>In my development journey, I've ventured into exciting territories, harnessing the power of AI and mastering the complete MERN stack. My toolset includes JavaScript, jQuery, React, Node.js, Express, SQL, MongoDB, PHP, Python, and an array of web technologies like CSS, HTML, and Bootstrap. Beyond the code, I cherish my roles as a devoted family man and a dedicated gamer and Dungeons & Dragons enthusiast. Join me on a quest to explore the digital world, one line of code at a time.
        </p>
      </div>
    </section>
  );
}

export default About;
