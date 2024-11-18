export default function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container px-5">
          <a className="navbar-brand" href="#!">
            <i className="fa-solid fa-lemon"></i> Liste de fruits
          </a>
        </div>
      </nav>
      <div className="container p-5">
        <div className="col-4">
          <div className="row">
            <div className="col-10">
              <input
                type="text"
                className="form-control"
                id="fruit"
                placeholder="fruit"
              />
            </div>
            <div className="col-2">
              <button className="btn btn-success" id="btnAjouter">
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
          <table className="table table-striped mt-4">
            <thead>
              <tr>
                <th>Fruit</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody id="myTbody">
              <tr>
                <td>pomme</td>
                <td>
                  <button className="btn btn-danger">
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>

              <tr>
                <td>poire</td>
                <td>
                  <button className="btn btn-danger">
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>

              <tr>
                <td>cerise</td>
                <td>
                  <button className="btn btn-danger">
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <footer className="py-5 bg-dark">
        <div className="container px-4 px-lg-5">
          <p className="m-0 text-center text-white">Copyright &copy;IMC 2023</p>
        </div>
      </footer>
    </>
  );
}
