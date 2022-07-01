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
              <div className="col-7">
                  Tel: +237 681 099 238<br></br>
                  email: silasmagho18@gmail.com<br></br>
                  address: Buea,Cameroon
                  <textarea placeholder="leave me a short message..." className="mt-2"> </textarea>
                  <button type="button" className="btn btn-primary mt-3 px-4" >send</button>
              </div>
              <div className="col-5" style={{
                backgroundImage : "url(https://photos.google.com/photo/AF1QipO1cEPz6JMQlPZaZ4cMvFfdaMndKUED-hRg8EEr)",
              }}>
                <p>Please leave a message and I'll definitely get back to you as soon as I can.</p>
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