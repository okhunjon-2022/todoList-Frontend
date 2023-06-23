import React, { useState, ChangeEvent } from "react";
import { IAll } from "../../interfaces";
import "./About.css";
import axios from "../../api";



function About() {
  const [izoh, setIzoh] = useState<string>("");
  const [summa, setSumma] = useState<number>(0);
  const [select, setSelect] = useState<string>("");
  const [all, setAll] = useState<IAll[]>([]);

  const fruits = [
    "KIMGA BERILGAN",
    "GAZ",
    "ELEKTR",
    "SUV",
    "BOZOR",
    "ABDULLO OKA",
  ];

  const add = (): void => {
    // alert(`Malumotlar to'g'rigini tekshiring`);
    const newAll: any = {
      izoh: izoh,
      summa: summa,
      select: select,
    };

    // setAll([...all, newAll]);
    setIzoh("");
    setSumma(0);
    setSelect("");

    axios
      .post("/collector", all)
      .then((res) => {
        setAll([...all, newAll]);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setSelect(e.target.value);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "izoh") {
      setIzoh(event.target.value);
    } else if (event.target.name === "summa") {
      setSumma(Number(event.target.value));
    } else {
      setSelect(event.target.value);
    }
  };

  // const filteredProducts: any = all.filter(function (product) {
  //   return product.select === "mercedes"; // Filter products
  // });
  // console.log(filteredProducts);

  return (
    <div className="about">
      <div className="about__Container">
        <form className="form">
          <div className="form__container">
            <h1 className="form__header">Chiqimlarni kiritish</h1>
            <input
              required
              value={izoh}
              name="izoh"
              type="text"
              placeholder="Izoh..."
              onChange={handleChange}
            />

            <input
              required
              value={summa}
              name="summa"
              type="number"
              placeholder="Summa..."
              onChange={handleChange}
            />

            <select
              value={select}
              onChange={handleSelectChange}
              name="cars"
              required
            >
              {fruits.map((fruit, index) => (
                <option key={index} value={fruit}>
                  {fruit}
                </option>
              ))}
            </select>

            <button className="addButton" onClick={add}>
              Kiritish
            </button>
          </div>
        </form>

        <div className="table">
          <table>
            <tr>
              <th>Kimga</th>
              <th>Summa</th>
              <th>Izoh</th>
            </tr>
            {all?.map((item: IAll, key: number) => {
              return (
                <tr key={item.izoh}>
                  <td></td>
                  <td>{item?.summa} so'm</td>
                  <td>{item?.izoh}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default About;
