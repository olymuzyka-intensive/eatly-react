import Slider from 'react-slider';

function PriceSlider() {
    const [maxPrice, setMaxPrice] = useState(1000);

    const handleSlide = (value) => {
      setMaxPrice(value);
    };

    return (
        <div>
        {/* <h2>Выберите максимальную цену: {maxPrice}</h2> */}
        <Slider
            min={0}
            max={100}
            defaultValue={maxPrice}
            onChange={handleSlide}
      />
    </div>
    )
  }
  
  export default PriceSlider