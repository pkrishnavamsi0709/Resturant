import Information from "./Information.js";

function ContactInfo() {
  return (
    <div className="ContactInfo">
      <Information
        title="Location:"
        desc="A108 Adam Street, New York, NY 535022"
        img={"Pizzas/location-dot-solid.svg"}
      />
      <Information
        title="Open Hours:"
        desc="Monday-Saturday:
11:00 AM - 2300 PM"
        img={"Pizzas/clock-regular.svg"}
      />
      <Information
        title="Email:"
        desc="info@example.com"
        img={"Pizzas/envelope-regular.svg"}
      />
      <Information
        title="Call:"
        desc="+1 5589 55488 55s"
        img={"Pizzas/mobile-solid.svg"}
      />
    </div>
  );
}

export default ContactInfo;
