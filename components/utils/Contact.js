const Contact = () => {
  return (
    <section className="contact section bd_grid" id="contact">
      <div className="circle contact_circleOne"></div>
      <div className="circle contact_circleThree"></div>

      <h2 className="section_title">Contact me</h2>
      <div className="contactContainer bd_grid">
        <form id="contactForm" className="contactForm">
          <input
            type="text"
            placeholder="Enter name"
            required
            id="nameField"
            className="input"
          />
          <input
            type="email"
            placeholder="Enter email"
            required
            id="emailField"
            className="input"
          />
          <textarea
            id="messageContent"
            placeholder="Write your message...."
            name=""
            id=""
            cols="0"
            rows="10"
            className="input"
          ></textarea>
          <input
            type="submit"
            value="Submit"
            className="button contactButton"
          />
        </form>
      </div>
    </section>
  );
};

export { Contact };
