import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card h-100">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Project-1</h5>
                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                  standard dummy text ever since the 1500s, when an</p>
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card h-100">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">project-2</h5>
                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an</p>
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card h-100">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">project-3</h5>
                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

