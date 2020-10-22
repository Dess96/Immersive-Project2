import { useState, useEffect } from "react";
import GetLocal from "../Helper/getLocal";
let local = [];

const GetSimilar = (search) => {
  const [sug, setSug] = useState([{ Name: "", Type: "" }]);

  useEffect(() => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://tastedive.com/api/similar?q=${search}&k=388580-MusicPla-7JAJIVRN&info=1`;
    fetch(proxyurl + url)
      .then((resp) => resp.json())
      .then((res) => {
        //Verificar local Storage
        local = GetLocal(res.Similar.Info[0].Type);
        if (local !== null) {
          local.forEach((element) => {
            res.Similar.Results.forEach((localEl) => {
              if (element.id === localEl.yID) {
                localEl.found = "true";
              }
            });
          });
        }
        setSug(res.Similar.Results);
      })
      .catch((ex) => {
        console.error(ex);
      });
  }, [search]);
  return sug;
};

export default GetSimilar;
