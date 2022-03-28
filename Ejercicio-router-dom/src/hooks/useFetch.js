import { useEffect } from "react";

export default function useFetch(url, setState) {
  useEffect(
    function () {
      async function fetchApi() {
        let response = await fetch(url);
        let data = await response.json();

        setState(data);
      }
      fetchApi();
    },
    [url, setState]
  );
}
