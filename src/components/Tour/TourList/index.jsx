import './TourList.scss';
// importing from the Tour/Tour.jsx so we can render the Single tour
import Tour from '../Tour'; 
import { tourData } from '../../tourdata';
import { Component } from 'react';


class TourList extends Component{
    
    state = {
        tours : tourData
    }

    delTour = (id) =>{
        const {tours} = this.state 
        const sortedTours = tours.filter(tour => tour.id !== id)
        this.setState({
            tours:sortedTours
        })
    }
    render( ) 
       
    {
        const { tours } = this.state 
        return(
            <div className="tourlist">
               { tours.map(tour =>{
                   return <Tour key={tour.id} tour={tour} delTour = {this.delTour} />
               })}
            </div>
        )
    }
}

// const TourList = () =>{

//     state = {
//         tours : tourData
//     }

//     console.log(this.state.tours);

//     return(
//         <div className='tourlist'>
//             <Tour />
//         </div>
//     )
// }

export default TourList;