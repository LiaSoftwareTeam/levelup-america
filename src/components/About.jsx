import "./components.css";

export default function About() {
  return (
    <div>
      <section className="about" id="about">
        <div className="about-text">
          <div className="about-title">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,
              eius
            </p>
          </div>
          <div className="text-ph">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              omnis, ea rem error nisi a earum dolores vel. Molestias, cum.
              Mollitia rem aperiam eos reiciendis dolorum eveniet nisi cumque
              eaque!
            </p>
            <p style={{ marginTop: "10px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              facere delectus impedit cum magni quaerat harum repellat atque
              libero nobis.
            </p>
          </div>

          <div className="text-video"></div>
          <div className="text-button">
            <button>Read more</button>
          </div>
          <div className="text-other">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
              tempora eaque libero possimus. Voluptate, esse? Laudantium modi,
              placeat nesciunt tenetur animi pariatur nam cum iure, facere amet
              architecto cumque aliquid.
            </p>
          </div>
        </div>
        <div className="about-cards">
          <div className="card-title">
            <p>Next Activities</p>
          </div>
          <div className="card">
            <div className="card-img"></div>
            <div className="card-desc">
              <span>Lorem ipsum dolor sit amet </span>
              <button>Read Now </button>
            </div>
          </div>
          <div className="card" >
            <div className="card-img"></div>
            <div className="card-desc">
              <span>Lorem ipsum dolor sit amet </span>
              <button>Read Now </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
