import '../asset/CSS/Main.css';
const Text_Box = () => {
    return (
        <div className="inputs">
            <input id="myID" className="inputs__field inputs__field--text" type="text" required />
            <label htmlFor="myID" className="inputs__label">
                myLabel Text
            </label>
        </div>
    );
}
export default Text_Box;