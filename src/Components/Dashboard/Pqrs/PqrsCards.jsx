import { useState } from "react";
import Modal from "./Modal";
import ReactStarts from "react-stars";

function PqrsCards({ data }) {
  const [userId, setuserId] = useState();

  return (
    <>
      {data.map(({ usuario, pqrsItem, _id }) => (
        <>
          <tr key={_id}>
            <td className="text-center pt-3 filas_info_corta">
              {usuario.nombrePNA
                ? usuario.nombrePNA
                : usuario.nombreCON
                ? usuario.nombreCON
                : usuario.nombreEmpresa
                ? usuario.nombreEmpresa
                : ""}
            </td>
            <td className=" pt-3 filas_info_corta">
              <div className="d-flex justify-content-center">
                {pqrsItem.tipo}
              </div>
            </td>

            <td className="p-3 filas_info_corta">
              <button
                href=""
                className="btn bg-blue px-4"
                data-bs-toggle="modal"
                data-bs-target="#peticion"
                onClick={() => setuserId(pqrsItem._id)}
              >
                Ver mas...
                <i className="  bi bi-cursor   fs-6"></i>
              </button>
            </td>
          </tr>
        </>
      ))}
      {userId ? <Modal userId={userId} /> : null}
    </>
  );
}

export default PqrsCards;
