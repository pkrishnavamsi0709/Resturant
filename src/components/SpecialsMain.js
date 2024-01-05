import SpecailItems from "./SpecailItems";
import { useState } from "react";
import SpecialComponent from "./SpecialComponent";

let data = [
  {
    id: 1,
    title: "Modi ser te",
    heading: "Architecto ut aperiam autem id",
    ing: "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
    desc: "Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero",
    img: "https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/specials-1.png",
    open: true,
  },
  {
    id: 2,
    title: "fhk fkanf hgfka ",
    heading: "Et blanditiis nemo veritatis excepturi",
    ing: "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
    desc: "Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero",
    img: "https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/specials-3.png",
    open: false,
  },
  {
    id: 3,
    title: "Modi ser te",
    heading: "Architecto ut aperiam autem id",
    ing: "Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut",
    desc: "Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut",
    img: "https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/specials-4.png",
    open: false,
  },
  {
    id: 4,
    title: "hkfbn janfka jflak",
    heading: "Architecto ut aperiam autem id",
    ing: "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
    desc: "Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero",
    img: "https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/specials-5.png",
    open: false,
  },
  {
    id: 5,
    title: "lusto een alkfn",
    heading: "Architecto ut aperiam autem id",
    ing: "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
    desc: "Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero",
    img: "https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/specials-2.png",
    open: false,
  },
];

function SpecialsMain() {
  const [type, settype] = useState({
    id: 1,
    title: "Modi ser te",
    heading: "Architecto ut aperiam autem id",
    ing: "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
    desc: "Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero",
    img: "https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/specials-1.png",
    open: true,
  });

  function handleEvent(e) {
    data = data.map((index) => {
      if (index.id === e) {
        return { ...index, open: true };
      }

      return { ...index, open: false };
    });
    settype(data.filter((index) => index.id === e)[0]);
    console.log(type);
  }

  const TitleStyle = {
    color: "white",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div className="MainSpecials">
      <div style={TitleStyle} className="">
        {data.map((item) => (
          <SpecailItems
            key={item.id}
            title={item.title}
            id={item.id}
            handleOpen={handleEvent}
            open={item.open}
          />
        ))}
      </div>
      <div>
        <SpecialComponent type={type} />
      </div>
    </div>
  );
}

export default SpecialsMain;
