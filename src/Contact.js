const Contact = () => {
    return ( 
        <>
            
        <div className="bg-dark">
 {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Contact me</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
          <div className=" row">
              <div className="col-6">
                  <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic1.makeuseofimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2016%2F10%2Fcamera-photo-lens-stock-images.jpg%3Fq%3D50%26fit%3Dcontain%26w%3D1500%26h%3D750%26dpr%3D1.5&imgrefurl=https%3A%2F%2Fwww.makeuseof.com%2Ftag%2Ftop-5-websites-for-free-stock-photographs%2F&tbnid=Dl7z4UdQxO9_AM&vet=12ahUKEwjw8fq1g9X4AhUQLRoKHTfjDroQMygKegUIARDFAQ..i&docid=BWlTlGThnKWvuM&w=1500&h=750&q=images&client=firefox-b-d&ved=2ahUKEwjw8fq1g9X4AhUQLRoKHTfjDroQMygKegUIARDFAQ" alt="sd sdf;j dfgkjs "/>
              </div>
              <div className="col-6">
                <p>Here is a display of the Info gotten from the Search</p>
              </div>
          </div>
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
      </div>
        </>
     );
}
 
export default Contact;