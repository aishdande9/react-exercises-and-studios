export default function HobbyLinks() {
  let hobbyLinks = [
    "https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg",
    "https://i.ytimg.com/vi/lJpTDyorFA0/sddefault.jpg",
  ];
  return (
    
    <div>
      <h3>Hobbies</h3>
      <a href={hobbyLinks[0]}>Dancing</a><br></br>
      <a href={hobbyLinks[1]}>Painting</a>
    </div>
  );
}
