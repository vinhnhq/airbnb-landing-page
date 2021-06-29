import { useEffect, useState, useRef, useCallback } from "react";

import { Layout, AutoComplete } from "../components";

export default function Home() {
  const controllerRef = useRef();

  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function search() {
      if (!value) {
        return;
      }

      if (controllerRef.current) {
        controllerRef.current.abort();
      }

      const controller = new AbortController();
      controllerRef.current = controller;

      try {
        const numResults = 5;
        const input = `https://api.first.org/data/v1/countries?q=${value}&limit=${numResults}`;
        const res = await fetch(input, {
          method: "GET",
          signal: controllerRef.current?.signal,
        });
        const { data } = await res.json();

        const loadedItems = Object.values(data);

        setItems(loadedItems);

        controllerRef.current = null;
      } catch (e) {
        console.log(e);
      }
    }

    search();
  }, [value]);

  const onSelectHandler = useCallback((selectedValue) => {
    setValue(selectedValue);
  }, []);

  const onChangeHandler = (e) => setValue(e.target.value);

  return (
    <Layout>
      <AutoComplete
        items={items}
        value={value}
        getItemValue={(item) => item.country}
        onChange={onChangeHandler}
        onSelect={onSelectHandler}
      />
    </Layout>
  );
}
