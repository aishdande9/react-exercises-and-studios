import './styles.css';

function Button() {
   const onLearnMore = ()=>{
      alert("“Slipsh Splash” ");
   }

   return ( 
         <button onClick={onLearnMore}>
           click this button!
         </button>
   );
 
   
}



export default Button;