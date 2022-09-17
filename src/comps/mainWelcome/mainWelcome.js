const MainProjects = () => {
  return (
    <div className="container has-pb-6">
      <div className="card is-shadowed">
        <div className="has-size-7 has-weight-black has-mb-4 has-lh-none">
          Welcome to my Aros projects!
        </div>
        <div className="has-size-3 has-lh-heading is-semitransparent has-mb-6 has-text-black">
          This is the page containing various Aros projects that I have created
          or collaborated over the years. If you have any questions, you can ask
          me on contact page.
        </div>
        <div className="is-flex">
          <a className="button" href="/contact">
            {" "}
            Contact me...
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainProjects;
