import {React} from 'react'

export const Car = (props) =>{
    let item = null
    if  (props.type==="nao"){
        item  = (
            <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="assests/robot.png" className="d-block w-100 " alt="..." />
            </div>
            <div className="carousel-item">
                <div className='embed-responsive'>
                    <iframe 
                        className="embed-responsive-item d-block w-100" 
                        src="https://www.youtube.com/embed/FDD_tT9k_Oo"
                        style={{minHeight:'20rem'}}
                    >
                    </iframe>
                </div>

                
            </div>
            <div className="carousel-item">
                <div className='embed-responsive'  style={{height:'100%'}}>
                    <iframe 
                        className="embed-responsive-item d-block w-100 h-100" 
                        src="https://www.youtube.com/embed/Zz591nO2kkM"
                        style={{minHeight:'20rem'}}
                    >
                    </iframe>
                </div>
            
            </div>
            <div className="carousel-item">
                <div className='embed-responsive'  style={{height:'100%'}}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ZmmDcOW_ZE8?si=bdk460DWBU6RFWmp"></iframe>

                </div>
            
            </div>
        </div>
        )
    }
    else if (props.type === "voting"){
        item = (
            <div className="carousel-inner">
            <div className="carousel-item active">
                 <img src="assests/voting.png" className="d-block w-100 " alt="..." />
            </div>
            <div className="carousel-item">
            <img src="assests/voting1.png" className="d-block w-100 " alt="..." />

            </div>
            <div className="carousel-item">
            <img src="assests/voting2.png" className="d-block w-100 " alt="..." />
              
            </div>
        </div>
        
        )

    }
    else if (props.type == "studyLink"){
        item = (
            <div className="carousel-inner">
            <div className="carousel-item active">
                 <img src="assests/study_summary.png" className="d-block w-100 " alt="..." />
            </div>
            <div className="carousel-item">
                <img src="assests/interface.png" className="d-block w-100 " alt="..." />

            </div>
        </div>
        )
    }

    else if (props.type === "cobra"){
        item = (
            <div className="carousel-inner">
            <div className="carousel-item active">
                 <img src="assests/cobra.jpeg" className="d-block w-100 " alt="..." />
            </div>
            <div className="carousel-item">
                <img src="assests/cobra1.png" className="d-block w-100 " alt="..." />

            </div>
            <div className="carousel-item">
                <div className='embed-responsive'  style={{height:'100%'}}>
                    <iframe 
                        className="embed-responsive-item d-block w-100 h-100" 
                        src="https://www.youtube.com/embed/9MYVFQtkFRA"
                        style={{minHeight:'20rem'}}
                    >
                    </iframe>
                </div>
            
              
            </div>
        </div>
        
        )

    }

    else if (props.type === "soccer"){
        item = (
            <div className="carousel-inner">
            <div className="carousel-item active">
                 <img src="assests/soccer.png" className="d-block w-100 " alt="..." />
            </div>
            <div className="carousel-item">
            <img src="assests/soccer1.png" className="d-block w-100 " alt="..." />

            </div>
            <div className="carousel-item">
            <img src="assests/soccer2.png" className="d-block w-100 " alt="..." />
              
            </div>
        </div>
        
        )

    }

    else if (props.type === "file_system"){
        item = (
            <div className="carousel-inner">
            <div className="carousel-item active">
                 <img src="assests/mypantry.png" className="d-block w-100 " alt="..." />
            </div>
            <div className="carousel-item">
            <img src="assests/pantry1.png" className="d-block w-100 " alt="..." />

            </div>
            <div className="carousel-item">
            <img src="assests/pantry2.png" className="d-block w-100 " alt="..." />
              
            </div>
        </div>
        
        )

    }
    else if (props.type === "mrt") {
        item = (
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <iframe 
                        width="600" 
                        height="315" 
                        src="https://www.youtube.com/embed/Yi4qBSmEP_c?si=8JWCT1kG9R7wtzDV" 
                        title="MRT Video"
                    ></iframe>
                </div>
            </div>
        );
    }
    

    return(
        <div id="carouselExampleIndicatorsNao" 
        className="carousel slide w-75" 
        data-bs-ride="carousel"
        data-bs-interval="1000"
        >
        <div className="carousel-indicators">
            <button
            type="button"
            data-bs-target="#carouselExampleIndicatorsNao"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
            ></button>
            <button
            type="button"
            data-bs-target="#carouselExampleIndicatorsNao"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            ></button>
            <button
            type="button"
            data-bs-target="#carouselExampleIndicatorsNao"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            ></button>
        </div>
        {item}
      
        <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicatorsNao"
            data-bs-slide="prev"
        >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicatorsNao"
            data-bs-slide="next"
        >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    )

}