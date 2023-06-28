
import Star from "../assets/star.png";

export default function CustomersSay() {

  const testimonials = [
    {
      name: "Joe",
      text: "Food was great! Will recommend my friends and family members to dine here.",
    },
    {
      name: "Chen Xi",
      text: "Food was great! Will recommend my friends and family members to dine here.",
    },
    {
      name: "Alan",
      text: "Food was great! Will recommend my friends and family members to dine here.",
    },
    {
      name: "Tanya",
      text: "Food was great! Will recommend my friends and family members to dine here.",
    },
    {
      name: "James",
      text: "Food was great! Will recommend my friends and family members to dine here.",
    },
    {
      name: "Tanusha",
      text: "Food was great! Will recommend my friends and family members to dine here.",
    },
    {
      name: "Vera",
      text: "Food was great! Will recommend my friends and family members to dine here.",
    },
    {
      name: "Gillian",
      text: "Food was great! Will recommend my friends and family members to dine here.",
    },
  ];
  return (
    <div >
    <h2>Testimonials</h2>
    <ul className="testimonial" style={{ listStyle:"none" }}>
      {testimonials.map((item, index) => (
        <li key={index}>
          <div className="testimonial-card">
          <img src={Star} alt="delivery Icon"></img>
            <h3>{item.name}</h3>
            <p>{item.text}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
  );
}