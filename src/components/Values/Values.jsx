import './Values.css';

const values = [
  {
    id: 1,
    title: 'Sustainability',
    description:
      "We're passionate about creating a better future for our planet. That's why we're dedicated to finding innovative energy solutions that reduce our impact on the environment.",
  },
  {
    id: 2,
    title: 'Integrity',
    description:
      "We believe in doing the right thing, even when no one's watching. We're honest, transparent, and fair in all our dealings – with our customers, partners, and each other.",
  },
  {
    id: 3,
    title: 'Innovation',
    description:
      "We're curious, we're creative, and we're always looking for ways to improve. Whether it's a new technology or a fresh approach, we're open to ideas that can help us grow.",
  },
  {
    id: 4,
    title: 'Teamwork',
    description:
      "We know we're stronger together. Our team is like a family – we support each other, we celebrate each other's successes, and we work together to achieve our goals.",
  },
  {
    id: 5,
    title: 'Employee Safety',
    description:
      "Our people are our greatest asset. We'll do everything in our power to keep them safe, healthy, and happy at work.",
  },
  {
    id: 6,
    title: 'Community Engagement',
    description:
      "We're part of the communities we serve, and we want to make a positive difference. We'll work with our neighbors, listen to their needs, and do our best to help.",
  },
];

const Values = () => {
  return (
    <section className="values" id="values">
      <div className="values__overlay" />
      <div className="values__container">
        <p className="values__label">Our Values</p>
        <h2 className="values__heading">
          At Zam Zam Gas, we're built on a foundation of values that guide us in everything we do.
          These values are more than just words - they're the principles that shape our actions,
          our decisions, and our relationships.
        </h2>

        <div className="values__grid">
          {values.map((v) => (
            <div key={v.id} className="value-item">
              <h3 className="value-item__title">
                {v.id}. {v.title}
              </h3>
              <hr className="value-item__divider" />
              <p className="value-item__desc">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
