import './styles.css';
import Button from './Button';
import oceans from './oceans.json';


function Profile()
{
   let listItem = oceans.map(
(value)=><div key={value.id} className={`${value.fishCheck === "true"?"isAFish":"profile"}`}><img src={value.image} alt={value.name} className="img"/>
<h1>{value.name}</h1> 
<h3>Fish list</h3>
<ul>
      <li className='fact'>{value.fact1}</li>
      <li className='fact'>{value.fact2}</li>
      <li className='fact'>{value.fact3}</li>
   </ul>
   <Button />

</div>
   )
   

   return(
      <>
         <div>{listItem}</div>
        
      </>  
   );
}


export default Profile;