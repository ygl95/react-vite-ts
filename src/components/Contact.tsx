const Contact = () => {
  return (
    <>
      <div
        className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"
        id="contactme"
      >
        <h1 className="display-4">Contact Me</h1>
        <p className="lead">I'd love to hear from you</p>
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputFullname">Fullname</label>
          <input
            type="input"
            className="form-control"
            id="exampleInputFullname"
            placeholder="Fullname"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Feedback</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Contact;
