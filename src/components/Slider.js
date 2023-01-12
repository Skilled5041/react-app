const Slider = ({value, onChange}) => {
    return (
        <input
            className={"slider"}
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={onChange}
        />
    );
}
export default Slider;