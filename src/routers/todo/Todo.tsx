import React, {
  useState,
  useEffect,
  ChangeEvent,
  FormEventHandler,
  FormEvent,
} from "react";
import "./Todo.css";
import { IAll, ITask } from "../../interfaces";
import axios from "../../api/index";

let initialState = {
  izoh: "",
  summa: 0,
  select: "",
};

export default function Todo() {
  const [data, setData] = useState<IAll>(initialState);
  const [item, setItem] = useState<IAll[]>([]);
  //   console.log(data);

  const createTodo = (e: FormEvent<HTMLFormElement>): void => {
    // e.preventDefault();

    axios
      .post("/collector", data)
      .then((res) => {
        console.log(res);
        setData(initialState);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  useEffect(() => {
    axios
      .get("/collector")
      .then((res) => {
        // console.log(res)
        setItem(res.data.innerData);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(item);

  return (
    <div>
      <form onSubmit={createTodo}>
        <input
          value={data.izoh}
          type="text"
          placeholder="izoh..."
          onChange={(e) => setData({ ...data, izoh: e.target.value })}
        />
        <input
          value={data.summa}
          type="number"
          placeholder="summa..."
          onChange={(e) => setData({ ...data, summa: +e.target.value })}
        />

        <select
          value={data.select}
          onChange={(e) => setData({ ...data, select: e.target.value })}
          name=""
          id=""
        >
          <option value="phone">Telefon</option>
          <option value="tv">Televizor</option>
          <option value="laptop">Kompyuter</option>
          <option value="watch">Soat</option>
          <option value="electronic">Maishiy texnika</option>
        </select>

        <button type="submit">Kiritish</button>
      </form>

      {item?.map((i) => {
        return (
          <h1>
            {i.izoh} {i.select} {i.summa}
          </h1>
        );
      })}
    </div>
  );
}
