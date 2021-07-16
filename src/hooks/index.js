import { getExperiences } from "../api/index";
import { getAllParamsFromUrl } from "../libs/helpers";
import { useState, useEffect } from "react";
export function useExperiences() {
  const [experiences, setExperiences] = useState(null);
  useEffect(() => {
    let cancel = false;
    if (experiences == null) {
      getExperiences().then((res) => {
        if (cancel) return;
        setExperiences(res.data);
      });
      return () => {
        cancel = true;
      };
    }
  });
  return experiences;
}
export function useQuery() {
  const [params, setParams] = useState(null);
  useEffect(() => {
    const parametros = getAllParamsFromUrl();
    setParams(parametros);
  }, []);
  return params;
}
