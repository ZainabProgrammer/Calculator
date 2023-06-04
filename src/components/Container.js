import React, { useState } from "react";

const Container = () => {
  const [value, setvalue] = useState("");

  const handleChange = (e) => {
    setvalue(e.target.value);
  };

  const fullClear = () => {
    if (value >= 0) {
      setvalue("");
    } else {
      setvalue("");
    }
  };
  const P_M = () => {
    setvalue(-1 * value);
  };
  const Add = () => {
    setvalue(eval(value));
  };
  const percen = () => {
    setvalue(value / 100);
  };

  return (
    <div className="container-fluid">
      {/* <div className="upper-part">733</div>
      <div className="lower-part">+-</div> */}
      <div className="row" style={{ height: "30vh" }}>
        <div className="col bg-light text-end my-5">
          <h1 className="fw-bold my-5 mx-3">
            <input
              type="text"
              readOnly
              className="form-control form-control-lg shadow text-end"
              value={value}
              onChange={handleChange}
            />
          </h1>
        </div>
      </div>
      <div className="row" style={{ height: "70vh" }}>
        <div className="col bg-dark text-white shadow-lg">
          <div className="row text-center my-5">
            <button
              className="col fs-1 border border-secondary btn btn-dark mx-3 col-xsm-3"
              value={""}
              onClick={() => fullClear()}
            >
              {" "}
              AC
            </button>
            <button
              className="col fs-1 border  border-secondary btn btn-dark  mx-3 col-xsm-3"
              value={""}
              onClick={() => P_M()}
            >
              +/-
            </button>
            <button
              className="col fs-1  border border-secondary btn btn-dark  mx-3  col-xsm-3"
              value={"%"}
              onClick={() => percen()}
            >
              %
            </button>
            <button
              className="col fs-1  border border-secondary btn btn-danger  mx-3 col-xsm-3"
              value={"/"}
              onClick={(e) => setvalue(value + e.target.value)}
            >
              ÷
            </button>
          </div>
          <div className="row text-center my-5">
            <button
              className="col fs-1 border border-secondary border-2 btn btn-dark mx-3"
              value={7}
              onClick={(e) => setvalue(value + e.target.value)}
            >
              7
            </button>
            <button
              className="col fs-1 border btn btn-dark border-secondary border-2 mx-3"
              value={8}
              onClick={(e) => setvalue(value + e.target.value)}
            >
              8
            </button>
            <button
              className="col fs-1  border btn btn-dark border-secondary border-2  mx-3 "
              value={9}
              onClick={(e) => setvalue(value + e.target.value)}
            >
              9
            </button>
            <button
              className="col fs-1  border btn btn-danger border-secondary border-2  mx-3"
              value={"*"}
              onClick={(e) => setvalue(value + e.target.value)}
            >
              ×
            </button>
          </div>
          <div className="row text-center my-5">
            <button
              className="col fs-1 border btn btn-dark border-secondary border-2  mx-3"
              value={4}
              onClick={(e) => setvalue(value + e.target.value)}
            >
              4
            </button>
            <button
              className="col fs-1 border btn btn-dark  border-secondary border-2 mx-3"
              value={5}
              onClick={(e) => setvalue(value + e.target.value)}
            >
              5
            </button>
            <button
              className="col fs-1  border  btn btn-dark border-secondary border-2  mx-3"
              value={6}
              onClick={(e) => setvalue(value + e.target.value)}
            >
              6
            </button>
            <button
              className="col fs-1  border border-secondary border-2 btn btn-danger  mx-3"
              value={"-"}
              onClick={(e) => setvalue(value + e.target.value)}
            >
              -
            </button>
          </div>
          <div className="row text-center my-5">
            <button
              className="col fs-1 border border-secondary border-2 btn btn-dark  mx-3"
              value={1}
              onClick={(e) => setvalue(value + e.target.value)}
            >
              1
            </button>
            <button
              className="col fs-1 border  border-secondary border-2 btn btn-dark mx-3"
              value={2}
              onClick={(e) => setvalue(value + e.target.value)}
            >
              2
            </button>
            <button
              className="col fs-1  border border-secondary border-2 btn btn-dark mx-3"
              value={3}
              onClick={(e) => setvalue(value + e.target.value)}
            >
              3
            </button>
            <button
              className="col fs-1  border border-secondary border-2 btn btn-danger  mx-3"
              value={"+"}
              onClick={(e) => setvalue(value + e.target.value)}
            >
              +
            </button>
          </div>
          <div className="row text-center my-5">
            <button
              className="col-6 fs-1 border  border-secondary btn btn-dark border-2 mx-2"
              value={0}
              onClick={(e) => setvalue(value + e.target.value)}
            >
              0
            </button>
            <button
              className="col fs-1  border border-secondary border-2 btn btn-dark mx-2"
              value={"."}
              onClick={(e) => setvalue(value + e.target.value)}
            >
              .
            </button>
            <button
              className="col fs-1  border border-secondary border-2 btn btn-danger  mx-2"
              value={""}
              onClick={() => Add()}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
