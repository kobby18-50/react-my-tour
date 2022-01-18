import { Component } from 'react';
import './Tour.scss'

class Tour extends Component{

    state = {
        showInfo : false
    }

    handleInfo = () =>{
        this.setState({
            showInfo : !this.state.showInfo
        })
    }

    render(){

        const {id, city, img, name, details } = this.props.tour
        const { delTour } = this.props

        return(
            <article className="tour">
            <div className="image-container">
                <img src={img} alt="first img" width={200} />
                     <span className="close-btn" onClick={() =>{delTour(id)}}>
                         <i className="fas fa-window-close"></i>
                     </span>
            </div>
            <div className="tour-info">
                <h3>{city}</h3>
                <h4>{name}</h4>
                <h5>info{""}<span onClick={this.handleInfo}><i className="fas fa-caret-square-down"></i></span></h5>
                
                {this.state.showInfo && <p>{details}</p> }

            </div>
        </article>
        )
    }
}

// const Tour = () =>{
//     const {city, img, name, info } = this.props.tour
//     return(
//        <article className="tour">
//            <div className="image-container">
//                <img src={img} alt="first img" width={200} />
//                     <span className="close-btn">
//                         <i className="fas fa-window-close"></i>
//                     </span>
//            </div>
//            <div className="tour-info">
//                <h3>{city}</h3>
//                <h4>{name}</h4>
//                <h5><span><i className="fas fa-caret-square-down"></i></span></h5>
//                <p>{info}</p>

//            </div>
//        </article>
//     )
// }

export default Tour;