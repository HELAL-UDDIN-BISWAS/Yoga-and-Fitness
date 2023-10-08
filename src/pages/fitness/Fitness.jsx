import { useLoaderData, useParams } from "react-router-dom";
import Bodyfitness from "../BodyFitness/Bodyfitness";


const Fitness = () => {
    const fitness=useLoaderData()
    const {id}=useParams()
    const bodyfitnes = fitness.find(fit=>fit.id == id)
    console.log(bodyfitnes)
        return (
        <div>
            
           {
<Bodyfitness key={bodyfitnes.id} bodyfitness={bodyfitnes}></Bodyfitness>
           }
        </div>
    );
};

export default Fitness;