import React, { useEffect, useState } from "react";
import { getPqrsId, udpatePqrs } from "../../../Data/Pqrs";

function Modal({ userId }) {
  console.log(userId)
  const [data, setData] = useState({});
  const [respuesta, setrespuesta] = useState("")

  useEffect(() => {
    const loadData = async () => {
      const response = await getPqrsId(userId);
      setData(response);
    };

    if (userId) {
      loadData();
    }
  }, [userId]);
console.log(data.perfil)
  return userId ? (
    <tr>
      <td>
        <div
          className="modal fade"
          id="peticion"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="mas-datosLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="mas-datosLabel">
                  Motivo P-Q-R-S{" "}
                </h1>
                <p>{data.motivo}</p>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p className="text-justify">
                  {data.motivoRechazoCON}
                </p>
                <textarea
                  name=""
                  id=""
                  cols="55"
                  rows="10"
                  className="p-2 w-100"
                  placeholder="Escribe La Respuesta..."
                  onChange={(e) => setrespuesta(e.target.value)}
                ></textarea>
                <button onClick={()=>udpatePqrs(id,respuesta)} className="btn btn-primary w-100 my-1">Enviar</button>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  ) : null;
}

export default Modal;