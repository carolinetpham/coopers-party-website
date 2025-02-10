import "../styles/homepage.css"
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
    const navigate = useNavigate();

    const goToRSVP = () => {
      navigate('/RSVPForm'); 
    };
    return(
        <div className="homepage-component">
            <h1 className="homepage-title">You're invited to Cooper's birthday!</h1>
            <h2 className="homepage-subtitle">Boda Borg, February 23, 2025 (Time TBD)</h2>
            <img src={"images/birthday-platypus.gif"} className="platypus-gif"></img>
            <Button type="primary" color="purple" variant="solid" size="large" className="rsvp-button"
            onClick={goToRSVP}
            style={{
                fontStyle:"bold",
                fontSize: '18px', 
                borderRadius: '8px', 
              }}>
                RSVP
            </Button>
        </div>
    );
}

export default HomePage;