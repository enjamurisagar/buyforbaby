import { client } from "../lib/client";
import { useParams } from "react-router-dom";

export const OfferDetailQuery = () => {
  const params = useParams();
  const query = `*[_type == "offers" && _slug ==  ${params}]`;
  return query;
};
