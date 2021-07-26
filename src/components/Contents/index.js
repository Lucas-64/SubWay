import SimpleImageSlider from "react-simple-image-slider";
const images = [
  { url: "./" },
  { url: "images/2.jpg" },
  { url: "images/3.jpg" },
  
];

const contents = () => {
  return (
    <div>
      <SimpleImageSlider
        width={1366}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}
export default contents;