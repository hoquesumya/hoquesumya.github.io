import React from 'react';
import { Car } from './Carosuel';

const AllProject = (props) => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide w-80"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="d-block w-100">
            <div className='container'>
                <div className='row nao_des p-5'>
                    <div className='col-lg-8 pt-5 image_list'>
                        <h2>Mental Health Assistant</h2>
                        
                    </div>
                    <div className='col-lg-4 pt-5 project_details'>
                        <h3>Project Details</h3>

                    </div>

                </div>
            </div>
        
          </div>
        </div>
        <div className="carousel-item">
        <div className="d-block w-100">

        <div className='container'>
                <div className='row nao_des p-5'>
                    <div className='col-lg-8 pt-5 image_list'>
                        <h2>Mental Health Assistant</h2>
                        
                    </div>
                    <div className='col-lg-4 pt-5 project_details'>
                        <h3>Project Details</h3>

                    </div>

                </div>
            </div>



        </div>
          
        </div>
        <div className="carousel-item">
        <div className="d-block w-100">Hello</div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default AllProject;
