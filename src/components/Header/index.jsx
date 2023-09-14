import coverImage from '../../assets/cover/tech-cover2.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Andrew Read</h1>
      <img src={coverImage} alt="techy triangles"></img>
      {props.children}
    </header>
  );
}

export default Header;
