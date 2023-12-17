
import "./Loader.css"
const Loader = () => {
    let circleCommonStyles = {
      height: '12px',
      width: '12px',
      backgroundColor: '#5bbd72', // Replace with your brand accent color
      borderRadius: '50%',
      marginLeft:'5px'
    };
  
    let containerStyles = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: 'rgba(128, 128, 128, 0.2)'
      , // Adjust the opacity and color as needed
    };
  
    return (
      <div style={containerStyles}>
        <div className="animate-bounce" style={{ ...circleCommonStyles}}></div>
        <div  className="animate-bounce-200"  style ={{ ...circleCommonStyles}}></div>
        <div className="animate-bounce-400"  style={{ ...circleCommonStyles}}></div>
      </div>
    );
  };
  
  export default Loader;
