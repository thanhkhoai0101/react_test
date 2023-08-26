import All from "./component/All.jsx";

const Layouts = () => {

  return (
      <div className="layouts">
          <div style={{marginTop:"50px"}}>
              <ul className="nav nav-tabs justify-content-around" style={{width:"500px"}} id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="home-tab"
                              data-bs-toggle="tab" data-bs-target="#home-tab-pane"
                              type="button" role="tab" aria-controls="home-tab-pane"
                              aria-selected="true">All
                      </button>
                  </li>
                  <li className="nav-item" role="presentation">
                      <button className="nav-link" id="profile-tab"
                              data-bs-toggle="tab" data-bs-target="#profile-tab-pane"
                              type="button" role="tab"
                              aria-controls="profile-tab-pane"
                              aria-selected="false">Active
                      </button>
                  </li>
                  <li className="nav-item" role="presentation">
                      <button className="nav-link" id="contact-tab"
                              data-bs-toggle="tab" data-bs-target="#contact-tab-pane"
                              type="button" role="tab"
                              aria-controls="contact-tab-pane"
                              aria-selected="false">Completed
                      </button>
                  </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="home-tab-pane"
                       role="tabpanel" aria-labelledby="home-tab" tabIndex="0"><All/>
                  </div>
                  <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel"
                       aria-labelledby="profile-tab" tabIndex="0">
                  </div>
                  <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel"
                       aria-labelledby="contact-tab" tabIndex="0">
                  </div>
              </div>
          </div>
      </div>
  )
}
export default Layouts
