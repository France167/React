import React from "react";

function Update() {
  return (
    <div>
      <h3 className="text-center my-5">Detalles personales </h3>
      <form>
        <input
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="Curso"
        />
        <input
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="Nombre Completo"
        />
        <p className="mx-5">
          Fecha de nacimiento <input className="mx-5" type="date"></input>
        </p>

        <input
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="Residencia"
        />
        <input
          className="form-control form-control-sm w-50 m-auto my-3"
          type="phone"
          placeholder="Telefono"
        />
        <input
          className="form-control form-control-sm w-50 m-auto my-3"
          type="email"
          placeholder="Email"
        />
        <h3 className="text-center my-5">Info Bootcamp </h3>
        <p className="mx-5">
          Fecha de faltas <input className="mx-5" type="date"></input>
        </p>
        <input
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="Titulo de projecto final"
        />

        <textarea
          className="form-control w-50 m-auto  my-3"
          id="details"
          placeholder="Descripción del proyecto"
          rows="3"
        ></textarea>
        <textarea
          wrap="hard"
          className="form-control w-50 m-auto  my-3"
          id="comments"
          placeholder="Comentarios Profesorado"
          rows="3"
          cols="5"
        ></textarea>
        <h3 className="text-center my-5">Info Releevant </h3>
        <select
          className="form-control form-control-sm custom-select w-50 m-auto"
          id="origen"
        >
          <option defaultValue>Origen..</option>
          <option value="Landing">Landing</option>
          <option value="Web">Web</option>
          <option value="Call">Call</option>
          <option value="Whatsapp">Whatsapp</option>
          <option value="Mail">Mail</option>
          <option value="Boca">Boca_Boca</option>
          <option value="Referral">Referral</option>
          <option value="Evento">Evento</option>
          <option value="Otros">Otros</option>
        </select>
        <input
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="Pc"
        />
        <input
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="Matricula"
        />
        <select
          className="form-control form-control-sm custom-select w-50 m-auto"
          id="inlineFormCustomSelectPref"
        >
          <option defaultValue>Tipo de pago..</option>
          <option value="Directo">Directo</option>
          <option value="Cuota">Cuota</option>
        </select>
        <textarea
          wrap="hard"
          className="form-control w-50 m-auto  my-3"
          id="pago"
          placeholder="Detalles sobre el pago"
          rows="3"
          cols="5"
        ></textarea>
        <div className="d-grid gap-2 col-2 mx-auto">
          <button className="btn btn-primary mb-5 mt-3" type="button">
            Enviar
          </button>
        
        </div>
      </form>
    </div>
  );
}

export default Update;
